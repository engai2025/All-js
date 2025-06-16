// Exercise 27: Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 3, name: "Eng Abdirahmaan" });
            } else {
                reject("Cilad baa dhacday markii xogta la raadinayay.");
            }
        }, 1500);
    });
}
console.log("Layli 27 (Promise):");
fetchDataWithPromise()
    .then((data) => { console.log("Xogta la helay:", data); })
    .catch(error => console.log("Cilad:", error));