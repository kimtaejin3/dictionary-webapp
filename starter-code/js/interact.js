const arrow = document.querySelector(".arrow");
const selct_ul = document.querySelector(".select ul");
const option = document.querySelectorAll(".option");
const selected_option = document.querySelector(".selected-value");

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
