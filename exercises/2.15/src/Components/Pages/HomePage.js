const HomePage = () => {

  fetch('https://v2.jokeapi.dev/joke/Any')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((joke) => {
      renderJoke(joke);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    }); 

  }

function renderJoke(joke) {
  const main = document.querySelector('main');
  main.innerText = `Category : ${joke.category} \n`;
  if(joke.joke !== undefined) {
    main.innerText += joke.joke;
  }
  else {
    main.innerText += joke.setup;
    main.innerText += joke.delivery;
  }
  
}



export default HomePage;
