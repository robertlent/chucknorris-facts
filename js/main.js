document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.chucknorris.io/jokes/random'

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = data.value
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}