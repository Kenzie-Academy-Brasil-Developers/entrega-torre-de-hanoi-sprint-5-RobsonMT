function comecar(){
    let numDiscos = document.querySelector("#numDiscos").value;
    let btnReiniciar = document.getElementById("btnReiniciar");
    let btnComecar = document.getElementById("btnComecar");
    btnReiniciar.disabled = false;
    btnComecar.disabled = true;
    if(numDiscos == 3){document.querySelector("#labelMinMov").innerText = 7};
    if(numDiscos == 4){document.querySelector("#labelMinMov").innerText = 15};
    if(numDiscos == 5){document.querySelector("#labelMinMov").innerText = 31};
    document.querySelector("#labelMov").innerText = 0;
    let discs = document.querySelectorAll("span.disc");
    discs.forEach(disc => { disc.parentNode.removeChild(disc)});
    addDiscs(numDiscos);
}
//   function reiniciar(){
//     btnReiniciar.disabled = true;
//     btnComecar.disabled = false;
//     // let numDiscos = document.querySelector("#numDiscos").value;
//     // if(numDiscos == 3){document.querySelector("#labelMinMov").innerText = 7};
//     // if(numDiscos == 4){document.querySelector("#labelMinMov").innerText = 15};
//     // if(numDiscos == 5){document.querySelector("#labelMinMov").innerText = 31};
//     // document.querySelector("#labelMov").innerText = 0;
//     let discs = document.querySelectorAll(".tower");
//     discs.foreach(disc => { disc.removeChild(disc)});
//     return addDiscs (numDiscos);
//   }









// let numDiscos = 0;
// let numDiscos = document.querySelector("#numDiscos").value;
addDiscs(numDiscos);

let btnComecar = document.getElementById("btnComecar");
btnComecar.disabled = false;

let btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.disabled = true;

function comecar(){
  let numDiscos = document.querySelector("#numDiscos").value;
  addDiscs(numDiscos);
  btnReiniciar.disabled = false;
  btnComecar.disabled = true;
  // if(numDiscos == 3){document.querySelector("#labelMinMov").innerText = 7};
  // if(numDiscos == 4){document.querySelector("#labelMinMov").innerText = 15};
  // if(numDiscos == 5){document.querySelector("#labelMinMov").innerText = 31};
  // document.querySelector("#labelMov").innerText = 0;
  // let discs = document.querySelectorAll("span.disc");
  // discs.forEach(disc => { disc.parentNode.removeChild(disc)});
}


if(e.currentTarget.querySelector('.disc') !== (e.currentTarget.lastChild)){
    e.currentTarget.lastChild.draggable = false; 
    e.currentTarget.lastChild.classList.add('unselectable')
    e.currentTarget.style.cursor = 'no-drop'
  }