const colorPalette = document.querySelector(".color-palette");
const text = document.querySelector(".output");

const createPaletItems = () => {
  const items = [];

  for (let i = 0; i < 36; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.classList.add("item");
    item.type = "button";
    item.style.backgroundColor = color;
    item.dataset.color = color;
    items.push(item);
  }
  colorPalette.append(...items);
};
createPaletItems();

console.log(colorPalette);

colorPalette.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.target.nodeName);

  // if (!event.target.classList.contains("item")) {
  //   return;
  // }

  if (event.target.nodeName !== "BUTTON") {
    return;
    
  }
  console.log(event.target.dataset.color);
  const color = event.target.dataset.color;

  text.style.color = color;
  text.textContent = 'Selected color - ${color}'
  
   
});

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



