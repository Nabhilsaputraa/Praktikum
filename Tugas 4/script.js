document.getElementById("dark").onclick = function () {
    document.body.style.backgroundColor = "#1a1a1a";
    document.getElementById("page").style.color = "white";
    document.getElementById("title").style.color = "white";
    document.getElementById("navigasi").style.backgroundColor = "black";
    document.getElementById("Galery").style.backgroundColor = "#1a1a1a";
    document.getElementById("footer").style.backgroundColor = "black";
    document.getElementById("footer").style.color = "white";
    
    const cards = document.querySelectorAll(".col .card");
    
    cards.forEach(card => {
        card.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        card.querySelector(".card-body").style.color = "white";
        card.querySelector(".card-footer").style.color = "rgba(255, 255, 255, 0.7)";
    });
};

document.getElementById("light").onclick = function () {
    document.body.style.backgroundColor = "white";
    document.getElementById("page").style.color = "black";
    document.getElementById("title").style.color = "black";
    document.getElementById("navigasi").style.backgroundColor = "darkblue";
    document.getElementById("Galery").style.backgroundColor = "white";
    document.getElementById("footer").style.backgroundColor = "darkblue";
    document.getElementById("footer").style.color = "white";

    const cards = document.querySelectorAll(".col .card");

    cards.forEach(card => {
        card.style.backgroundColor = "white";
        card.querySelector(".card-body").style.color = "black";
        card.querySelector(".card-footer").style.color = "black";
    });
};
