// Exercise 9: Object Methods
let cars = {
    make: "Toyota",
    modal: "Corolla",
    Year: 2025,
    start: function() {
        console.log(`Layli 9: The Care ${this.make} has Started.`);
    }
};
cars.start();