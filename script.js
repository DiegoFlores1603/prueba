const cod = document.getElementById("cod")
const mar = document.getElementById("mar")
const mod = document.getElementById("mod")
const year = document.getElementById("year")
const fchini = document.getElementById("fchini")
const fchfi = document.getElementById("fchfi")
const form = document.getElementById("form")
const par = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let vcod= /^[a-zA-Z0-9]{1,5}$/
    let vmar=/^[a-zA-Z0-9]{1,50}$/
    let vmod=/^[a-zA-Z0-9]{1,30}$/
    let vyear=/^[0-9]{1,4}$/
    par.innerHTML = ""
    if(cod.value.length >5 || !vcod.test(cod.value)){
        warnings += `no es valido, maximo 5 caracteres y alfanumericos.<br>`
        entrar = true
    }
    if(mar.value.length >50 || !vmar.test(mar.value)){
        warnings += `no es valido, maximo 50 caracteres y alfanumericos.<br>`
        entrar = true
    }
    if(mod.value.length >30 || !vmod.test(mod.value)){
        warnings += `no es valido, maximo 30 caracteres y alfanumericos.<br>`
        entrar = true
    }
    if(year.value.length >4 || !vyear.test(year.value)){
        warnings += `no es valido, ingrese solo datos numericos.<br>`
        entrar = true
    }
    if(fchini.value>fchfi.value){
        warnings += `fecha final mayor.<br>`
        entrar = true
    }
    if(entrar){
        par.innerHTML = warnings
    }else{
        par.innerHTML = "Enviado"
    }
})