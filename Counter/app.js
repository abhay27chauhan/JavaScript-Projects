const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const buttonInnerHTML = this.innerHTML;

       counter(buttonInnerHTML);

       if(count > 0){
           value.style.color = "green";
       }else if(count<0){
           value.style.color = "red";
       }else{
           value.style.color = "black";
       }
    })
})

function counter(key){

    if(key === "increase"){
        count++;
    } else if(key === "decrease") {
        count--;
    }else{
        count = 0;
    }
    value.textContent = count;
}