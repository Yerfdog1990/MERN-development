
// You can eliminate the Pyramid of Doom by having each
// asynchronous function return a Promise and then chaining them with .then().
function bookHotel(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hotel ${hotelId} booked`);
            resolve(hotelId);
        }, 1000);
    });
}

function checkIn(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Checked into hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

function orderRoomService(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Room service delivered to hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

function checkOut(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Checked out of hotel ${hotelId}`);
            resolve(hotelId);
        }, 1000);
    });
}

// Promise Chaining
bookHotel(101)
    .then(checkIn)
    .then(orderRoomService)
    .then(checkOut)
    .then((hotelId) => {
        console.log(`Hotel stay at ${hotelId} completed successfully`);
    })
    .catch((error) => {
        console.error(error);
    });