const debounceInput = document.querySelector(".debounce-input");

console.dir(_.debounce);

const debouncedOnInput = _.debounce((ev) => {
  console.log(ev.target.value);
}, 500);

debounceInput.addEventListener("input", debouncedOnInput);

document.addEventListener(
  "mousemove",
  _.throttle((ev) => {
    console.log(ev.clientX, ev.clientY);
  }, 500)
);