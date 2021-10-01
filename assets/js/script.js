function addDiscs(numb){
  for(i=numb;i>=1;i--){
    let arrayCores = ["#003F63", "#F2B138", "#A1A5A6", "#D9D9D9", "#350D40", "#02Ba38"];
    let width = 5*i;
    const tower1 = document.querySelector('#twr_1');
    const disc = document.createElement("span");
    disc.id = i; 
    disc.classList = 'disc'; 
    disc.innerHTML = i;
    disc.style.backgroundColor = arrayCores[i-1];
    disc.style.width = width*6+"px";
    disc.style.padding = '12px';
    disc.style.border = '1px solid';
    disc.style.cursor = 'no-drop'
    disc.draggable = false;
    disc.classList.add('unselectable'),
    tower1.appendChild(disc);
  }                       
}
addDiscs(6)

const discs = document.querySelectorAll(".disc") 
discs.forEach(disc => {
  disc.addEventListener("dragstart", dragStart);
  disc.addEventListener("dragend", dragEnd);
});

function dragStart(e){
  e.currentTarget.classList.add('moving');
  // console.log(e.currentTarget)
  // console.log(e.target)
}

function dragEnd(e){
  e.currentTarget.classList.remove('moving');
  e.currentTarget.classList.remove('yes');
  e.currentTarget.classList.remove('noo');
}

const towers = document.querySelectorAll(".tower");

towers.forEach(tower => {
  tower.addEventListener('mouseover', (e)=>{
    // console.log(e.target)//span
    // console.log(e.currentTarget.querySelector('.disc'))//torre
    if(e.currentTarget.querySelector('.disc') !== null ){
      e.currentTarget.lastChild.classList.remove('unselectable'),
      e.currentTarget.lastChild.style.cursor = 'pointer',
      e.currentTarget.lastChild.draggable = true; 
    }
  })
});

//movimentos de drag sobre a torre
towers.forEach(torre =>{
  torre.addEventListener("dragover", dragover);
  torre.addEventListener("dragleave", dragleave);
  torre.addEventListener("drop", drop);
});

//sempre que o item que esta com o evento passar na area
function dragover(e){
  let itemID = document.querySelector('.moving');
  console.log('aqui'+e.currentTarget.querySelector('.disc'))

  if(e.currentTarget.querySelector('.disc') === null || e.currentTarget.lastChild.id >= itemID.id){ 
     e.currentTarget.classList.add('yes');
     e.preventDefault();
  };
  if(e.currentTarget.querySelector('.disc') !== null && e.currentTarget.lastChild.id < itemID.id){ 
     e.currentTarget.classList.add('noo');
  };
}

//quando o item sair da area de drop
function dragleave(e){
  e.currentTarget.classList.remove('yes');
  e.currentTarget.classList.remove('noo');
}

//quando o item esta area de drop
function drop(e){
  let itemID = document.querySelector('.moving');
  //validação para permitir o drop nas colunas
  if(e.currentTarget.querySelector('.disc') === null 
  || e.currentTarget.lastChild.id >= itemID.id)
  {  e.currentTarget.classList.add('yes');
    e.currentTarget.appendChild(itemID)};
  //removendo classes de indicação
  e.currentTarget.classList.remove('yes');
  e.currentTarget.classList.remove('noo');
}