var n, cont, resp

n=parseInt(prompt("digite a tabuada desejada"))

cont=0
while(cont<100001){
    resp=n*cont
    document.write("<h2>"+resp+"</h2>")
    cont++
}
