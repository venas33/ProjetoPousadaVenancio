function updatePrice() {
    var priceDisplay = document.getElementById("priceDisplay");
    var selectedRoom = document.querySelector('input[name="roomType"]:checked').value;
    var price = 0;
  
    switch (selectedRoom) {
      case "Single":
        price = 45;
        break;
      case "Double":
        price = 90;
        break;
      case "Suite":
        price = 200;
        break;
      default:
        price = 0;
    }
  
    priceDisplay.textContent = "Preço do quarto: $" + price;
  }
  