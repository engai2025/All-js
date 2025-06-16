
// Exercise 26: Asynchronous JavaScript (Callback)
function getUserData(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "John Mask" };
        callback(user);
    }, 1000);
}
console.log("Layli 26: Bilaabidda helidda xogta...");
getUserData(function(user) {
    console.log("Xogtii la helay:", user);
});
console.log("Koodhkani ma xannibna.");