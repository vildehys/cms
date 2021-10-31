const baseUrl ="https://vhys.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".container");

async function getProducts(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const products = await response.json();

    products.forEach(function(product) {
        productContainer.innerHTML += 
        `
        <div class="products">
        <img src="${product.images[0].src}">
        <h2>${product.name}</h2>
        <h3>${product.description}</h3>
        <p>${product.prices.price} NOK | 3 colors </p>
        <a class="button" href="details.html?id=${product.id}">Read More</a>
        </div>`;
     });
  } catch (err) {
      console.error(err);
  }
    
}

getProducts(baseUrl);


