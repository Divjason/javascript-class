const add10 = (num) => {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor 함수라고 부름

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    }, 2000);
  });

  return promise;
};

add10(0)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
