// towers-wrapper
const towers = document.querySelector('#towers_wrapper');

/*Discs*/

//torre principal 
const tower1 = document.querySelector('.t_left');

//creat discs
const inner_discs =()=>{
    for(let i=1; i<6; i++){
        const disc = document.createElement('span');
        disc.id = i;
        disc.innerHTML = i;
        disc.style.border = '1px solid';
        tower1.appendChild(disc);
    }
    return inner_discs;
}
inner_discs();