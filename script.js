const inp = document.getElementById('inp')
const plus = document.querySelector('.add-btn')
const reset = document.querySelector('.reset-btn')
const list = document.getElementById('list')

plus.addEventListener('click', function(){
    let val = inp.value
   
    const li = document.createElement('li')
    li.textContent = val

li.addEventListener('click', function(){
    li.remove()
})

    list.appendChild(li)
    
    // list.innerHTML += `<li> ${val} </li>`
    inp.value = ''
})

reset.addEventListener('click',function(){
    list.innerHTML = ""
})
