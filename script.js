const inp = document.getElementById('inp')
const plus = document.querySelector('.add-btn')
const list = document.getElementById('list')

plus.addEventListener('click', function(){

    let val = inp.value
    list.innerHTML += `<li> ${val} </li>`
    inp.value = ''

})