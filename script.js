//your JS code here. If required.
let form = document.querySelector("form");
      let text = document.getElementById("text");
      let delay = document.getElementById("delay");
      let output = document.getElementById("output");
      let btn = document.getElementById("btn");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        setTimeout(async () => {
          output.innerHTML = await text.value;
        }, delay.value);
        // form.reset()
      });