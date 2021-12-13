//Variables
//speaker Select:
let Speaker = document.getElementsByClassName('SpeakerBox')[0];
let Valum = document.getElementById('valum');
let rangeValue = document.getElementById('rangeValue');
let DateTime = document.getElementsByClassName('DataTime')[0];
let selectorDesktop = document.getElementById('selectorDesktop');
//All Active Box is Collapsed:
document.body.onclick = (e)=>{
	if(e.target.parentNode.getAttribute('class') + e.target.getAttribute('class') == "Speakernull" || e.target.parentNode.getAttribute('class') + e.target.getAttribute('class') == "rightSpeaker"){
	console.log(e.target.parentNode.getAttribute('class') + e.target.getAttribute('class'))	
	}else if(e.target.getAttribute('class') == "Speaker"){
		
	}else{
		speakerEnable = 1;
		speakerBox();
	}
}

//Speaker Code:
//VariableSpeaker:
let speakerEnable = 0;

function speakerBox(){
	
	
	if(speakerEnable == 0){
		Speaker.style.bottom = "30px";
		speakerEnable = 1;
	}else {
		Speaker.style.bottom = "-100px";
		speakerEnable = 0;
	}
	
}
function range_Value(e){
	Valum.innerHTML = e;
}

//DateTime Time:
setInterval(function DateClock(){
	let date = new Date();
	let hours = date.getHours();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	DateTime.innerHTML = hours+":"+date.getMinutes()+" "+ampm;
	
},1000);


//Cordinate Mouse:
//Cord Variables:
let mousePos = false;
let clX;
let clY;
function mousepos(tr,event){
	mousePos = tr;
	if(event != null){
		clX = event.clientX;
		clY = event.clientY;
		selectorDesktop.style.top = event.clientY;
		selectorDesktop.style.left = event.clientX;
		
	}
}
function Cord(event){
	//mousepos = mousepos1;
	
	if(mousePos == true){

		selectorDesktop.style.width = event.offsetX - clX;
		selectorDesktop.style.height = event.offsetY - clY;
		
		console.log(event.offsetY+" - "+event.offsetX);
	}else{
		selectorDesktop.style.width = event.offsetX  * 0;
	    selectorDesktop.style.height = event.offsetY *0;
		
		
	}
}
