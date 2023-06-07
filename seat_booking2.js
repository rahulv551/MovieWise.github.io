// Seat selection
const seats = document.querySelectorAll(".seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let selectedSeats = [];
let ticketPrice = 0;

// Movie time select event
const movieTimeSelect = document.getElementById("movie-time");
movieTimeSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  selectedSeats = []; // Reset the selected seats
  updateSelectedCount();
  assignSoldSeats();
});

// Seat click event
seats.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    if (!e.target.classList.contains("sold")) {
      const seatIndex = [...seats].indexOf(e.target);
      const seatPrice = parseInt(seat.getAttribute("data-price"));

      const lowerPriceSelected = selectedSeats.some(
        (index) => parseInt(seats[index].getAttribute("data-price")) < seatPrice
      );
      
      const higherPriceSelected = selectedSeats.some(
        (index) => parseInt(seats[index].getAttribute("data-price")) > seatPrice
      );

      if (lowerPriceSelected || higherPriceSelected) {
        // If a seat with a different price is already selected, deselect all seats
        seats.forEach((seat) => {
          seat.classList.remove("selected");
        });
        selectedSeats = [];
      }

      if (e.target.classList.contains("selected")) {
        // If the seat is already selected, deselect it
        e.target.classList.remove("selected");
        selectedSeats = selectedSeats.filter((index) => index !== seatIndex);
      } else {
        // If the seat is not selected, select it
        e.target.classList.add("selected");
        selectedSeats.push(seatIndex);
      }

      updateSelectedCount();
    }
  });
});

// Update count and total
function updateSelectedCount() {
  const selectedSeatCount = selectedSeats.length;
  let totalPrice = 0;

  selectedSeats.forEach((seatIndex) => {
    const seat = seats[seatIndex];
    const seatPrice = parseInt(seat.getAttribute("data-price"));
    totalPrice += seatPrice;
  });

  count.textContent = selectedSeatCount;
  total.textContent = totalPrice;
}

// Assign sold seats based on the selected movie time
function assignSoldSeats() {
  const selectedOption = movieTimeSelect.value;

  // Reset all seats to default state
  seats.forEach((seat) => {
    seat.classList.remove("sold");
    seat.disabled = false;
    seat.classList.remove("selected"); // Deselect all seats
  });

  // Assign sold seats based on the selected option
  if (selectedOption === "time1") {
    // Assign sold seats for time1
    document.querySelector('.row:nth-child(2) .seat:nth-child(4)').classList.add('sold');
    document.querySelector('.row:nth-child(2) .seat:nth-child(5)').classList.add('sold');
    document.querySelector('.row:nth-child(4) .seat:nth-child(2)').classList.add('sold');
    document.querySelector('.row:nth-child(5) .seat:nth-child(8)').classList.add('sold');
  } else if (selectedOption === "time2") {
    // Assign sold seats for time2
    document.querySelector('.row:nth-child(3) .seat:nth-child(7)').classList.add('sold');
    document.querySelector('.row:nth-child(3) .seat:nth-child(8)').classList.add('sold');
  } else if (selectedOption === "time3") {
    // Assign sold seats for time3
    document.querySelector('.row:nth-child(4) .seat:nth-child(3)').classList.add('sold');
    document.querySelector('.row:nth-child(4) .seat:nth-child(4)').classList.add('sold');
    document.querySelector('.row:nth-child(4) .seat:nth-child(7)').classList.add('sold');
    document.querySelector('.row:nth-child(4) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(4) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(5) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(5) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(6) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(6) .seat:nth-child(8)').classList.add('sold');
    document.querySelector('.row:nth-child(6) .seat:nth-child(8)').classList.add('sold');
  }

  // Disable sold seats
  const soldSeats = document.querySelectorAll(".seat.sold");
  soldSeats.forEach((seat) => {
    seat.disabled = true;
  });
}

// Initial assignment of sold seats
assignSoldSeats();

// Function to store data in sessionStorage and redirect to order summary page
function goToOrderSummary() {
  // Store data in sessionStorage
  sessionStorage.setItem('selectedSeatCount', selectedSeats.length);
  sessionStorage.setItem('totalPrice', total.textContent);

  // Redirect to order summary page
  window.location.assign('order.html');
}

document.getElementById('book-btn').addEventListener('click', goToOrderSummary);


