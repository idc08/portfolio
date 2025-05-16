function validateContactForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert("Enter a 10-digit phone number.");
    return false;
  }
  return true;
}

  
       
function greetUser() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
}
 