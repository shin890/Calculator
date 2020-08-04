function dis(val){
    document.getElementById("display").value+=val
}

function solve(){
    let x=document.getElementById("display").value
    let y= eval(x)
    document.getElementById("display").value=y
}

function percent(){
    let x=document.getElementById("display").value
    let y=eval(x)/100
    document.getElementById("display").value=y
}

function clr(){
    document.getElementById("display").value=""
}