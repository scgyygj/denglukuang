let user=document.getElementById('user');
let pass=document.getElementById('pass');
let button=document.getElementById('button');

button.onclick=function (){
	let u=user.value.trim();
	let p=pass.value.trim();
	if(u==p){
		alert('success');
	}else{
		location.replace('error.html');
	}
	
};