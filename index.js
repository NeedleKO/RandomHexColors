const colorBtn = document.querySelector(".colorBtn");
const containerDiv = document.querySelector(".container");
const colorText = document.querySelector(".colorText");

colorBtn.addEventListener("click", () => {
  containerDiv.style.backgroundColor = randomHexGenerator();
  
  function randomHexGenerator(array) {
    let randomHex = [];
  
    for (let i = 0; i < 6; i++) {
      let randomValue = Math.floor(Math.random() * array1.length);
      randomHex.push(array1[randomValue]);
    }
    let finalColorHex = "#" + randomHex.join().replace(/\,/g, "");
    
    console.log(finalColorHex);
    colorText.innerHTML = " " + finalColorHex;
    return finalColorHex;
  }
  
});

let array1 = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




