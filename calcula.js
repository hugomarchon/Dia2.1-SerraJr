function somar() {
  var numero1 = soma.num1.value;
  var numero2 = soma.num2.value;
  document.soma.resultadosoma.value = parseFloat(numero1) + parseFloat(numero2);
  if (numero1 == "" || numero2 == "") {
    document.soma.resultadosoma.value = "";
  }
}
function subtrair() {
  var numero1 = subtracao.num1.value;
  var numero2 = subtracao.num2.value;
  document.subtracao.resultadosubtracao.value =
    parseFloat(numero1) - parseFloat(numero2);
  if (numero1 == "" || numero2 == "") {
    document.subtracao.resultadosubtracao.value = "";
  }
}
function multiplicar() {
  var numero1 = multiplicacao.num1.value;
  var numero2 = multiplicacao.num2.value;
  document.multiplicacao.resultadomultiplicacao.value =
    parseFloat(numero1) * parseFloat(numero2);
  if (numero1 == "" || numero2 == "") {
    document.multiplicacao.resultadomultiplicacao.value = "";
  }
}
function dividir() {
  var numero1 = divisao.num1.value;
  var numero2 = divisao.num2.value;
  document.divisao.resultadodivisao.value =
    parseFloat(numero1) / parseFloat(numero2);
  if (numero1 == "" || numero2 == "") {
    document.divisao.resultadodivisao.value = "";
  }
}
