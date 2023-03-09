const tej = document.querySelector("#tej");
const tojas = document.querySelector("#tojás");
const cukor = document.querySelector("#cukor");
const mennyisegek = [0.2, 2, 1];
let fő = document.querySelector(".input");

fő.addEventListener("change", () => {
  tej.innerText = String((mennyisegek[0] * Number(fő.value)).toFixed(1));
  tojas.innerText = String(mennyisegek[1] * Number(fő.value));
  cukor.innerText = String(mennyisegek[2] * Number(fő.value));
});
