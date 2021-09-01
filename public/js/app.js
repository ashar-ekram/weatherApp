const weatherForm = document.querySelector('form')
const search = document.querySelector('#location')
const firstmessage = document.querySelector('#message-1')
const secondmessage= document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    const location = search.value
    firstmessage.textContent = 'Loading...'
    secondmessage.textContent= ''
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                firstmessage.textContent = data.error
            } else{
                firstmessage.textContent = data.location
                secondmessage.textContent= data.forecast
            }
        })
    })
})