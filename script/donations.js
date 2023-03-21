const abos = document.getElementsByClassName('abo-type');
const preshot = document.getElementsByClassName('item-prix');
const don = document.getElementById('don');
let abo0=false;
let abo1=false;

for(let i=0;i<preshot.length;i++){
    preshot[i].addEventListener('click',function(){
        preshot[i].classList.toggle('itemprixclick');
        if(preshot[i].getAttribute('click')=='false'){
            don.value = preshot[i].id;
            preshot[i].setAttribute('click',true);
            for(let j=0;j<preshot.length;j++){
                if(i!=j && preshot[j].getAttribute('click')=='true'){
                    preshot[j].classList.toggle('itemprixclick');
                    preshot[j].setAttribute('click',false);
                }
            } 
        }else{
            preshot[i].setAttribute('click',false);
            don.value = null;
        }
    });
}

abos[0].addEventListener('click',function(){
    if(abo0){
        abos[0].style.backgroundColor = "rgb(247, 247, 247)";
        abos[0].style.color = 'black';
        abo0 = false;
    }else{
        abos[0].style.backgroundColor = 'rgb(235, 61, 61)';
        abos[0].style.color = 'white';
        abos[1].style.backgroundColor = "rgb(247, 247, 247)";
        abos[1].style.color = 'black';
        abo0=true;
        abo1=false;
    }
});
abos[1].addEventListener('click',function(){
    if(abo1){
        abos[1].style.backgroundColor = "rgb(247, 247, 247)";
        abos[1].style.color = 'black';
        abo1 = false;
    }else{
        abos[1].style.backgroundColor = 'rgb(235, 61, 61)';
        abos[1].style.color = 'white';
        abos[0].style.backgroundColor = "rgb(247, 247, 247)";
        abos[0].style.color = 'black';
        abo1=true;
        abo0=false;
    }
});