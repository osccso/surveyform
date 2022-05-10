const form = document.getElementById('survey-form')

const AlertSubmitted = e => {
  let main = document.querySelector('#mainform')
  let alert = document.createElement('div')
  alert.innerHTML = 'Thanks for your responses<i class="fa-solid fa-circle-check"></i>'
  alert.classList.add('alert')
  main.appendChild(alert)
  setTimeout(()=>main.removeChild(alert),2000)
}

const handleForm = e => {
  e.preventDefault()
  let formData = new FormData(form)
  DataToBeSubmitted = Array.from(formData)
  //on submission's confirmation
  //cleanup the form
  form.reset()
  AlertSubmitted()
} 

console.log(form);
form.addEventListener('submit',handleForm)

