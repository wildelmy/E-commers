function updateShop() {
  const totalSavedContainer = document.getElementById("total-saved");
  let savedProducts = window.localStorage.getItem("savedProducts");
  if (savedProducts) {
    savedProducts = JSON.parse(savedProducts);
    totalSavedContainer.innerText = savedProducts.length;
  }
}
updateShop();

function showShop() {
  let cartContainer = document.getElementById("cart");
  let savedProducts = window.localStorage.getItem("savedProducts");
  if (savedProducts) {
    savedProducts = JSON.parse(savedProducts);
    if (savedProducts.length) {
      cartContainer.innerHTML = "";
      savedProducts.forEach((product) => {
        cartContainer.innerHTML += `
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${product.img}" class="img-fluid">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text"><small class="text-muted">${product.price}</small></p>
                </div>
                <div class="d-flex justify-content-end">
                  <button class="remove btn btn-danger">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      
    }
  }
}
showShop();
