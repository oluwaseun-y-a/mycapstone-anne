const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click",() => {
    navlinks.classList.toggle("active");
});


/*bookings*/
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting
    document.getElementById('success-message').style.display = 'block'; // Show success
  });