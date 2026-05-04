const inp = document.getElementById('inp')
const plus = document.querySelector('.add-btn')
const reset = document.querySelector('.reset-btn')
const list = document.getElementById('list')

plus.addEventListener('click', function(){

    let val = inp.value
    list.innerHTML += `<li> ${val} </li>`
    inp.value = ''

})

reset.addEventListener('click',function(){
    list.innerHTML = ""
})