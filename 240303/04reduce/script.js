import products from "./products.mjs";

let myProducts = "";
let selected = [];

const updateTotal = (price) => {
  const totalPrice = document.querySelector(".total-price");
  console.log(totalPrice);
  const formatted = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(price);

  totalPrice.innerText = formatted;
};

const calculate = () => {
  const result = selected.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  console.log(result);
  updateTotal(result);
};

const addCart = (e) => {
  const { id } = e.target.parentElement.parentElement;
  const { checked } = e.target;
  console.log(typeof id);

  if (checked) {
    myProducts.forEach((product) => {
      if (product.id === parseInt(id)) {
        selected.push(product);
        console.log(selected);
      }
    });
  } else {
    selected = selected.filter((product) => {
      return product.id !== parseInt(id);
    });
  }

  calculate();
};

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const check = document.createElement("input");
  const img = document.createElement("img");

  li.id = product.id;

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  check.setAttribute("type", "checkbox");
  check.addEventListener("change", addCart);

  div.append(check, h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  if (products) {
    myProducts = products.data;
    console.log(myProducts);
    myProducts.map((product) => {
      if (!document.getElementById(product.id)) {
        createItem(product);
      }
    });
  }
};

importData();
