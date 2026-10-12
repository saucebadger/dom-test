const redPara = document.createElement("p")
redPara.textContent = "Hey I'm Red!"
redPara.style.color = "red"
container.appendChild(redPara)

const blueHeader = document.createElement("h3")
blueHeader.textContent = "I'm a blue header"
blueHeader.style.color = "blue"
container.appendChild(blueHeader)

const pinkDiv = document.createElement("div")
pinkDiv.style.backgroundColor = "pink"
pinkDiv.style.border = "solid"
pinkDiv.style.height = "100px"

const divHeader = document.createElement("h1")
divHeader.textContent = "I'm in a div"

const divPara = document.createElement("p")
divPara.textContent = "ME TOO!"

pinkDiv.appendChild(divHeader)
pinkDiv.appendChild(divPara)

container.appendChild(pinkDiv)

