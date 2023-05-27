const mainCard = document.getElementById("mainCard");
const secondaryCard = document.getElementById("secondaryCard");

const ratingItems = document.querySelectorAll(".rating li");

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
});
