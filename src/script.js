const A_TableauRandom = [];

for (let i = 0; i < 20; i++) {
    A_TableauRandom.push(Math.round(Math.random()* (50) -10));
}

console.log(A_TableauRandom);

const O_result = document.getElementById("textContentOutput");

let I_compteur = -1;
const I_intervale = setInterval(() => {
    I_compteur++;
    O_result.innerText = A_TableauRandom[I_compteur].toString();

    O_result.classList.remove("bleu", "vert", "orange", "rouge");

    if (A_TableauRandom[I_compteur] <= 0) {O_result.classList.add("bleu")}
    else if (A_TableauRandom[I_compteur] < 20) {O_result.classList.add("vert")}
    else if (A_TableauRandom[I_compteur] < 30) {O_result.classList.add("orange")}
    else {O_result.classList.add("rouge")}

    if (I_compteur >= A_TableauRandom.length - 1) clearInterval(I_intervale)
}, 2000);