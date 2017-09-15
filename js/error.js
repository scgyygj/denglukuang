let info=document.getElementById('info');
let time=setInterval(function(){
     if(info.innerText<=0){
           clearInterval(time);
           location.replace('denglu.html')
     }
           info.innerText-=1;
}
, 1000);