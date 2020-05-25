const express = require('express');
const argumento = require('./arguments')
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({ frase: getFrase() });
});


getFrase = function () {
  var frase = argumento.problema() +
    argumento.natureza() +
    argumento.culpado() +
    argumento.motivacao() +
    argumento.vitima();
  console.log('Requisição feita: ' + RetornaDataHoraAtual() + " Frase: " + frase)
  return frase;
};

function RetornaDataHoraAtual() {
  var dNow = new Date();
  var localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes() + ':' + dNow.getSeconds();
  return localdate;
}

app.listen(80, function () {
  console.log('Funcionando');
});

