const hourHand = document.querySelector(".hour");
const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
console.log(hourHand);

const setClock = () => {
  const currentData = new Date();
  const secRatio = currentData.getSeconds() / 60;
  const miniRatio = (secRatio + currentData.getMinutes()) / 60;
  const hourRatio = (miniRatio + currentData.getHours()) / 12;
  setRotation(secHand, secRatio);
  setRotation(minHand, miniRatio);
  setRotation(hourHand, hourRatio);
  //console.log(hourRatio);
};
const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};
setInterval(setClock, 1000);
