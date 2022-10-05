const input = document.querySelector(".inputField");
const btn = document.querySelector(".addBtn");
const toDo = document.querySelector(".toDoInput");

btn.addEventListener("click", () => {
   const listItem = document.createElement("li");
   listItem.innerText = input.value;
   listItem.classList.add("listItemAdded");
   toDo.appendChild(listItem);
   input.value = "";

   listItem.addEventListener("click", () => {
      listItem.classList.add("listItemDone");
   })
   
   listItem.addEventListener("dblclick", () => {
      toDo.removeChild(listItem);
   });
});
