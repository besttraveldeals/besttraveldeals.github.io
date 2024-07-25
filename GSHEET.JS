  const scriptURL = 'https://script.google.com/macros/s/AKfycbzH9NZvaaYxF4c53m12u32MZIEzgEUXLMHXMjuYMdxwVVobumM_EL29OTuRZ6SixXl3/exec'

const form = document.forms['bookingForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})