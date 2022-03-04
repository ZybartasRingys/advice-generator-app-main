const adviceNumber = document.getElementById('number')
const adviceText = document.getElementById('advice')

// defaut advice

let advice = {
  id: 117,
  advice:
    "It is easy to sit up and take notice, what's more difficult is getting up and taking action."
}

// fetch function

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      data.forEach(advice => {
        console.log(advice)
      })
    })
}

fetchAdvice()
