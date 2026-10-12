
const itemInput = document.querySelector("#itemInput")
const addButton = document.querySelector("#addButton")
const shoppingList = document.querySelector("#shoppingList")


addButton.addEventListener("click", () => {
    const itemText = itemInput.value
  const list =  document.createElement("li")
  list.textContent = itemText
  itemInput.value = ""
  const removeButton = document.createElement("button")
removeButton.textContent = "Remove"
removeButton.addEventListener("click", () => {
        list.remove()
})
list.appendChild(removeButton)
 shoppingList.appendChild(list)

})