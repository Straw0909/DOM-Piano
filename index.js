const key = document.querySelectorAll('.white');
const play = document.getElementById('play');
const playColor = ['red', 'purple', 'blue', 'green', 'yellow', 'gold', 'brown'];
const sounds = ['01-C4.ogg', '03-D4.ogg', '05-E4.ogg', '06-F4.ogg', '08-G4.ogg', '10-A4.ogg', '12-B4.ogg'];

key.forEach((el, i) => {
  el.addEventListener('click', () => {
    play.style.backgroundColor = playColor[i];
    el.style.backgroundColor = playColor[i];
    play.innerText = el.id;
    new Audio(`./sounds/${sounds[i]}`).play();
    setTimeout(() => {
      el.style.backgroundColor = 'white';
      play.style.backgroundColor = 'white';
      play.innerHTML = ' ';
    }, 1000);
  });
});
