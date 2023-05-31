const mainCard = document.getElementById("mainCard");
const secondaryCard = document.getElementById("secondaryCard");
const ratingItems = document.querySelectorAll(".rating li");
const submitSelection = document.getElementById("submitSelection");

// Hiding main card
function hideMainCard(displayValue) {
  mainCard.style.display = displayValue;
}

hideMainCard("block");
// Hiding second card
function hideSecondaryCard(displayValue) {
  secondaryCard.style.display = displayValue;
}

hideSecondaryCard("none");

// Hover function for rating numbers

ratingItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "hsl(0, 0%, 100%)";
  });

  item.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
  });

  //Click function for rating numbers
  item.addEventListener("click", function () {
    // Add styles to the click Item
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "hsl(0, 0%, 100%)";
  });
});

//Click function for submit button
submitSelection.addEventListener("click", function () {
  //Make a loading screen so that it shows the change of these values before moving to next card.
  this.style.backgroundColor = "hsl(0, 0%, 100%)";
  this.style.color = "hsl(25, 97%, 53%)";
  //Make my second card to appear
  hideSecondaryCard("block");
  hideMainCard("none");
});
