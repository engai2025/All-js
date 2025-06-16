// Exercise 32:  Using querySelector & querySelectorAll

 
const mainTitle = document.querySelector(".title");
console.log("Main Title:", mainTitle.textContent);

 
const aboutSection = document.querySelector("#about");
console.log("About Section:", aboutSection);

 
const projects = document.querySelectorAll(".project");
console.log("Dhammaan Projects:");
projects.forEach((project, index) => {
  console.log(`Project ${index + 1}:`, project.textContent);
});
