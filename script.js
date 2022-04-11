let circle = document.querySelector("#smcircle");

window.addEventListener("mousemove", function (dets) {
  document.querySelector("#smcircle").style.top = `${dets.clientY}px`;
  document.querySelector("#smcircle").style.left = `${dets.clientX}px`;
});

$(".maintxt h1").textillate({ in: { effect: "fadeInUp" } });

document.querySelectorAll(".chimpu").forEach((element) => {
  element.addEventListener("mousemove", function () {
    circle.style.height = "80px";
    circle.style.width = "80px";
    circle.style.backgroundColor = "white";
    circle.style.mixBlendMode = "difference";
  });

  element.addEventListener("mouseleave", function () {
    circle.style.height = "30px";
    circle.style.width = "30px";
    circle.style.backgroundColor = "transparent";
    circle.style.mixBlendMode = "initial";
  });
});

let body = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
document.querySelectorAll(".chimpu1").forEach((element) => {
  element.addEventListener("mousemove", function (dets) {
    cursor.style.top = `${dets.clientY}px`;
    cursor.style.left = `${dets.clientX}px`;
    cursor.style.display = "block";
    circle.style.display = "none";
    body.style.backgroundColor = dets.target.dataset.color;
  });

  element.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
    circle.style.display = "block";
    body.style.backgroundColor = "white";
  });
});

document
  .querySelector("#fcircle")
  .addEventListener("mousemove", function (dets) {
    this.style.transform = `translate(${dets.clientX * 0.2}px,${
      -dets.clientY * 0.02
    }px)`;
  });
document
  .querySelector("#fcircle")
  .addEventListener("mouseleave", function (dets) {
    this.style.transform = `translate(0,0)`;
  });
