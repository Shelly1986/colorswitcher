const buttons = document.querySelectorAll(".btns");
const body = document.querySelector('body');
console.log(buttons)
for (i of buttons){
  i.addEventListener("click", function(e){
    var color_picked = e.target.id;
    console.log(color_picked);
    body.style.backgroundColor = color_picked;
    
})
}
