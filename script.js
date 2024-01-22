let n = prompt("Instrodu numarul!");
let winningButton;
const onClick = function () {
    winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
    if (winningButton == this.id) {
        alert("Castigator!");
    } else {
        alert("Necastigator!");
    }
};

for (let i = 1; i <= n; ++i) {
    const button = document.createElement("button");
    document.querySelector("body").appendChild(button);
    button.id = i;
    button.innerText = i;
    button.className = "butons";
    button.addEventListener("click", onClick);
}
