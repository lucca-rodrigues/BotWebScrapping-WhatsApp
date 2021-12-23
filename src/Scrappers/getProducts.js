const products = Array.from(document.querySelectorAll("#ad-list li")).map(
  (item) => {
    return {
      title: item.querySelector("h2")?.innerText,
      link: item.querySelector("a")?.baseURI,
      image: item.querySelector("img")?.src,
      price: item.querySelector(".fnmrjs-9 span")?.innerText,
    };
  }
);
