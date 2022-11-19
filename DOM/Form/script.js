const form = document.querySelector("#shelterform");
const input = document.querySelector("#input");
const list = document.querySelector('#catCont');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("LI");
    newLi.innerText = catName;
    list.append(newLi);
    input.value = " ";
});
