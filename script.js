let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }





// apple1
const minusButton1 = document.getElementById("minusBtn1");
const plusButton1 = document.getElementById("plusBtn1");
const numberDisplay1 = document.getElementById("numberDisplay1");

let currentValue1 = 0;

minusButton1.addEventListener("click", () => {
  currentValue1 = Math.max(currentValue1 - 1, 0);
  numberDisplay1.textContent = currentValue1;
});

plusButton1.addEventListener("click", () => {
  currentValue1 += 1;
  numberDisplay1.textContent = currentValue1;
});




// apple2
      const minusButton2 = document.getElementById("minusBtn2");
      const plusButton2 = document.getElementById("plusBtn2");
      const numberDisplay2 = document.getElementById("numberDisplay2");
  
      let currentValue2 = 0;
  
      minusButton2.addEventListener("click", () => {
        currentValue2 = Math.max(currentValue2 - 1, 0);
        numberDisplay2.textContent = currentValue2;
      });
  
      plusButton2.addEventListener("click", () => {
        currentValue2 += 1;
        numberDisplay2.textContent = currentValue2;
      });



    //apple3
      const minusButton3 = document.getElementById("minusBtn3");
      const plusButton3 = document.getElementById("plusBtn3");
      const numberDisplay3 = document.getElementById("numberDisplay3");
      
      let currentValue3 = 0;
      minusButton3.addEventListener("click", () => {
        currentValue3 = Math.max(currentValue3 - 3, 0);
        numberDisplay3.textContent = currentValue3;
    });
    
    plusButton3.addEventListener("click", () => {
        currentValue3 += 1;
        numberDisplay3.textContent = currentValue3;
    });

 //apple4
     const minusButton4 = document.getElementById("minusBtn4");
     const plusButton4 = document.getElementById("plusBtn4");
     const numberDisplay4 = document.getElementById("numberDisplay4");
     let currentValue4 = 0;
     minusButton4.addEventListener("click", () => {
        currentValue4 = Math.max(currentValue4 - 4, 0);
        numberDisplay4.textContent = currentValue4;
    });

    plusButton4.addEventListener("click", () => {
        currentValue4 += 1;
        numberDisplay4.textContent = currentValue4;
    });





// Define your existing product quantities and elements here
const currentValue = [0, 0, 0, 0];

// ... Your existing code for updating product quantities ...

// Function to calculate order details
function calculateOrder() {
  const productPrices = [5290, 6790, 8900, 19000];
  let subtotal = 0;

  for (let i = 0; i < 4; i++) {
    subtotal += currentValue[i] * productPrices[i];
  }

  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return {
    subtotal,
    discount,
    total
  };
}






const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const productList = document.getElementById("productList");
const subtotalDiv = document.getElementById("subtotal");
const discountDiv = document.getElementById("discount");
const totalDiv = document.getElementById("total");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";

  const productPrices = [5290, 6790, 8900, 19000];
  const productQuantities = [currentValue1, currentValue2, currentValue3, currentValue4];
  const productNames = [
    "Apple AirPods",
    "AirPods (รุ่นที่3)",
    "AirPods Pro",
    "AirPods Max"
  ];

  let productListHtml = "<h3>Product In Cart</h3>";
  let subtotal = 0;

  for (let i = 0; i < productPrices.length; i++) {
    const price = productPrices[i];
    const quantity = productQuantities[i];
    const name = productNames[i];
    
    if (quantity > 0) {
      productListHtml += `${name}: ${quantity} ชิ้น<br>`;
      subtotal += price * quantity;
    }
  }

  productList.innerHTML = productListHtml;
  
  subtotalDiv.textContent = `รวม: ${subtotal.toFixed(2)} บาท`;

  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  discountDiv.textContent = `ส่วนลด(10%): ${discount.toFixed(2)} บาท`;

  const total = subtotal - discount;
  totalDiv.textContent = `รวมทั้งหมด: ${total.toFixed(2)} บาท`;
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
