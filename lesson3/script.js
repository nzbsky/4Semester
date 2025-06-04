const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

/*
 * 1. Рендеримо розмітку елементів списку
 * 2. Слухаємо зміни фильтра
 * 3. Фильтруємо дані та рендеримо нові элементи
 */
const input = document.querySelector("#filter");
const list  = document.querySelector(".js-list");
list.innerHTML = createListMarkup(tech)

function createListMarkup(tech) {
  
  const markup = tech.map(item => {
    return `<li>${item.label}</li>`});

      return markup.join("")
}
list.innerHTML = createListMarkup(tech)