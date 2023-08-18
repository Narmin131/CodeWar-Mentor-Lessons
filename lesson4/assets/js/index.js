const toggleBtn = document.querySelector("button");
let img = document.querySelector('img')
let imgSrc= localStorage.getItem('Image')
img.setAttribute('src', imgSrc)


const enableDarkMode = () => {
  document.body.classList.add("dark");
  document.querySelector('img').setAttribute('src', "./assets/logo-black.png")
  localStorage.setItem("DarkMode", "active");
  localStorage.setItem('Image', './assets/logo-black.png')
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  document.querySelector('img').setAttribute('src', "./assets/logo-white.png")
  localStorage.setItem("DarkMode", null);
  localStorage.setItem('Image', './assets/logo-white.png')
};

let myDarkMode = localStorage.getItem("DarkMode");
console.log(myDarkMode);

if (myDarkMode === "active") {
  enableDarkMode();
}

const toggleMode = () => {
  let myDarkMode = localStorage.getItem("DarkMode");

  if (myDarkMode === "active") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

toggleBtn.addEventListener("click", toggleMode);
