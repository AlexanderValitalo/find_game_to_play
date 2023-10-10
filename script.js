const jsonGameFile = "./games.json";

const display = document.querySelector("#display-games");
const checkbox1 = document.querySelector("#cb1");
const checkbox2 = document.querySelector("#cb2");
const checkbox3 = document.querySelector("#cb3");
const checkbox4 = document.querySelector("#cb4");


const getGamesData = async () => {
    const res = await fetch(jsonGameFile);
    const gameData = await res.json();
    //console.log(gameData);
    return gameData;
}




const displayGames = async () => {
    const payload = await getGamesData();      
        
    let dataDisplay = payload.filter((object) => {
        if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked){
            return object;
        }
        else if(checkbox1.checked && object.console === "SMD"){
            return object;
        }
        else if(checkbox2.checked && object.console === "NES")
        {
            return object;
        }
        else if(checkbox3.checked && object.console === "SNES")
        {
            return object;
        }
        else if(checkbox4.checked && object.numberOfPlayers === "2")
        {
            return object;
        }
    }).map((object) => {
        const {name} = object;

        return `
        <div class="container">
            <p>${name}</p>
        </div>
        `
    }).join("");                           

    display.innerHTML = dataDisplay;       
}
displayGames();  

checkbox1.addEventListener("change", () => {
    displayGames();
});

checkbox2.addEventListener("change", () => {
    displayGames();
});

checkbox3.addEventListener("change", () => {
    displayGames();
});

checkbox4.addEventListener("change", () => {
    // checkbox1.checked = false;
    // checkbox2.checked = false;
    // checkbox3.checked = false;
    displayGames();
});