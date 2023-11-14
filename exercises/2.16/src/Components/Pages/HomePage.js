const HomePage = () => {
  fetch('http://localhost:3000/questions')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((question) => {
      questions(question);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    }); 

  }

function questions(question) {
  const main = document.querySelector('main');
  question.forEach(question) => {
    
  });
  main.innerText += `Question ${question.id}) ${question.question}\n`;
}

export default HomePage;
