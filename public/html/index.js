const naMe = document.getElementById('name')
const price = document.getElementById('price')
const thumbnail = document.getElementById('thumbnail')

const btn  = document.getElementById('btn').onclick=(e)=> {
    if(isNaN(price.value) || price.value===''){
        e.preventDefault()
        alert(`datos ingresados incorrectos este campo solo acepta numeros`)
    }if(naMe.value===''){
        alert('debes completar los campos ')
        e.preventDefault()
    
    }if(!isNaN(naMe.value)){
        alert('solo palabras, no numeros')
        e.preventDefault()

    }
}


