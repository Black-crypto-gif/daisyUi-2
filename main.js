import Swal from 'sweetalert2'

// Using sweet alert, just simple action to make the website more dynamic and cool :

const alert = document.getElementById('alert');
const contact = document.getElementById('contact');
contact.addEventListener('click', async (e)=>{
  const { value: url } = await Swal.fire({
    input: 'url',
    inputLabel: 'URL address',
    inputPlaceholder: 'Enter the URL'
  })
  
  if (url) {
    Swal.fire(`Entered URL: ${url}`)
  }
})
alert.addEventListener('click', async(e)=>{
  const ipAPI = '//api.ipify.org?format=json'

  const inputValue = fetch(ipAPI)
    .then(response => response.json())
    .then(data => data.ip)
  
  const { value: ipAddress } = await Swal.fire({
    title: 'Enter your IP address',
    input: 'text',
    inputLabel: 'Your IP address',
    inputValue: inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  })
  
  if (ipAddress) {
    Swal.fire(`Your IP address is ${ipAddress}`)
  }
})