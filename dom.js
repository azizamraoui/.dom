let plus = document.getElementsByClassName("fa-plus");
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      plus[i].nextElementSibling.innerHTML++;
   somme() 

      
    })}


    let minus = document.querySelectorAll(".fa-minus");
for (let btn of minus) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.previousElementSibling.innerHTML--;
     somme()
    }
  });
}


console.log(document.getElementsByClassName("product-price"))
console.log(document.getElementsByClassName("qte"))












let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if(heart.style.color==="red"){
        heart.style.color="gray"
    }
    else heart.style.color="red"
    heart.classList.toggle("red");
  });
}


function somme() {
  let price = document.getElementsByClassName("product-price");
  let qte = document.getElementsByClassName("qte");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * qte[i].innerHTML;

    console.log(price[i].innerHTML)
  }
 return  document.getElementById("totalp").innerHTML ="$" + sum;
}

