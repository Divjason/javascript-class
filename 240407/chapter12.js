// const add = (a, b, callback) => {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// };

// add(1, 2, (value) => {
//   console.log(value);
// });

const orderFood = (callback) => {
  setTimeout(() => {
    const food = '떡볶이';
    callback(food);
  }, 3000);
};

const coolDownFood = (food, callback) => {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 2000);
};

const freezedFood = (food, callback) => {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
};

orderFood((food) => {
  console.log(food);
  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);

    freezedFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
