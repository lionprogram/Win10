//Variables
//speaker Select:
let Speaker = document.getElementsByClassName('SpeakerBox')[0];
let Valum = document.getElementById('valum');
let rangeValue = document.getElementById('rangeValue');
let DateTime = document.getElementsByClassName('DataTime')[0];
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
