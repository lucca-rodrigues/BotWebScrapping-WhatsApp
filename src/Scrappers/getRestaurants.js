const restaurantList = Array.from(
  document.querySelectorAll(".restaurant-card")
).map((item) => {
  return {
    name: item.querySelector(".restaurant-name").innerText,
    link: item.href,
  };
});
