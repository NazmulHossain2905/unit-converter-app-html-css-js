// variables
let feet = document.getElementById("feet");
let inches = document.getElementById("inches");

// for inches
feet.addEventListener("input", function () {
  let f = this.value;
  inches.value = f * 12;
});

// for feet
inches.addEventListener("input", function () {
  let i = this.value;
  feet.value = !Number.isInteger(i / 12) ? (i / 12).toFixed(2) : i / 12;
});
