var mouse = document.querySelector(".mouse");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("mousemove", async function(e) {
  document.getElementById("mouse").style.top = e.pageY + "px";
  document.getElementById("mouse").style.left = e.pageX + "px";
});

[...document.getElementsByTagName("li")].map(v => {
  v.addEventListener("mouseenter", function(e) {
    mouse.classList.add("zoom");
    v.classList.add("hovered");
  });
  v.addEventListener("mouseout", function(e) {
    mouse.classList.remove("zoom");
    v.classList.remove("hovered");
  });
});