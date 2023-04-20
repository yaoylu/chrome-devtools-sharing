const quote = document.getElementById("quote");
const button = document.getElementById("button");
const link = document.getElementById("link");
const changeContent = document.getElementById("change-text");
const paragraph = document.getElementById("paragraph");
const changeAttribute = document.getElementById("change-attribute");
const deleteElement = document.getElementById("delete-element");

quote.style.display = "none";

button.addEventListener("click", () => {
    if (quote.style.display === "none") {
        quote.style.display = "block";
    }else{
        quote.style.display = "none";
    }
});

link.addEventListener("click", () => {
  // Were you able to find this code during exercise 1?
  alert("The link was clicked");
});

changeContent.addEventListener("click", () => {
  // Were you able to find this code during exercise 1?
  paragraph.innerHTML = "Changed!!";
});

changeAttribute.addEventListener("click", () => {
    // Were you able to find this code during exercise 1?
    paragraph.setAttribute("style", "border: 1px solid black;");
}); 

deleteElement.addEventListener("click", () => {
    // Were you able to find this code during exercise 1?
    paragraph.remove();
    });