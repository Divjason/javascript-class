function myFunction(number) {
  if (number > 3) return;
  console.log(number);
  myFunction(number + 1);
}

myFunction(1);
