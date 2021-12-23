const restaurantList = Array.from(
  document.querySelectorAll(".restaurant-card")
).map((item) => {
  return {
    name: item.querySelector(".restaurant-name").innerText,
    link: item.href,
    ratting: item.querySelector(".restaurant-ratting").innerText,
    img: item.querySelector(".restaurant-card__img-logo").src,
  };
});
