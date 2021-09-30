document.getElementById("btnReiniciar").disabled = true
//capturando a section que embrulha as sections
const towers = document.querySelector('#towers_wrapper');

// //ouvinte da torre 1
const towerss = document.querySelectorAll(".tower");
towerss.forEach(torre =>{
  torre.addEventListener('mouseenter', (e)=>{
    e.target === e.currentTarget.lastChild ?(
      e.target.classList.remove('unselectable'),
      e.target.style.cursor = 'pointer',
      e.target.classList.add('moving'),
      e.target.draggable = true
    ) :(e.target.draggable = false,
      e.target.style.cursor = 'no-drop',
      e.target.classList.add('unselectable'),
      e.target.classList.remove('moving'))
  });

  torre.addEventListener('mouseover', (e)=>{
    // e.target.classList.remove('unselectable');
    e.target === e.currentTarget.lastChild ?(
      e.target.classList.remove('unselectable'),
      e.target.style.cursor = 'pointer',
      e.target.classList.add('moving'),
      e.target.draggable = true
    ) :(e.target.draggable = false,
      e.target.style.cursor = 'no-drop',
      e.target.classList.add('unselectable'),
      e.target.classList.remove('moving'))
  });

  torre.addEventListener('mouseleave', (e)=>{
    // e.target.classList.remove('unselectable');
    e.target === e.currentTarget.lastChild ?(
      e.target.classList.remove('unselectable'),
      e.target.style.cursor = 'pointer',
      e.target.classList.add('moving'),
      e.target.draggable = true
    ) :(e.target.draggable = false,
      e.target.style.cursor = 'no-drop',
      e.target.classList.add('unselectable'),
      e.target.classList.remove('moving')
    )
  });
})

//============================== CRIAÇÃO DOS DISCOS =========================================

function addDiscs(numb){
  for(i=numb;i>=1;i--){
    let arrayCores = ["#003F63", "#F2B138", "#A1A5A6", "#D9D9D9", "#350D40", "#02Ba38"];
    let width = 5*i;
    const tower1 = document.querySelector('#twr_1');
    const disc = document.createElement("span");
    disc.id = i; //usamos para indentificar os discos
    disc.classList = 'disc'; //Usamos para captar todos os discos
    disc.innerHTML = i;
    disc.style.backgroundColor = arrayCores[i-1];
    disc.style.width = width+"vw";
    disc.style.padding = '12px';
    disc.style.border = '1px solid';
    disc.draggable = false;
    tower1.appendChild(disc);
  }
  return addDiscs;
}

function comecar(){
  let numDiscos = document.querySelector("#numDiscos").value;
  let btnReiniciar = document.getElementById("btnReiniciar");
  let btnComecar = document.getElementById("btnComecar");
  btnReiniciar.disabled = false;
  btnComecar.disabled = true;
  if(numDiscos == 3){
    document.querySelector("#labelMinMov").innerText = 7
    document.querySelector("#labelMinMov").value = 7
  };
  if(numDiscos == 4){
    document.querySelector("#labelMinMov").innerText = 15
    document.querySelector("#labelMinMov").value = 15
  };
  if(numDiscos == 5){
    document.querySelector("#labelMinMov").innerText = 31
    document.querySelector("#labelMinMov").value = 31
  };
  document.querySelector("#labelMov").innerText = 0;
  let discs = document.querySelectorAll("span.disc");
  discs.forEach(disc => { disc.parentNode.removeChild(disc)});
  addDiscs(numDiscos); //adicionar os discos
  return addDiscs;
}

