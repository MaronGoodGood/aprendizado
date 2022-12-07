function somar(){
    var n1, n2, result
    n1=parseFloat(document.getElementById("n1").value)
    n2=parseFloat(documne.getElementById("n2").value)
    result=n1+n2    
    document.getElementById("resultado").innerHTML = `o resultado da soma é ${result}`
}