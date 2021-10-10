let numMoviments = document.querySelector("#numMov").innerHTML = 0;
let btnRestart = document.querySelector("#btnRestart").disabled = true;
let btnStart = document.querySelector("#btnStart").disabled = false;

document.querySelector("#btnStart").addEventListener('click', start)
function start(){
  document.querySelector("#btnRestart").disabled = false;
  document.querySelector("#btnStart").disabled = true;
  // value();
}

document.querySelector("#btnRestart").addEventListener('click', restart)
function restart(){
  document.querySelector("#btnRestart").disabled = true;
  document.querySelector("#btnStart").disabled = false;
}

// function value(){
//   let output = '';
//   let num =  document.querySelector("#numDiscs").value;
//   document.getElementById("btnRestart").disabled = false;

//   if(num == 3){output = 3, document.querySelector("#minMov").innerText = 7;};
//   if(num == 4){output = 4, document.querySelector("#minMov").innerText = 15;};
//   if(num == 5){output = 5, document.querySelector("#minMov").innerText = 31;};

//   return output;
// }

const teste = document.querySelector('#numDiscs');
teste.addEventListener('change', function(event){
  let target = event.target;
  let result = document.querySelector("#minMov");
  let text;

  switch (target.value) {
    case '3':
      text = 7;
        break;
    case '4':
      text = 15;
        break;
    case '5':
      text = 31;
        break;
    default:
      text = 0;
  }
  result.innerText = text;
})

let numbStart = 5;

function addDiscs( ){
  for(i=numbStart;i>=1;i--){
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
  return addDiscs;
};addDiscs();

const blockDiscs = document.querySelectorAll(".disc") 
blockDiscs.forEach(disck =>{
  disck.addEventListener("mouseover", (event)=>{
    // console.log(event.currentTarget)//disc
    let tw1 = document.querySelector('#twr_1');//coluna-1
    let tw2 = document.querySelector('#twr_2');//coluna-2
    let tw3 = document.querySelector('#twr_3');//coluna-3

    let dsc = event.currentTarget;//disc

    //verifico se são os ultimos filhos
    if(dsc === tw1.lastChild || dsc === tw2.lastChild || dsc === tw3.lastChild){
      event.currentTarget.classList.remove('unselectable'),
      event.currentTarget.style.cursor = 'pointer',
      event.currentTarget.draggable = true; 

    }else {
      //Caso não sejam bloqueio a movimentacão dos mesmos
      event.currentTarget.classList.add('unselectable');
      event.currentTarget.style.cursor = 'no-drop';
      event.currentTarget.draggable = false; 
    
    }
  });
})

const discs = document.querySelectorAll(".disc") 
discs.forEach(disc => {
  disc.addEventListener("dragstart", dragStart);
  disc.addEventListener("dragend", dragEnd);
});

function dragStart(e){
  e.currentTarget.classList.add('moving');
}

function dragEnd(e){
  e.currentTarget.classList.remove('moving');
  e.currentTarget.classList.remove('yes');
  e.currentTarget.classList.remove('noo');
}

const towers = document.querySelectorAll(".tower");
//movimentos de drag sobre a torre
towers.forEach(torre =>{
  torre.addEventListener("dragover", dragover);
  torre.addEventListener("dragleave", dragleave);
  torre.addEventListener("drop", drop);
});

//sempre que o item que esta com o evento passar na area
function dragover(e){
  let itemID = document.querySelector('.moving');

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
  if(e.currentTarget.querySelector('.disc') === null || e.currentTarget.lastChild.id >= itemID.id){  
    e.currentTarget.classList.add('yes');
    e.currentTarget.appendChild(itemID);
    //incremento n° de movimentos
    document.querySelector("#numMov").innerHTML++;
  };
  //removendo classes de indicação
  e.currentTarget.classList.remove('yes');
  e.currentTarget.classList.remove('noo');
  victory();
}

function victory(){
  let tw = document.querySelectorAll('.drop_area');
  
  for(let i=0; i<tw.length; i++){
    if(tw[1].hasChildNodes() && !tw[2].hasChildNodes() && !tw[0].hasChildNodes() ||
    !tw[2].hasChildNodes() && !tw[1].hasChildNodes() && !tw[1].hasChildNodes()){
      let alertWin = document.createElement('span');
      alertWin.innerHTML = "good you win!";
      alertWin.style.position = 'fixed';
      alertWin.style.backgroundColor = 'white'
      alertWin.style.borderRadius = '8px';
      alertWin.style.font = '30px Ubuntu';
      alertWin.style.padding = '10px';
      document.querySelector('.painel').appendChild(alertWin)

    }
  }
  return victory;
};