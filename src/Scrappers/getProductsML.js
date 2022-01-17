const productsMl = Array.from(
  document.querySelectorAll(".ui-search-layout__item")
).map((item) => {
  return {
    title: item.querySelector("h2")?.innerText,
    link: item.querySelector("a")?.baseURI,
    image: item.querySelector("img")?.src,
    price: item.querySelector(".price-tag-fraction")?.innerText,
  };
});
