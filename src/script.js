const A_TableauRandom = [];

for (let i = 0; i < 20; i++) {
    A_TableauRandom.push(Math.round(Math.random()* (50) -10));
}

console.log(A_TableauRandom);

const result = document.getElementById("textContentOutput");

let I_compteur = -1;
const I_intervale = setInterval(() => {
    I_compteur++;
    result.innerText = A_TableauRandom[I_compteur].toString();
    if (I_compteur >= A_TableauRandom.length - 1) clearInterval(I_intervale)
}, 2000);

