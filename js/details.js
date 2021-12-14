const containerCards = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://vildehys.no/RainyDays2/wp-json/wc/store/products";


async function fetchDetails() {

    try {
        

    const response = await fetch(url + id);

    const specifics = await response.json();
    

    console.log(specifics);

    createHtml(specifics);

}

catch(error) {
    console.log(error);
    containerCards.innerHTML = message("error", error);
    }
}

fetchDetails()

function createHtml(specifics) {

    containerCards.innerHTML = `
    <div class="product-images">
        <div class="product-image1">
        <img class="image1" src="${specifics.images[0].src}">
        </div>
        <div class="product-image2-3">
        <img class="image2" src="${specifics.images[1].src}">
        <img class="image3" src="${specifics.images[2].src}">
        </div>
    </div>
    <section class="information">
        <div class="info-content">
        <div class="info">
        <h2>${specifics.name}</h2>
        <h2>${specifics.description}</h2>
        <h3> ${specifics.prices.price} </h3>
        <p>Available colors</p>
    </div>
    <div class="boxes">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
    <div class="buttons">
        <a class="button" href="cart.html">Add to cart</a>
        <a class="button" href="#">Add to favorites</a>
    </div>
</div>
    </section>
</section>`;
                                

    
}