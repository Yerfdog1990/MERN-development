function bookHotel(hotelId, callback) {
    setTimeout(() => {
        console.log(`Hotel ${hotelId} booked`);
        callback(null, hotelId);
    }, 1000);
}

function checkIn(hotelId, callback) {
    setTimeout(() => {
        console.log(`Checked into hotel ${hotelId}`);
        callback(null, hotelId);
    }, 1000);
}

function orderRoomService(hotelId, callback) {
    setTimeout(() => {
        console.log(`Room service delivered to hotel ${hotelId}`);
        callback(null, hotelId);
    }, 1000);
}

function checkOut(hotelId, callback) {
    setTimeout(() => {
        console.log(`Checked out of hotel ${hotelId}`);
        callback(null, hotelId);
    }, 1000);
}

// Callback Hell Example
bookHotel(101, (error, hotelId) => {
    if (error) {
        console.error(error);
    } else {
        checkIn(hotelId, (error, hotelId) => {
            if (error) {
                console.error(error);
            } else {
                orderRoomService(hotelId, (error, hotelId) => {
                    if (error) {
                        console.error(error);
                    } else {
                        checkOut(hotelId, (error, hotelId) => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log(
                                    `Hotel stay at ${hotelId} completed successfully`
                                );
                            }
                        });
                    }
                });
            }
        });
    }
});


// You can eliminate the Pyramid of Doom by having each
// asynchronous function return a Promise and then chaining them with .then().
function bookHotel1(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hotel ${hotelId} booked`);
            resolve(hotelId);
        }, 1000);
    });
}

function checkIn1(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Checked into hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

function orderRoomService1(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Room service delivered to hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

function checkOut1(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Checked out of hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

// Promise Chaining
bookHotel1(101)
    .then(checkIn1)
    .then(orderRoomService1)
    .then(checkOut1)
    .then((hotelId) => {
        console.log(`Hotel stay at ${hotelId} completed successfully`);
    })
    .catch((error) => {
        console.error(error);
    });