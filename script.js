var gp = document.getElementById("GP");
var pl = document.getElementById("pl");
var copy = document.getElementById("copy")
var numcheckbox  = document.getElementById("numbers")
var clcheckbox  = document.getElementById("capitalletters")
var slcheckbox  = document.getElementById("smallletters")
var sccheckbox  = document.getElementById("specialcharacters")
var submit = document.getElementById("submit")

function randompasswordgenerator(elements,length){
    var el = elements.length
    var randompassword = ""
    for(i = 1;i<=length;i++){
        var randomIndex = Math.floor(Math.random()*el)
        if(elements[randomIndex] == "numbers"){
            randompassword = randompassword+Math.floor(Math.random()*10)
        }else if(elements[randomIndex] == "capital"){
            var rand = Math.floor(Math.random()*27)
            randompassword = randompassword+String.fromCharCode(65+rand)
        }else if(elements[randomIndex] == "small"){
            var rand = Math.floor(Math.random()*27)
            randompassword = randompassword+String.fromCharCode(97+rand)
        }else{
            var sc = "~!@#$%^&*()_+|}{<>*./"
            randompassword = randompassword+sc[Math.floor(Math.random()*sc.length)]
        }
    }
    return randompassword
}

submit.addEventListener("click",function(event){
    event.preventDefault();
    var length = Number(pl.value);
    var elements = [];
    if(numcheckbox.checked == true){
        elements.push("numbers")
    }
    if(slcheckbox.checked == true){
        elements.push("small")
    }
    if(clcheckbox.checked == true){
        elements.push("capital")
    }
    if(sccheckbox.checked == true){
        elements.push("special")
    }
    var password = randompasswordgenerator(elements,length)
    gp.value = password
})

copy.addEventListener("click",function(event){
    event.preventDefault()
    navigator.clipboard.writeText(gp.value)
    copy.innerHTML = "copied!"
})