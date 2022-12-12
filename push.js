
const insitems=document.querySelectorAll('.item');
const btnAdd=document.querySelector('.button1');
const btnRemove=document.querySelector('.button2');
const bLeft=document.querySelector('.left');
const bRight=document.querySelector('.right');
const bInstall=document.querySelector('.install');


let blnPrepend=false;

if (typeof document !== undefined){

    for (const it of insitems){
        it.addEventListener('click',(e)=>{
            // remSelects();
            e.target.classList.toggle('iclick');
            // e.target.classList.add('iclick');
        });  
    }

    btnAdd.addEventListener('click',()=>{
        //fetch all items in right container
        const rBag=document.querySelectorAll('.right .item');

        //fetch all item(s) selected by user for installation
        const iselect=document.querySelectorAll('.left .iclick');


        if (iselect.length>0){

            //if more than one item is selected

            for (let j=0;j<iselect.length;j++){

                let sValue=iselect[j].getAttribute('id');

                for (let i=0;i<rBag.length;i++){

                    let rValue=rBag[i].getAttribute('id');

                    //  console.log(sValue,rValue);

                    if (+rValue.substring(rValue.length-1)>+sValue.substring(sValue.length-1)){
                        bRight.insertBefore(iselect[j],rBag[i]);
                        blnPrepend=true;
                        break;
                    }
                }

                if (!blnPrepend){
                    bRight.appendChild(iselect[j]);
                }

                    blnPrepend=false;

            }

            remSelects();
        }else{
            remSelects();
        }


    });



    btnRemove.addEventListener('click',()=>{
        //fetch all items in right container
        const lBag=document.querySelectorAll('.left .item');

        //fetch all item(s) selected by user for installation
        const oselect=document.querySelectorAll('.right .iclick');

        if (oselect.length>0){

            //Assuming more than one item is selected

            for (j=0;j<oselect.length;j++){
                let sValue=oselect[j].getAttribute('id');

                for (let i=0;i<lBag.length;i++){
                
                let lValue=lBag[i].getAttribute('id');

                        // console.log(sValue,lValue);

                    if (+lValue.substring(lValue.length-1)>+sValue.substring(sValue.length-1)){
                        bLeft.insertBefore(oselect[j],lBag[i]);
                        blnPrepend=true;
                        break;
                    }
                }

                if (!blnPrepend){
                    bLeft.appendChild(oselect[j]);
                }
                    blnPrepend=false;
            }
            remSelects();
        }else{

            remSelects();
        }

    });


    //remove all other selections
    function remSelects(){
        let rmS=document.querySelectorAll('.iclick');
        for (rs of rmS){
            rs.classList.remove('iclick');
        }
        blnPrepend=false;
    }

    bInstall.addEventListener('click',()=>{
        //one method of removing child nodes is to set parent innerhtml to nothing
        // bRight.innerHTML='';

        //or another method
        while (bRight.firstChild){
            bRight.removeChild(bRight.firstChild);
        }

    });
}