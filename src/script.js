const A_TableauRandom = [];

for (let i = 0; i < 20; i++) {
    A_TableauRandom.push(Math.round(Math.random()* (50) -10));
}

console.log(A_TableauRandom);

const O_result = document.getElementById("textContentOutput");

let I_compteur = -1;
const I_intervale = setInterval(() => {
    if (document.getElementById("message") !== null) {
        document.getElementById("message").remove();
    }
    I_compteur++;
    O_result.innerText = A_TableauRandom[I_compteur].toString();
    const O_message = document.createElement('p');
    O_message.id = "message";
    O_result.classList.remove("bleu", "vert", "orange", "rouge");

    if (A_TableauRandom[I_compteur] <= 0) {
        O_result.classList.add("bleu");
        O_message.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !"
        O_result.before(O_message);
    }
    else if (A_TableauRandom[I_compteur] < 20) {
        O_result.classList.add("vert");
        O_message.remove();
    }
    else if (A_TableauRandom[I_compteur] < 30) {
        O_result.classList.add("orange");
        O_message.remove();
    }
    else {
        O_result.classList.add("rouge");
        O_message.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!"
        O_result.before(O_message);
    }

    if (I_compteur >= A_TableauRandom.length - 1) clearInterval(I_intervale)
}, 2000);