//btn target
let saveBtn = document.querySelector("#saveChickenBtn")
let chickenCard = document.querySelector(".output")
loadChickenData()
//target the inputs
newChickenSave = () => {
   const newChickenObj = {
    name: document.getElementById("chickenName").value,
    gender: document.getElementById("chickenGender").value,
    color: document.getElementById("chickenColor").value,
    spicelevel: document.getElementById("chickenSpice").value
};
API.saveChicken(newChickenObj).then(loadChickenData);
console.log(newChickenObj)
};

function loadChickenData() {
    chickenCard.innerHTML = "";
    API.getChickens().then(parsedChicken => {
        parsedChicken.forEach(chick => {
            console.log(chick.id)
            console.log(parsedChicken)
            chickenCard.innerHTML += `
            <section id="sectionId">
            <h2> New Chicken </h2>
            <p>${chick.name}</p>
            <p>${chick.gender}</p>
            <p>${chick.color}</p>
            <p>${chick.spicelevel}</p>
            <button onClick= deleteStuff(${chick.id})>Delete</button>
            <button id="editBtn">Edit</button>
            </section>`
        });
    })
}

 saveBtn.addEventListener("click", newChickenSave)
// when i trigger this function it targets the chicken ID then fetch delete, after that it makes new fetch to get all the chicken and reloads the page
function deleteStuff(chickenId) {
            API.deleteChicken(chickenId).then(loadChickenData)
        
    }
