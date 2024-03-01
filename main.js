let img = document.getElementById("img-pr");
let btn = document.getElementById("btn");
let a = document.getElementById("href");
let prName = document.getElementById("pr-name");

let i = 1;
function imge() {
  if (i == 1) {
    btn.innerHTML = "Download this app";
    a.setAttribute(
      "href",
      "https://mega.nz/file/HpcUjSxa#mc7AaiqjOtJx4IEDcXUDjylugkrF3a7ztIJEjW2_jxw"
    );prName.textContent="IslamiApp";
  } else if (i == 3) {
    btn.innerHTML = "Download this app";
    a.setAttribute("href", "https://digital-clock.en.uptodown.com/windows");prName.textContent="Digital clock";
  } else if (i == 2) {
    btn.innerHTML = "view this website";
    a.setAttribute("href", "https://amaj11.github.io/ALMAJD/");prName.textContent="AlmajdAcademy";
  } else if (i == 4) {
    btn.innerHTML = "view this website";
    a.setAttribute("href", "https://amaj11.github.io/produceAdmin/");prName.textContent="produceAdmin";
  }
  img.setAttribute("src", `${i++}.png`);

  if (i > 4) {
    i = 1;
  }
}
if (i <= 4) {
  setInterval(imge, 3000);
}

