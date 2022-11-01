const jokeGenerateBtn = document.querySelector("#jokeBtn");
const displayJoke = document.querySelector("#joke");

jokeGenerateBtn.addEventListener("click", madeJoke);

async function madeJoke() {
  document.getElementById("loader").classList.toggle("hidden");
  const getApi = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await getApi.json();
  console.log(joke);
  let jargonWord = new SpeechSynthesisUtterance(joke.joke);
  console.log(jargonWord);
  speechSynthesis.speak(jargonWord);
  displayJoke.textContent = joke.joke;
  document.getElementById("loader").classList.toggle("hidden");
}