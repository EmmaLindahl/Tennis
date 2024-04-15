const playerA = {player: "A", score: 0}
const playerB = {player: "B", score: 0}

let currentScorer 
let AText 
let BText

//get elements when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    AText = document.getElementById("A")
    BText = document.getElementById("B")
    currentScorer = document.getElementById("currentScorer")
});

function getPoint(scorer){
    currentScorer.innerHTML = `Player ${scorer.player} Scores!`
    scorer.score++
    score(playerA,playerB)
};

//check and set the current scores
function score(obj, obj2){
    const points = ["Love", "Fifteen", "Thirty", "Forty", "Game"]

    //Standard points
    if(obj.score <= 4 && obj2.score < 3 || obj2.score <= 4 && obj.score < 3){
        AText.innerHTML = `${points[obj.score]}`
        BText.innerHTML = `${points[obj2.score]}`
        return
    }

    //Deuce-Advantage
    if(obj.score === obj2.score){
        AText.innerHTML  = `Deuce`
        BText.innerHTML  = `Deuce`
    }else if(obj.score === obj2.score + 1 || obj2.score === obj.score + 1){
        if(obj.score > obj2.score){
            AText.innerHTML = `Advantage`
            BText.innerHTML = `Deuce`
        }else{
            AText.innerHTML = `Deuce`
            BText.innerHTML = `Advantage`
        } 
    }else{
        if(obj.score > obj2.score){
            AText.innerHTML = `Game`
            BText.innerHTML = `Deuce`
        }else{
            AText.innerHTML = `Deuce`
            BText.innerHTML = `Game`
        }
    }
}