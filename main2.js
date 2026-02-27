const dots = document.querySelectorAll(".dot");
const paras = document.querySelectorAll(".para");
const title = document.querySelector(".name");

function hideAll(){
  paras.forEach(function(p){
    p.classList.remove("show");
  });
}


function removeNextBig(){
  dots.forEach(function(d){
    d.classList.remove("nextBig");
  });
}

dots.forEach(function(dot, i){

  dot.addEventListener("mouseenter", function(){
    hideAll();
    removeNextBig();

    title.classList.add("hide");

   
    if (paras[i]) paras[i].classList.add("show");

   
    if (dots[i + 1]) dots[i + 1].classList.add("nextBig");
  });

  dot.addEventListener("mouseleave", function(){
    hideAll();
    removeNextBig();
    title.classList.remove("hide");
  });

});