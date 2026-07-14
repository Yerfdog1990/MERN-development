import express from 'express';
import ApiError from './utils/ApiError.js';
import fs from 'fs';

const app = express();
const PORT = 8007;

// Parse JSON request bodies
app.use(express.json());

// pseudo database
let username = 'bekas';
let password = 'bekas123';

// Middlewares scoped to POST /login only
const checkEmpty = (req, res, next) => {
    if (!req.body || typeof req.body.username !== 'string' || req.body.username.trim() === '') {
        return next(new ApiError(400, 'Please enter valid username first'));
    }
    next();
};

const checkCredentials = (req, res, next) => {
    if (req.body.username === username && req.body.password === password) {
        return next();
    }
    return next(new ApiError(401, 'Invalid credentials'));
};

const logger = (req, res, next) => {
    const log = `${req.body.username || 'unknown'} from ip address ${req.ip} was accessing ${req.originalUrl} at ${new Date().toISOString()}\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) console.error('Failed to write log:', err);
        next();
    });
};

// login route with scoped middlewares
app.post('/login', checkEmpty, checkCredentials, logger, (req, res) => {
    res.json({ message: 'Login successful' });
});

// error middleware — bottom of app
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const payload = { message: err.message };
    if (process.env.NODE_ENV !== 'production') payload.stack = err.stack;
    res.status(statusCode).json(payload);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
