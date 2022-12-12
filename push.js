
let insitems=document.querySelectorAll('.item');

console.log(insitems.length);

if (typeof document !== undefined){

    for (const it of insitems){
        it.addEventListener('click',(e)=>{
            e.target.classList.toggle('iclick');
            // console.log(e.target.getAttribute('id'));
            e.target.classList.add('iclick');

        });
        
    }

//remove all other selections
function remSelects(){
    let rmS=document.querySelectorAll('.iclick');

    for (rs of rmS){
        rs.classList.remove()
    }
}


}