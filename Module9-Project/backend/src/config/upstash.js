import { Redis } from '@upstash/redis'
import { Ratelimit} from "@upstash/ratelimit";

import dotenv from "dotenv";
dotenv.config();
// Create a rate limiter that allows 10 requests per 10 seconds
const redis = Redis.fromEnv()
const rateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(10, "10 s")
})

export default rateLimit;
