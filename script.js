const casas = document.querySelectorAll(".casa");
const vencedor1 = document.querySelectorAll("#vencedor");
let vez = 0;

let validas = (c1, c2, c3) => {
  let cor1 = c1.style.backgroundColor;
  let cor2 = c2.style.backgroundColor;
  let cor3 = c3.style.backgroundColor;

  return cor1 === cor2 && cor2 === cor3 && cor3 !== "";
};
let quemVenceu = () => {
  return (
    validas(casas[0], casas[1], casas[2]) ||
    validas(casas[3], casas[4], casas[5]) ||
    validas(casas[6], casas[7], casas[8]) ||
    validas(casas[0], casas[3], casas[6]) ||
    validas(casas[1], casas[4], casas[7]) ||
    validas(casas[2], casas[5], casas[8]) ||
    validas(casas[0], casas[4], casas[8]) ||
    validas(casas[2], casas[4], casas[6])
  );
  
};

let terminarGame = vencedor => {
  for (let casa of casas) {
    casa.onclick = null;
  }
  if (vencedor) {
    if (vez % 2) {
      vencedor1.innerHTML = "Venceu";
      vencedor1.style = "color:#003399";
    } else {
      vencedor1.innerHTML = "Venceu";
      vencedor.style = "color:#ffff00";
    }
  } else {
    vencedor1.innerHTML = "VELHA";
    
  }

};
let jogar = event => {
  if(vez%2) {
    event.target.style.backgroundColor = "#003399";
  } else {
    event.target.style.backgroundColor = "#ffff00";
  }

vez++;

  event.target.onclick = null;

  let vencedor = quemVenceu();
  if (vencedor || vez === 10) {
    terminarGame(vencedor);
  }
};
for (let casa of casas){
    casa.onclick= jogar;
}
