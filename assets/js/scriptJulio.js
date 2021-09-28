/* Pegando a div que esta as torres */
const towers = document.querySelector('#towers_wrapper');


//============================== CRIAÇÃO DOS DISCOS =========================================

//Função que adiciona os discos
function addDiscs(qtd){

  for(let i=1;i<=qtd;i++){
    const tower1 = document.querySelector('.t-1');
    const disc = document.createElement("span")
    disc.id = "disc"+i; //usamos para indentificar os discos
    disc.classList = 'disc'; //Usamos para captar todos os discos
    disc.innerHTML = "disc"+i;
    disc.style.cursor = 'pointer';
    disc.style.border = '1px solid';
    disc.draggable = true;
    tower1.appendChild(disc);
  }
}

//adicionando os discos na div Torre1
addDiscs(5)

//============================== VALIDAÇŌES =========================================

//Função para VALIDAR se há disco maior na torre.
function compararDiscs(torre, discSelect){
    let torreSelected = document.querySelector(torre)
    let discs = torreSelected.querySelectorAll("span")
    let arrayDisc = []
    discs.forEach(disc =>{arrayDisc.push(disc.id)})
    let ultimoSpan = arrayDisc[arrayDisc.length - 1]
    let indexUltimoSpan = arrayDisc.indexOf(ultimoSpan )+1
    console.log()
    if(discSelect[4] < indexUltimoSpan){
      return false
    }else{return true}
  }
  
  // console.log(compararDiscs(".t-1", "disc2")) // <= testar comparaçōes 

//============================= CAPTURANDO OS DISCOS E TORRES =====================================

//Selecionando todos os discos
const discs = document.querySelectorAll(".disc") // pegar todos os discos
//Selecionando todas as torres
const torres = document.querySelectorAll("#torre") //pegar todas as torres

//=========================== FUNÇŌES PARA OS DISCOS ============================================

//Adicionando funçōes APENAS PARA OS DISCOS 
//=> dragStart(Iniciando o movimento do disco)
//=> drag(Quando o disco estiver em movimento)
//=> dragend(Quando finalizar o movimento do disco)
discs.forEach(disc => {
  disc.addEventListener("dragstart", dragStart) //quando comeca a mover
  disc.addEventListener("drag", drag) // esta movendo
  disc.addEventListener("dragend", dragEnd) //quando termina
})

//=> dragStart(Iniciando o movimento do disco)
function dragStart(){
  //console.log("Começou a mover!")
  this.classList.add('DiscoMovendo')
}

//=> drag(Quando o disco estiver em movimento)
function drag(){
  //console.log("Movendo!")
}

//=> dragend(Quando finalizar o movimento do disco)
function dragEnd(){
  //console.log("Terminou de mover!")
  this.classList.remove('DiscoMovendo')
}

//========================= FUNÇŌES PARA AS TORRES ==============================================

//Adicionando funçōes APENAS PARA AS TORRES
//=> dragenter(Quando ENTRAR na torre)
//=> dragover(Quando ESTIVER dentro da torre)
//=> dragleave(Quando SAIR da torre)
//=> drop(Quando SOLTA NA torre)
torres.forEach(torre =>{
  torre.addEventListener("dragenter", dragenter)
  torre.addEventListener("dragover", dragover)
  torre.addEventListener("dragleave", dragleave)
  torre.addEventListener("drop", drop)
})


//=> dragenter(Quando ENTRAR na torre)
function dragenter(){
  console.log("Entrou na torre!")
}

//=> dragover(Quando ESTIVER dentro da torre)
function dragover(){

  let discSelect = document.querySelector('.DiscoMovendo')
  let result = compararDiscs(this.classList, discSelect.id)
  this.currentTarget.classList.add('hover');

  console.log(result)
}

//=> dragleave(Quando SAIR da torre)
function dragleave(){
    this.currentTarget.classList.remove('hover');
  console.log("sair da torre!")
}

//=> drop(Quando SOLTA NA torre)
function drop(){
  console.log("soltei!")
}