const btn= document.getElementById("btn") //getting the button with id
const h=document.getElementById("result") //getting the header by id

const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition //used to recognize speech
const recognition= new SpeechRecognition() //creating a object

recognition.onstart= function() { 
    console.log("speak now")
}
recognition.onresult= function(event) {
    var text= event.results[0][0].transcript //stores in an array of 2D
    console.log(text)
    document.getElementById("result").innerHTML= text //changing the text
    read(text) //calling the function
}
function read(text) {
    var speech= new SpeechSynthesisUtterance() // it contains the info about how to read it
    speech.text = text //we are giving a text (i mean a voice)
    if(text.includes("time")) //if the voice text includes ,shows output
    speech.text = "It is"+new Date().getHours()+ " " + new Date().getMinutes()+ " right now" 
    else if(text.includes('hello'))
    speech.text = 'how are you?';
    else if(text.includes("do you love me"))
    speech.text ="sorry bro i already have a girl friend"
    else if(text.includes("year"))
    speech.text="its" + new Date().getFullYear()+ "  "
    window.speechSynthesis.speak(speech) //the speak methods is used for the assistant to speak
}
