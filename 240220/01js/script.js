const bodyTag = document.querySelector("body");

window.onload = () => {
  const bgCount = 5;

  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  bodyTag.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
};
