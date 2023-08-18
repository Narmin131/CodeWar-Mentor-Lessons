const toggleBtn = document.querySelector("button");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("DarkMode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("DarkMode", null);
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
