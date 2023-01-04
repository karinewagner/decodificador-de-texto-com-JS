var textInput = document.getElementById("input-text");
var textOutput = document.getElementById("output-text");

function encrypt() {
  var text = textInput.value;
  var resultEncrypted = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return textOutput.innerHTML = 
    '<textarea readonly id="copy-text">' +
    resultEncrypted + 
    '</textarea>' +
    '<button id="copy" onclick="copy()">Copiar</button>'
}

function decrypt() {
  var text = textInput.value;
  var resultDecrypted = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  textOutput.innerHTML = 
    '<textarea readonly id="copy-text">' +
    resultDecrypted + 
    '</textarea>' +
    '<button id="copy" onclick="copy()">Copiar</button>'
}

function copy() {
  var textCopy = document.getElementById("copy-text");

  textCopy.select();
  document.execCommand('copy');
  alert("Texto copiado com sucesso!");
}