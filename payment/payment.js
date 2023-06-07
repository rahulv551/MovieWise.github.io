function showPaymentDetails(paymentOption) {
  var paymentDetails = document.getElementsByClassName("payment-details");
  for (var i = 0; i < paymentDetails.length; i++) {
    paymentDetails[i].style.display = "none";
  }
  document.getElementById(paymentOption).style.display = "block";
}

function applyPromoCode() {
  var promoCode = document.getElementById("promoCode").value;
  // Apply the promo code logic here
  console.log("Applied promo code:", promoCode);
}

function makeCardPayment() {
  var cardNumber = document.getElementById("cardNumber").value;
  var cardName = document.getElementById("cardName").value;
  var expiryMonth = document.getElementById("expiryMonth").value;
  var expiryYear = document.getElementById("expiryYear").value;
  var cvv = document.getElementById("cvv").value;
  // Perform card payment logic here
  console.log("Card payment details:", cardNumber, cardName, expiryMonth, expiryYear, cvv);
}

function makeNetBankingPayment() {
  var bankName = document.getElementById("bankName").value;
  // Perform net banking payment logic here
  console.log("Net banking payment details:", bankName);
}

function makeWalletPayment() {
  var walletName = document.getElementById("walletName").value;
  // Perform mobile wallet payment logic here
  console.log("Mobile wallet payment details:", walletName);
}

function makeUpiPayment() {
  var upiId = document.getElementById("upiId").value;
  // Perform UPI payment logic here
  console.log("UPI payment details:", upiId);
}

function continuePayment(event) {
  event.preventDefault();
}