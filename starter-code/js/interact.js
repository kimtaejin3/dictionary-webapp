const arrow = document.querySelector(".arrow");
const selct_ul = document.querySelector(".select ul");
const option = document.querySelectorAll(".option");
const selected_option = document.querySelector(".selected-value");
const slider = document.querySelector(".slider");
const switched = document.querySelector(".switch");
const moon_icon = document.querySelector(".moonIcon");
const moon_night_icon = document.querySelector(".moon_night_Icon");
let switch_flag = true;

if (!navigator.onLine) {
  console.log("hi");
  document.body.innerHTML = "your internet is offline";
}

confirm = function () {
  if (selct_ul.classList.value === "on") {
    selct_ul.style.display = "block";
  } else {
    selct_ul.style.display = "none";
  }
};

arrow.addEventListener("click", () => {
  if (selct_ul.classList.value === "on") {
    selct_ul.classList.remove("on");
    selct_ul.classList.add("off");
  } else {
    selct_ul.classList.remove("off");
    selct_ul.classList.add("on");
  }

  confirm();
});

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener("click", (e) => {
    selected_option.innerText = e.target.innerText;
    selct_ul.style.display = "none";
    selct_ul.classList.remove("on");
    selct_ul.classList.add("off");
  });
}

slider.addEventListener("click", () => {
  if (switch_flag) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    moon_night_icon.style.display = "block";
    moon_icon.style.display = "none";
    // moon_icon.style. = "red";
    switch_flag = false;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    moon_night_icon.style.display = "none";
    moon_icon.style.display = "block";
    switch_flag = true;
  }
});
