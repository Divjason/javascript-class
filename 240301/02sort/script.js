import products from "./products.mjs";
const button = document.querySelector(".container button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");

  li.id = product.id;
  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  div.className = "price";
  div.innerText = price;

  li.append(h3, div);
  ul.appendChild(li);
};

const removeItem = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItem();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItem();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItem();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

importData();
// button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
