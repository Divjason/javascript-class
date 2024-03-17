const url = './state.json';
// 지도 맵
const mapAreas = document.querySelectorAll('.shopsearch_map_area');
// city 옵션
const city = document.querySelector('#city');
const cityOptions = city.querySelectorAll('option');
// 구.군 옵션
const state = document.querySelector('#state');
// form 태그
const searchForm = document.querySelector('.shopsearch_filter form');
// 검색바
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
// 검색버튼
const search = document.querySelector('.shopsearch_filter span');
// 테이블
let tableBody = document.querySelector('.shopinfo_table tbody');
// 체크박스
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter input[type='checkbox']"
);

// state 옵션 세팅
const stateInfo = {
  강원: ['영월군', '속초시', '원주시', '강릉시'],
  경기: [
    '평택시',
    '화성시',
    '부천시',
    '남양주시',
    '파주시',
    '광명시',
    '수원시',
    '성남시',
    '용인시',
    '안산시',
    '여주시',
    '광주시',
    '안성시',
    '의정부시',
    '구리시',
    '시흥시',
    '군포시',
    '김포시',
    '안양시',
    '남양주시',
    '고양시',
    '이천시',
  ],
  경남: [
    '거제시',
    '창원시',
    '진주시',
    '양산시',
    '사천시',
    '남해군',
    '하동군',
    '함안군',
    '',
  ],
  경북: ['안동시', '예천군', '영주시', '경주시'],
  광주: [],
  대구: ['달성군'],
  대전: ['유성구', '서구'],
  부산: ['기장군', '동래구', '남구', '수영구', '부산진구', '사하구'],
  서울: [
    '중구',
    '도봉구',
    '서초구',
    '관악구',
    '서대문구',
    '금천구',
    '성북구',
    '영등포구',
    '양천구',
    '동작구',
    '강서구',
    '마포구',
    '성동구',
    '송파구',
    '구로구',
    '종로구',
    '동대문구',
    '서초구',
    '강북구',
    '강남구',
  ],
  세종: ['시청대로', '새롬로', '도담동'],
  울산: ['남구', '중구'],
  인천: ['서구', '연수구', '미추홀구', '남동구', '계양구', '중구'],
  전남: ['목포시', '순천시', '여수시', '강진군', '광양시'],
  전북: ['익산시', '전주시', '군산시'],
  제주: ['제주시'],
  충남: [
    '천안시',
    '당진시',
    '아산시',
    '계룡시',
    '보령시',
    '태안군',
    '예산군',
    '흥성군',
  ],
  충북: ['청주시', '제천시'],
};

// 초기값 세팅
let initialValue = state.value;

// 지도 클릭 시, 실행함수
const mapInfo = (e) => {
  for (let i = 0; i < cityOptions.length; i++) {
    if (e.target.id === cityOptions[i].innerText) {
      city.value = cityOptions[i].innerText;
    }
  }

  cityOptions.forEach((cityOption) => {
    if (cityOption.value === city.value) {
      cityOption.selected = true;
    } else {
      cityOption.selected = false;
    }
  });

  city.dispatchEvent(new Event('change'));
};

// city 옵션값 변경 이벤트
city.addEventListener('change', () => {
  const selectedCategory = city.value;
  if (selectedCategory !== 'none') {
    state.innerHTML = '<option>구/군 선택</option>';
    stateInfo[selectedCategory].forEach((subcategory) => {
      const option = document.createElement('option');
      option.innerText = subcategory;
      state.appendChild(option);
    });
  }
});

// 지도 클릭 이벤트
mapAreas.forEach((area) => {
  area.addEventListener('click', mapInfo);
});

// 데이터 생성함수
function createRow(data) {
  const row = document.createElement('tr');
  row.id = data.store;
  row.innerHTML = `
    <td>${data.store}</td>
    <td>${data.main_area}</td>
    <td>${data.address}</td>
    <td>${data.tel}</td>
    <td>${data.service
      .map((service) => `<i class="${service}"></i>`)
      .join('')}</td>
  `;
  return row;
}

// 엔터 이벤트
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      tableBody.innerHTML = ''; // 테이블 내용 초기화
      const cityValue = city.value;
      const stateValue = state.value;
      const searchValue = searchBar.value;

      datas.forEach((data) => {
        const mainAreaMatched = data.main_area === cityValue;
        const subAreaMatched = data.sub_area === stateValue;
        const searchMatched = data.store.includes(searchValue);

        // city와 state가 선택되지 않은 경우 모두 출력
        if (cityValue === '도/시 선택') {
          const row = createRow(data);
          tableBody.appendChild(row);
        }
        // city와 state가 선택된 경우 해당 값에 맞는 데이터만 출력
        else if (mainAreaMatched && subAreaMatched && searchMatched) {
          const row = createRow(data);
          tableBody.appendChild(row);
        }
      });
    });
});

// 버튼 클릭 이벤트
search.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      tableBody.innerHTML = ''; // 테이블 내용 초기화
      const cityValue = city.value;
      const stateValue = state.value;
      const searchValue = searchBar.value;
      console.log(cityValue);

      datas.forEach((data) => {
        const mainAreaMatched = data.main_area === cityValue;
        const subAreaMatched = data.sub_area === stateValue;
        const searchMatched = data.store.includes(searchValue);

        // city와 state가 선택되지 않은 경우 모두 출력
        if (cityValue === '도/시 선택') {
          const row = createRow(data);
          tableBody.appendChild(row);
        }
        // city와 state가 선택된 경우 해당 값에 맞는 데이터만 출력
        else if (mainAreaMatched && subAreaMatched && searchMatched) {
          const row = createRow(data);
          tableBody.appendChild(row);
        }
      });
    });
});

