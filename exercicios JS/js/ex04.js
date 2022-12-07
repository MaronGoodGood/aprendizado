var nome, n1, n2, soma

nome= prompt("nome")
n1=parseFloat (prompt(nome+" digite um valor: "))
n2=parseFloat (prompt(nome+" digite outro valor: "))
if (n2==0){
    alert(nome+" não é possivel calcular")
}
else {

    soma= n1/n2
alert(nome+" a divisao é igual a: "+soma)
document.write(" <h2> "+nome+" o resultado é "+soma+"</h2>") 
}
