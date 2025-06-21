function openForm(formId) {
    document.getElementById(formId).style.display = "block";
    if (formId === 'form2') {
        setTimeout(initMap, 100); // 폼을 열 때 지도를 초기화
    }
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
    document.getElementById('cuisine').value = ''; // 음식 종류 선택 초기화
    document.getElementById('randomFoodName').innerText = ''; // 랜덤 음식 이름 초기화
    document.getElementById('randomFoodImage').src = ''; // 랜덤 음식 이미지 초기화
    document.getElementById('randomFoodImage').alt = ''; // 랜덤 음식 이미지 alt 텍스트 초기화
    if(formId=='form2')
        {
            clearResults();
            clearMarkers();
        }
}


const naverClientId = 'w5PsmEU0G6vVGH_WhSYS'; // Naver Client ID를 여기에 입력하세요
const naverClientSecret = '4Wf5umte88'; // Naver Client Secret을 여기에 입력하세요

document.querySelector('.form-container').addEventListener('submit', function (event) {
    event.preventDefault();
    const cuisine = document.getElementById('cuisine').value;
    let foodList;

    switch (cuisine) {
        case 'korean':
            foodList = [
                '비빔밥', '불고기', '갈비찜', '떡볶이', '잡채', '김밥', '냉면', '순두부찌개', '삼계탕', '감자탕',
                '해물파전', '파전', '두부조림', '제육볶음', '오징어볶음', '낙지볶음', '닭갈비', '쌈밥', '김치찌개', '된장찌개',
                '된장국', '북엇국', '미역국', '콩나물국', '소고기무국', '떡국', '만두국', '고등어조림', '갈치조림', '감자조림',
                '꽁치조림', '삼겹살', '생선구이', '갈비탕', '순대국', '해장국', '뼈해장국', '육개장', '김치볶음밥', '참치김치찌개',
                '알탕', '아구찜', '동태찌개', '부대찌개', '콩비지찌개', '수제비', '칼국수', '잔치국수', '메밀국수', '비빔국수',
                '칡냉면', '물냉면', '비빔냉면', '우동', '어묵탕', '곱창전골', '샤브샤브', '전복죽', '호박죽', '팥죽',
                '녹두죽', '영양솥밥', '굴밥', '전복밥', '꼬막비빔밥', '아귀찜', '쭈꾸미볶음', '닭볶음탕', '장어덮밥', '회덮밥',
                '육회비빔밥', '참치비빔밥', '돌솥비빔밥', '곤드레밥', '우엉밥', '곰탕', '설렁탕', '도가니탕', '수육', '오리백숙',
                '훈제오리', '전기구이치킨', '찜닭', '간장게장', '양념게장', '낙지탕탕이', '오징어덮밥', '두부김치', '두부전골', '소불고기전골'
            ];

            break;
        case 'chinese':
            foodList = [
                '짜장면', '짬뽕', '탕수육', '깐풍기', '칠리새우', '양장피', '마파두부', '고추잡채', '꿔바로우', '유린기',
                '북경오리', '삼선볶음밥', '볶음밥', '팔보채', '탕탕이', '난자완스', '샥스핀', '동파육', '춘권', '군만두',
                '물만두', '마늘치킨', '깐쇼새우', '유산슬', '짜장밥', '짬뽕밥', '유린새우', '칠리새우', '멘보샤', '채소볶음',
                '깐쇼육', '홍쇼육', '샤오롱바오', '훠궈', '딤섬', '완탕', '완탕면', '베이징덕', '중국식 계란찜', '차슈',
                '탄탄면', '라조기', '고추기름 소고기', '어향육사', '마라탕', '마라샹궈', '페킹덕', '짜장우동', '마라롱샤', '사천식 닭고기',
                '사천식 두부', '바지락 볶음', '계란볶음밥', '양고기 꼬치', '고추잡채', '오향장육', '중국식 냉면', '굴짬뽕', '중국식 샤부샤부', '중국식 전골',
                '중국식 고추잡채', '양꼬치', '어향어', '초마면', '사천식 냉면', '매운 가지볶음', '사천식 어향가지', '새우 완탕', '새우 딤섬', '굴소스 닭고기 볶음',
                '해파리 냉채', '매운 오징어 볶음', '칠리 두부', '두부버섯볶음', '중국식 볶음우동', '사천식 마파두부', '고추기름 가지볶음', '고추기름 소고기 볶음', '사천식 해물볶음', '중국식 해물탕',
                '중국식 고추 잡채', '중국식 해물 볶음밥', '중국식 전복죽', '중국식 오리볶음', '해파리냉채', '양장피 냉채', '칠리 닭고기', '사천식 깐쇼새우', '중국식 고기전', '중국식 계란말이'
            ];
            break;
        case 'japanese':
            foodList = [
                '스시', '사시미', '돈카츠', '라멘', '우동', '소바', '덴푸라', '오코노미야키', '타코야키', '규동',
                '가츠동', '텐동', '카라아게', '나베', '쇼유 라멘', '미소 라멘', '시오 라멘', '쓰케멘', '야키소바', '야키토리',
                '스키야키', '샤부샤부', '오뎅', '카이센동', '후토마키', '호타테', '에비 후라이', '니쿠자가', '오야코동', '타마고야키',
                '니기리즈시', '사바즈시', '스시롤', '히야시추카', '하야시라이스', '고항', '도리소바', '카레라이스', '카츠카레', '아게다시도후',
                '미소시루', '냉우동', '니쿠우동', '텐푸라우동', '가마아게우동', '키츠네우동', '니쿠소바', '산마', '쇼가야키', '우나기동',
                '나가사키 짬뽕', '히로시마 오코노미야키', '다코야키', '야키토리', '우나기', '아나고', '스즈카야키', '니시노미야 오코노미야키', '고마도후', '규카츠',
                '오니기리', '사케동', '야키니쿠', '타마고사라다', '이카야키', '우동스키', '야키교자', '히야시소바', '텐푸라소바', '야키이모',
                '나마하루마키', '하마치', '타코사시미', '메카지키', '하마치카마', '모츠나베', '아키타 모치', '규마미', '사사미', '스지니코미',
                '고보텐우동', '이카메시', '호타루이카', '가이센야키', '오차즈케', '사케노우니', '우메보시', '타마고소바', '키츠네소바', '니쿠고항'
            ];
            break;
        case 'western':
            foodList = [
                '스테이크', '파스타', '피자', '햄버거', '샌드위치', '라자냐', '리조또', '브루스케타', '그라탱', '바베큐 립',
                '프렌치 토스트', '베이글', '크로크 무슈', '크로크 마담', '부야베스', '치킨 파마산', '치킨 알프레도', '카르보나라', '볼로네제', '프리카세',
                '프렌치 어니언 수프', '크림 수프', '미네스트로네', '시저 샐러드', '그린 샐러드', '니수아즈 샐러드', '콜슬로', '갈릭 브레드', '포카치아', '바게트',
                '클램 차우더', '칠리 콘 카르네', '비프 부르기뇽', '무사카', '페투치니', '뇨끼', '라클렛', '치즈 퐁듀', '비스크', '프라이드 치킨',
                '필레 미뇽', '랍스터 롤', '비스텍', '브런치 플래터', '그릭 요거트', '하이라이프 치킨', '에그 베네딕트', '크레페', '퀘사디아', '타코',
                '엔칠라다', '파히타', '브리또', '나쵸', '쿠스쿠스', '하리라', '타진', '훈제 연어', '비스마르크 피자', '마르게리타 피자',
                '콤비네이션 피자', '페퍼로니 피자', '하와이안 피자', '시카고 딥디쉬 피자', '칼초네', '스파게티', '라비올리', '파에야', '타파스', '가스파초',
                '감바스 알 아히요', '리브아이 스테이크', '포터하우스 스테이크', '뉴욕 스트립 스테이크', '테리야키 치킨', '바베큐 치킨', '로스트 치킨', '칠리 도그', '호두 샐러드', '바비큐 콜리플라워',
                '포크 챱스', '베이비 백 립스', '미트 로프', '머쉬룸 스테이크', '스테이크 샌드위치', '에그 샐러드 샌드위치', '햄 샌드위치', '터키 샌드위치', 'BLT 샌드위치', '치즈버거',
                '더블치즈버거', '베이컨치즈버거', '멕시칸 타코 샐러드', '코브 샐러드', '월도프 샐러드', '로스트 비프 샌드위치', '치킨 랩', '바비큐 랩', '베지터블 랩', '크랩 케이크'
            ];
            break;
        default:
            return '<p>음식 종류를 선택하세요.</p>';
    }
    const randomFood = foodList[Math.floor(Math.random() * foodList.length)];
    document.getElementById('randomFoodName').innerText = randomFood;
    fetchFoodImage(randomFood);
});

