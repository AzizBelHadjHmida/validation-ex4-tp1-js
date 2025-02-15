const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
const itemUn = document.querySelector("#item1");
const itemDeux = document.querySelector("#item2");
const itemTrois = document.querySelector("#item3");

itemUn.addEventListener("click", () => {
  itemUn.style.color = randomColor();
  console.log("here to change 1");
});

itemDeux.addEventListener("click", () => {
  itemDeux.style.color = randomColor();
  console.log("here to change 2");
});

itemTrois.addEventListener("click", () => {
  itemTrois.style.color = randomColor();
  console.log("here to change 3");
});