// 5개씩 컨텐츠 보여주기
const itemsPerPage = 5; // 페이지당 보여줄 아이템 수
let currentPage = 1; // 현재 페이지

const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = '';
  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

const renderPagination = (data) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationContainer = document.querySelector('.shopinfo_pager ul');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('li');
    pageLink.textContent = i;
    pageLink.style.cursor = 'pointer';
    pageLink.addEventListener('click', () => {
      currentPage = i;
      renderData(data);
      renderPagination(data);
    });
    paginationContainer.appendChild(pageLink);
  }
};

// 데이터 가져오기
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    renderData(data);
    renderPagination(data);
  });

// 체크박스 옵션 이벤트
const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll('.filter-checkbox:checked'),
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
  fetch(url)
    .then((response) => response.json())
    .then((data) => filterData(data));
};

checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener('change', optionMode);
});

// // 체크박스 옵션 이벤트
// const filterData = (data) => {
//   const selectedCategories = [
//     ...document.querySelectorAll('.filter-checkbox:checked'),
//   ].map((checkbox) => checkbox.value);

//   const filteredData = data.filter((item) => {
//     return selectedCategories.every((service) =>
//       item.service.includes(service)
//     );
//   });

//   tableBody.innerHTML = '';
//   filteredData.forEach((data) => {
//     const row = createRow(data);
//     tableBody.appendChild(row);
//   });
// };

// const optionMode = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => filterData(data));
// };

// checkBoxs.forEach((checkBox) => {
//   checkBox.addEventListener('change', optionMode);
// });

// // 5개씩 컨텐츠 보여주기
// const itemsPerPage = 5; // 페이지당 보여줄 아이템 수
// let currentPage = 1; // 현재 페이지

// const renderData = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const startIndex = (currentPage - 1) * itemsPerPage;
//       const endIndex = startIndex + itemsPerPage;
//       const currentPageData = data.slice(startIndex, endIndex);
//       tableBody.innerHTML = '';
//       currentPageData.forEach((item) => {
//         const listItem = document.createElement('div');
//         listItem.textContent = item.name; // 예시 데이터에서 'name'을 표시하도록 수정해주세요.
//         tableBody.appendChild(listItem);
//       });
//     });
// };

// const renderPagination = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const totalPages = Math.ceil(data.length / itemsPerPage);
//       const paginationContainer = document.querySelector('.tableBody');
//       paginationContainer.innerHTML = '';

//       for (let i = 1; i <= totalPages; i++) {
//         const pageLink = document.createElement('span');
//         pageLink.textContent = i;
//         pageLink.style.cursor = 'pointer';
//         pageLink.addEventListener('click', () => {
//           currentPage = i;
//           renderData();
//           renderPagination();
//         });
//         paginationContainer.appendChild(pageLink);
//       }
//     });
// };

// renderData();
// renderPagination();

// search.addEventListener('click', (e) => {
//   e.preventDefault();
//   fetch(url)
//     .then((response) => response.json())
//     .then((datas) => {
//       if (searchBar.value !== '') {
//         tableBody.innerHTML = '';
//         datas.forEach((data) => {
//           if (data.store.includes(searchBar.value)) {
//             const row = document.createElement('tr');
//             row.id = data.store;
//             row.innerHTML = `
//           <td>${data.store}</td>
//           <td>${data.main_area}</td>
//           <td>${data.address}</td>
//           <td>${data.tel}</td>
//           <td><i class="${data.service[0]}"></i>
//           <i class="${data.service[1]}"></i>
//           <i class="${data.service[2]}"></i>
//           <i class="${data.service[3]}"></i>
//           <i class="${data.service[4]}"></i>
//           </td>
//           `;
//             tableBody.appendChild(row);
//           } else if (data.store === searchBar.value) {
//             const row = document.createElement('tr');
//             row.id = data.store;
//             row.innerHTML = `
//           <td>${data.store}</td>
//           <td>${data.main_area}</td>
//           <td>${data.address}</td>
//           <td>${data.tel}</td>
//           <td><i class="${data.service[0]}"></i>
//           <i class="${data.service[1]}"></i>
//           <i class="${data.service[2]}"></i>
//           <i class="${data.service[3]}"></i>
//           <i class="${data.service[4]}"></i>
//           </td>
//           `;
//           }
//         });
//       } else {
//         tableBody.innerHTML = '';
//         datas.forEach((data) => {
//           const row = document.createElement('tr');
//           row.id = data.store;
//           row.innerHTML = `
//             <td>${data.store}</td>
//             <td>${data.main_area}</td>
//             <td>${data.address}</td>
//             <td>${data.tel}</td>
//             <td><i class="${data.service[0]}"></i>
//             <i class="${data.service[1]}"></i>
//             <i class="${data.service[2]}"></i>
//             <i class="${data.service[3]}"></i>
//             <i class="${data.service[4]}"></i>
//             </td>
//             `;
//           tableBody.appendChild(row);
//         });
//       }
//     });
// });
