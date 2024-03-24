const url = "./storeInfo.json";
const stateList = "./stateInfo.json";

// 지도 맵
const mapAreas = document.querySelectorAll(".shopsearch_map_area");
// city 옵션
const city = document.querySelector("#city");

// 구.군 옵션
const state = document.querySelector("#state");
// form 태그
const searchForm = document.querySelector(".shopsearch_filter form");
// 검색바
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
// 검색버튼
const search = document.querySelector(".shopsearch_filter span");
// 테이블
let tableBody = document.querySelector(".shopinfo_table tbody");
// 체크박스
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter input[type='checkbox']"
);

// 마우스커서
const cursor = document.querySelector("#cursor");
let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.1;
window.addEventListener("mousemove", (event) => {
  //console.log(event.pageY, event.clientY);
  x = event.pageX;
  y = event.pageY;

  h1.innerText = `x : ${event.pageX}  y: ${event.pageY}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursor.style.top = targetY.toFixed(2) + "px";
  cursor.style.left = targetX.toFixed(2) + "px";

  window.requestAnimationFrame(loop);
};
loop();

function showCursorRotate() {
  cursor.classList.add("active");
}
function hideCursorRotate() {
  cursor.classList.remove("active");
}

let jsonData;
let stateInfo;

// 데이터 가져오기
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    renderData(data);
    renderPagination(data);
    jsonData = data;
  });

fetch(stateList)
  .then((response) => response.json())
  .then((data) => {
    stateInfo = data;
    for (let item in stateInfo) {
      const option = document.createElement("option");
      option.value = item;
      option.innerText = item;
      city.appendChild(option);
    }
  });

// 초기값 세팅
let initialValue = state.value;

// city 옵션값 변경 이벤트
city.addEventListener("change", () => {
  const selectedCategory = city.value;
  console.log(selectedCategory);
  if (selectedCategory !== "none") {
    state.innerHTML = "<option>구/군 선택</option>";
    if (stateInfo[selectedCategory]) {
      stateInfo[selectedCategory].forEach((subcategory) => {
        const option = document.createElement("option");
        option.innerText = subcategory;
        state.appendChild(option);
      });
    }
  }

  // 선택된 city에 해당하는 mapArea를 활성화 상태로 설정
  mapAreas.forEach((area) => {
    if (area.id === selectedCategory) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });
});

// 지도 클릭 이벤트
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);

    showSpinner();
    setTimeout(() => {
      hideSpinner();
    }, 1000);
    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");
    const clickedCity = e.target.id;
    const matchedCityInfo = jsonData.filter(
      (cityInfo) => cityInfo.main_area === clickedCity
    );

    tableBody.innerHTML = "";

    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
      if (matchedCityInfo.length >= 5) {
        renderPagination(matchedCityInfo);
      } else {
        const paginationContainer =
          document.querySelector(".shopinfo_pager ul");
        paginationContainer.innerHTML = "";
      }
    }

    city.value = clickedCity;
    city.dispatchEvent(new Event("change"));
  });
});

// 데이터 생성함수
function createRow(data) {
  const row = document.createElement("tr");
  row.id = data.store;
  row.innerHTML = `
    <td>${data.store}</td>
    <td>${data.main_area}</td>
    <td>${data.address}</td>
    <td>${data.tel}</td>
    <td>${data.service
      .map((service) => `<i class="${service}"></i>`)
      .join("")}</td>
  `;
  return row;
}

// 엔터 이벤트
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hideSpinner();
  }, 1000);

  tableBody.innerHTML = ""; // 테이블 내용 초기화
  const cityValue = city.value;
  const stateValue = state.value;
  const searchValue = searchBar.value;

  let searchResults = jsonData.filter((data) => {
    return data.store === searchValue;
  });

  if (!searchValue) {
    jsonData.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue;
      const searchMatched = data.store.includes(searchValue);

      // city와 state가 선택되지 않은 경우 모두 출력
      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      }
      // city와 state가 선택된 경우 해당 값에 맞는 데이터만 출력
      else if (mainAreaMatched && subAreaMatched && searchMatched) {
        searchResults.push(data);
      }
    });
  }

  // 검색 결과 렌더링
  renderData(searchResults);

  // 검색 결과가 5개 이상인 경우에만 페이지네이션을 생성
  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    // 검색 결과가 5개 미만인 경우 페이지네이션 숨기기
    const paginationContainer = document.querySelector(".shopinfo_pager ul");
    paginationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

// 버튼 클릭 이벤트
search.addEventListener("click", (e) => {
  e.preventDefault();
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hideSpinner();
  }, 1000);

  tableBody.innerHTML = ""; // 테이블 내용 초기화
  const cityValue = city.value;
  const stateValue = state.value;
  const searchValue = searchBar.value;

  let searchResults = jsonData.filter((data) => {
    return data.store === searchValue;
  });

  if (!searchValue) {
    jsonData.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue;
      const searchMatched = data.store.includes(searchValue);

      // city와 state가 선택되지 않은 경우 모두 출력
      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      }
      // city와 state가 선택된 경우 해당 값에 맞는 데이터만 출력
      else if (mainAreaMatched && subAreaMatched && searchMatched) {
        searchResults.push(data);
      }
    });
  }

  // 검색 결과 렌더링
  renderData(searchResults);

  // 검색 결과가 5개 이상인 경우에만 페이지네이션을 생성
  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    // 검색 결과가 5개 미만인 경우 페이지네이션 숨기기
    const paginationContainer = document.querySelector(".shopinfo_pager ul");
    paginationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

// 5개씩 컨텐츠 보여주기
const itemsPerPage = 5; // 페이지당 보여줄 아이템 수
let currentPage = 1; // 현재 페이지
const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";
  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

// 페이지 네이션
const renderPagination = (data) => {
  const totalDataLength = data.length;

  // 결과 데이터의 길이가 5 미만인 경우 페이지네이션 생성하지 않음
  if (totalDataLength < itemsPerPage) {
    return;
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationContainer = document.querySelector(".shopinfo_pager ul");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("li");
    pageLink.textContent = i;
    pageLink.style.cursor = "pointer";
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    paginationContainer.appendChild(pageLink);
  }

  const li = document.querySelectorAll("li");
  li[0].classList.add("active");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
};

// 체크박스 옵션 이벤트
const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((checkbox) => checkbox.value);

  const filteredData = data.filter((item) => {
    return selectedCategories.every((service) =>
      item.service.includes(service)
    );
  });

  renderData(filteredData);
  renderPagination(filteredData);
};

const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);
  filterData(jsonData);
};

checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", optionMode);
});

// 로딩스피너
function showSpinner() {
  const spinner = document.querySelector(".spinner");
  spinner.classList.remove("hiddenSpinner");
}

function hideSpinner() {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("hiddenSpinner");
}

showSpinner();
setTimeout(() => {
  hideSpinner();
}, 1000);
