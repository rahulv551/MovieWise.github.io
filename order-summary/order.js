document.addEventListener("DOMContentLoaded", function() {
  const selectedSeats = JSON.parse(localStorage.getItem(count.textContent));
  const totalPrice = JSON.parse(localStorage.getItem(total.textContent));

  if (selectedSeats && totalPrice) {
    const selectedSeatsList = document.getElementById("selected-seats");
    const totalPriceElement = document.getElementById("total-price");

    selectedSeats.forEach(seatIndex => {
      const seat = document.createElement("li");
      seat.textContent = `Seat ${seatIndex + 1}`;
      selectedSeatsList.appendChild(seat);
    });

    totalPriceElement.textContent = `RS. ${totalPrice}`;
  }

  document.getElementById("confirm-btn").addEventListener("click", function() {
    localStorage.removeItem("selectedSeats");
    localStorage.removeItem("totalPrice");
    window.location.href = "confirmation.html";
  });
});
