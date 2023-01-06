const input = document.getElementById('inputtt')

const btn = document.getElementById('btn')

const result = document.getElementById('result')

btn.addEventListener('click' , (e) => {

    console.log(input.value)

    result.innerHTML += `<li>${input.value}</li>`

})