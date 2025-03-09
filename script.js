function searchGames() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let games = document.querySelectorAll(".game-image");

    games.forEach(game => {
        let title = game.querySelector(".overlay p").textContent.toLowerCase();
        if (title.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}



/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


const video = document.getElementById('myVideo');

// Aggiungi l'evento di click per mettere in pausa o riprendere il video
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();  // Se il video è in pausa, lo avvia
    } else {
        video.pause();  // Se il video sta suonando, lo mette in pausa
    }
});