function fetchFoodImage(foodName) {
    const url = `http://localhost:3000/search/image?query=${encodeURIComponent(foodName)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(imageUrl => {
            document.getElementById('randomFoodImage').src = imageUrl;
            document.getElementById('randomFoodImage').alt = foodName;
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
            document.getElementById('randomFoodImage').src = '';
            document.getElementById('randomFoodImage').alt = '사진을 찾을 수 없습니다.';
        });
}



let map;
let service;
let infowindow;

function initMap() {
    const initialLocation = new google.maps.LatLng(37.4505, 126.6571);

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialLocation,
        zoom: 15,
    });

    service = new google.maps.places.PlacesService(map);
}

function searchMenu() {
    const menuInput = document.getElementById('menu-input').value;
    const request = {
        query: "인하대학교" + menuInput,
        fields: ['name', 'geometry', 'formatted_address', 'place_id'],
        locationBias: new google.maps.LatLng(37.4505, 126.6571), // 인하대 근처로 검색 범위 제한
    };

    service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            console.log(results);

            
            clearMarkers();
           
            clearResults();

            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
                displayResult(results[i]);
            }

            map.setCenter(results[0].geometry.location);
        } else {
            alert('No results found');
            console.log('Status:', status); // 상태 출력
        }
    });
}


let markers = [];

function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(`<div><strong>${place.name}</strong><br>${place.formatted_address}</div>`);
        infowindow.open(map, this);
    });
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function clearResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
}

function displayResult(place) {
    const resultsContainer = document.getElementById('results');
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.innerHTML = `<strong>${place.name}</strong><br>${place.formatted_address}`;
    resultsContainer.appendChild(resultItem);
}

document.getElementById('restaurantSearchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    searchMenu(); // Perform the search
});