function reiniciar(){
  let btnReiniciar = document.getElementById("btnReiniciar");
  let btnComecar = document.getElementById("btnComecar");
  btnReiniciar.disabled = false;
  btnComecar.disabled = true;
  let numDiscos = document.querySelector("#numDiscos").value;
  if(numDiscos == 3){
    document.querySelector("#labelMinMov").innerText = 7
    document.querySelector("#labelMinMov").value = 7
  };
  if(numDiscos == 4){
    document.querySelector("#labelMinMov").innerText = 15
    document.querySelector("#labelMinMov").value = 15
  };
  if(numDiscos == 5){
    document.querySelector("#labelMinMov").innerText = 31
    document.querySelector("#labelMinMov").value = 31
  };
  document.querySelector("#labelMov").innerText = 0;
  let discs = document.querySelectorAll("span.disc");
  discs.forEach(disc => { disc.parentNode.removeChild(disc)});
  return addDiscs (numDiscos);
}

//============================= CAPTURANDO OS DISCOS E TORRES ==================================

const discs = document.querySelectorAll(".disc") // pegar todos os discos

//========================= FUNÇŌES PARA AS TORRES ==============================================

//Adicionando funçōes APENAS PARA AS TORRES
//=> dragenter(Quando ENTRAR na torre)
//=> dragover(Quando ESTIVER dentro da torre)
//=> dragleave(Quando SAIR da torre)
//=> drop(Quando SOLTA NA torre)

//Selecionando todas as torres
const torres = document.querySelectorAll(".tower") //pegar todas as torres
torres.forEach(torre =>{
  torre.addEventListener("dragenter", dragenter);
  torre.addEventListener("dragover", dragover);
  torre.addEventListener("dragleave", dragleave);
  torre.addEventListener("drop", drop);
});
//============================= CAPTURANDO OS DISCOS E TORRES ==================================//

// const discs = document.querySelectorAll(".disc") // pegar todos os discos
discs.forEach(disc => {
  disc.addEventListener("dragstart", dragStart) //quando comeca a mover
  disc.addEventListener("dragend", dragEnd) //quando termina
});

//=> dragStart(Iniciando o movimento do disco)
function dragStart(e){
  e.target.classList.add('moving');
}
//=> dragenter(Quando ENTRAR na torre)
function dragenter(e){
  //Define uma variavel com elemento da torre que o item esta em cima
  let torreID = (e).currentTarget;
  //Define uma variavel com a tag do item que esta em movimento
  let itemID = document.querySelector('.moving');
  //variavel que seleciona o ultimo elemento que estiver na coluna
  const idg = e.target.lastChild;
  //validação para permitir o drop nas colunas
  if((e.target.querySelector('.disc') === null) || (idg.id >= itemID.id)){
    e.preventDefault(itemID); 
    e.target.classList.add('yes');
  }else{
    e.target.classList.add('noo');
  }
}

//=> dragover(Quando ESTIVER dentro da torre)
function dragover(e){
  //Define uma variavel com elemento da torre que o item esta em cima
  let torreID = (e).currentTarget;
  //Define uma variavel com a tag do item que esta em movimento
  let itemID = document.querySelector('.moving');
  //variavel que seleciona o ultimo elemento que estiver na coluna
  const idg = e.currentTarget.lastChild;
  //validação para permitir o drop nas colunas
  if((e.currentTarget.querySelector('.disc') === null) || (idg.id >= itemID.id)){
    e.preventDefault(itemID); 
  }
  // e.currentTarget.classList.add('yes');
}

//=> dragleave(Quando SAIR da torre)
function dragleave(e){
  e.target.classList.remove('yes');
  e.target.classList.remove('noo');
  e.target.classList.remove('unselectable');
}

//=> drop(Quando SOLTA NA torre)
function drop(e){
  let itemID = document.querySelector('.moving');
  //validação para permitir o drop nas colunas
  if((e.currentTarget.querySelector('.disc') === null) || (e.currentTarget.lastChild.id >= itemID.id)){
      e.target.appendChild(itemID);
      itemID.classList.remove('moving');
      e.target.classList.remove('unselectable');
      e.currentTarget.classList.remove('yes');
  }
}

//=> dragend(Quando finalizar o movimento do disco)
function dragEnd(e){
  // e.currentTarget.classList.remove('moving');
}