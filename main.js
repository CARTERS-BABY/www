var SpeechR = window.webkitSpeechRecognition;
var reconhecimento = new SpeechR
function iniciar() {
document.getElementById('textbox').innerHTML = ''
reconhecimento.start ()
}
reconhecimento.onresult = function (evento){
console.log (evento)
 var conteudo = evento.results [0] [0].transcript
console.log(conteudo)
document.getElementById ('textbox').innerHTML = conteudo

}