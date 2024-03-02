import products from './products.mjs';

const form = document.querySelector('form');
const select = document.querySelector('select');

let myProducts;

const removeItems = () => {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  if (myProducts) {
    const { selectedIndex } = e.target.options;
    const { value } = e.target.options[selectedIndex];

    const filtered = myProducts.filter((product) => {
      return product.category === value;
    });

    removeItems();
    filtered.forEach((product) => {
      createItem(product);
    });
  }
};

const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');
  const img = document.createElement('img');

  const attr = document.createAttribute('src');
  attr.value = product.img;
  img.setAttributeNode(attr);

  li.id = product.id;
  h3.className = 'name';
  h3.innerText = product.name;

  const price = new Intl.NumberFormat('ko-kr', {
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  div.className = 'price';
  div.innerText = price;

  li.append(h3, div, img);
  ul.appendChild(li);
};

const importData = (e) => {
  e.preventDefault();
  if (products) {
    myProducts = products.data;
    myProducts.map((product) => {
      if (!document.getElementById(product.id)) {
        createItem(product);
      }
    });
  }
};

form.addEventListener('submit', importData);
select.addEventListener('change', selectCategory);
