const women = [
  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 1,
    img: "./multimedia/7.jpg",
    name: "Producto 1",
    price: "$65.000",
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 2,
    img: "./multimedia/7.webp",
    name: "Producto 2",
    price: "$45.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 3,
    img: "./multimedia/8.jpg",
    name: "Producto 3",
    price: "$80.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 4,
    img: "./multimedia/12.jpg",
    name: "Producto 4",
    price: "$55.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 5,
    img: "./multimedia/10.jpg",
    name: "Producto 5",
    price: "$95.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 6,
    img: "./multimedia/8.jpg",
    name: "Producto 6",
    price: "$105.000"
  }
]


const man = [
  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 7,
    img: "./multimedia/1.jpg",
    name: "Producto 1",
    price: "$200.000",
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 8,
    img: "",
    name: "Producto 2",
    price: "$145.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 9,
    img: "./multimedia/8.jpg",
    name: "Producto 3",
    price: "$30.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 10,
    img: "./multimedia/12.jpg",
    name: "Producto 4",
    price: "$50.000"
  },
  
  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 11,
    img: "./multimedia/10.jpg",
    name: "Producto 5",
    price: "$120.000"
  },

  {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia beatae unde ipsam minus earum nulla dolor id quam tempora! Suscipit ipsum nostrum illo, asperiores officiis deserunt natus nisi laudantium?",
    id: 12,
    img: "./multimedia/8.jpg",
    name: "Producto 6",
    price: "$115.000"
  }
]

const allProducts = [...women, ...man]

function fillProducts() {
  let container = document.getElementById("products-container")
  if (container) {
    container.innerHTML = ""
    women.forEach(product => {
      container.innerHTML += `
      <div class="col-12 col-md-6">
        <div class="item shadow mb-4">
          <h3 class="item-title">${product.name}</h3>
          <img class="item-image" src="${product.img}">
          <div class="item-details">
            <h4 class="item-price">${product.price}</h4>
            <a href="detalles-producto.html?${product.id}" class="item-button btn btn-primary addToCart">Ver detalles</a>
          </div>
        </div>
      </div>` 
    })
  }
}
fillProducts()
