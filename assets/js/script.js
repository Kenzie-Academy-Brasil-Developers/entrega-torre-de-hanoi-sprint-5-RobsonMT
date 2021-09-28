// Towers_wrapper
//capturando a section que embrulha as sections
const towers = document.querySelector('#towers_wrapper');

//Towers_listener
//ouvinte da torre 1
const tower1 = document.querySelector('.t-1');
tower1.addEventListener('click', (e) =>{
    console.log('TARGET',(e.target));
});

//ouvinte da torre 2
const tower2 = document.querySelector('.t-2');
tower2.addEventListener('click', (e) =>{
    console.log('TARGET',(e.target));
});

//ouvinte da torre 3
const tower3 = document.querySelector('.t-3');
tower3.addEventListener('click', (e) =>{
    console.log('TARGET',(e.target));
});


//Creating_discs
//cria os discos principais da tela
const inner_discs =()=>{
    for(let i=1; i<6; i++){
        const disc = document.createElement('span');
        disc.id = i;
        disc.className = 'item';
        disc.innerHTML = i;
        disc.style.cursor = 'pointer'
        disc.style.border = '1px solid';
        disc.draggable = true;
        tower1.appendChild(disc);
    }
    return inner_discs;
}
inner_discs();


//Items(discs)_functions
//ouvinte quando clica e começa a arrastar o item
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragstart', dragEnd);
});

//quando começa a arrastar o item roda essa func;
//que adiciona uma classe no item que fica com opacity 0.5
function dragStart (e){
    e.currentTarget.classList.add('dragging');
}

//quando termina de arrastar o item roda essa func;
//remove a classe opacity
function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

//Dropping_area
//Area onde se pode dropar os items
const drop_area = document.querySelectorAll('.drop_area');
drop_area.forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

//Roda sempre que arrastar um item e o item pasar por cima
// da area do evento no caso as drop-areas
function dragOver (e){
    e.currentTarget.classList.add('hover');
    e.preventDefault(); 
}

//Roda quando o item arrastado sai de uma area dropavel
//Onde se pode soltar o item 
function dragLeave (e){
    e.currentTarget.classList.remove('hover');
}

//Dropping do item
//Quando soltar o item
function drop (e){
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    console.log(dragItem);
}

//e.preventDefault(); 
//libera o drop do item que por padrão e negado;