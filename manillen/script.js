
const scoreLijstL = [0];
const scoreLijstR = [0];

function opschrijvenLinks() {
    var scoreNieuwL = parseInt(document.getElementById("puntenl").value);
    var scoreOudL = document.getElementById("scoresOudLinks");
    var scoreTotaalL = document.getElementById("totaalLinks");
    if (isNaN(scoreNieuwL) === false ) { 
        scoreLijstL.push(parseInt(scoreTotaalL.innerHTML) + scoreNieuwL); 
        scoreOudL.innerHTML = scoreLijstL.slice(0, scoreLijstL.length - 1).join('<br>');
        scoreOudL.classList.add("strike");
        scoreTotaalL.innerHTML = parseInt(scoreTotaalL.innerHTML) + scoreNieuwL;
        document.getElementById("puntenl").value = "";
    } 
    
    
}

function opschrijvenRechts() {
    var scoreNieuwR = parseInt(document.getElementById("puntenr").value);
    var scoreOudR = document.getElementById("scoresOudRechts");
    var scoreTotaalR = document.getElementById("totaalRechts");
    if (isNaN(scoreNieuwR) === false) {
        scoreLijstR.push(parseInt(scoreTotaalR.innerHTML) + scoreNieuwR); 
        scoreOudR.innerHTML = scoreLijstR.slice(0, scoreLijstR.length - 1).join('<br>');
        scoreOudR.classList.add("strike");
        scoreTotaalR.innerHTML = parseInt(scoreTotaalR.innerHTML) + scoreNieuwR;
        document.getElementById("puntenr").value = "";
    }    
}
   

function reset() {
    var zeker = confirm("Zie je zeker daje alle puntn wilt wegdoen?");
    if (zeker == true) {
        location.reload();
    }     
}

