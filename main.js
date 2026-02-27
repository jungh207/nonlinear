const dots = document.querySelectorAll(".dot");
const paras = document.querySelectorAll(".para");
const title = document.querySelector(".name");

function hideAll(){
  paras.forEach(p => p.classList.remove("show"));
}

dots.forEach((dot, i) => {

  dot.addEventListener("mouseenter", () => {
    hideAll();
    title.classList.add("hide");
    paras[i].classList.add("show");
  });

  dot.addEventListener("mouseleave", () => {
    hideAll();
    title.classList.remove("hide");
  });

});

