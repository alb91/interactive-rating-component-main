const mainCard = document.getElementById("mainCard");
const secondaryCard = document.getElementById("secondaryCard");
const ratingItems = document.querySelectorAll(".rating li");
const submitSelection = document.getElementById(".submitSelection");

// Keep color active when clicked on
let selectedRatingItem = null;

// Hiding second card
function hideSecondaryCard() {
  secondaryCard.style.display = "none";
}

hideSecondaryCard();

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
  this.style.backgroundColor = "hsl(0, 0%, 100%)";
  this.stylecolor = "hsl(25, 97%, 53%)";
});
