function myFunction(number) {
  if (number > 10) return;
  console.log(number);
  myFunction(number + 1);
}

myFunction(1);
