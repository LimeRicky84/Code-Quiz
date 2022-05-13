function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

function highScoreList() {
    const hiscore = JSON.parse(window.localStorage.getItem("highscores")) || []

    highscores.sort(function(a, b) {
        return b.score - a.score
    })
    
    hiscore.forEach(function(score) {
        var liTag = document.createElement('li')
        liTag.textContent = score.name + " - " + score.score;

        var olEl = document.getElementById("highscores")
        olEl.appendChild(liTag)
    })
}

document.getElementById('clear').onclick = clearHighscores


highScoreList()