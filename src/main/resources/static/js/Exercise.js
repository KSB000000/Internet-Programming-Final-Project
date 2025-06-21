
function openForm(formId) {
    closeAllForms();
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function closeAllForms() {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'none';
}

function selectPart(part) {
    document.getElementById('selectedPart').value = part;
}

function submitForm() {
    var part = document.getElementById('selectedPart').value;
    var output = document.getElementById('output');
    if (part) {
        output.textContent = part + '에 대한 내용을 표시합니다.';
    } else {
        output.textContent = '먼저 부위를 선택하세요.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    function showOptions(selectId, optionsContainerId, formNumber) {
        const partSelect = document.getElementById(selectId).value;
        const optionsContainer = document.getElementById(optionsContainerId);
        const formPopup = optionsContainer.closest('.form-popup');
        const outputElement = formPopup.querySelector('.form-right');

        optionsContainer.innerHTML = '';

        if (outputElement) {
            outputElement.innerHTML = '<h3>관련 영상보기</h3><p>운동 이름을 클릭하면 관련된 영상이 나타납니다.</p>';
        }
        switch (formNumber) {
            case 1:
                optionsHTML = getOptionsForForm1(partSelect);
                break;
            case 2:
                optionsHTML = getOptionsForForm2(partSelect);
                break;
            case 3:
                optionsHTML = getOptionsForForm3(partSelect);
                break;
            default:
                optionsHTML = '<p>부위를 선택하세요.</p>';
        }
        optionsContainer.innerHTML = optionsHTML;
        addExerciseClickHandlers(optionsContainer, formNumber);
    }

    function getOptionsForForm1(part) {
        switch (part) {
            case 'back':
                return createTable([
                    { exercise: '랫 풀 다운', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '비하인드 넥 풀 다운', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '시티드 케이블 로우', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '덤벨 풀오버', reps: '12~15회', sets: '3set', rest: '60~90초' }
                ]);
            case 'chest':
                return createTable([
                    { exercise: '체스트 프레스 머신', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '벤치프레스', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '인클라인 벤치프레스', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '펙덱플라이', reps: '12~15회', sets: '3set', rest: '60~90초' }
                ]);
            case 'shoulder':
                return createTable([
                    { exercise: '밀리터리 프레스', reps: '12~15회', sets: '5est', rest: '1~2분' },
                    { exercise: '사이드 레터럴 레이즈', reps: '12~15회', sets: '3est', rest: '60~90초' },
                    { exercise: '덤벨 프론트 레이즈', reps: '12~15회', sets: '3est', rest: '60~90초' },
                    { exercise: '벤트 오버 레터럴 레이즈', reps: '12~15회', sets: '3est', rest: '60~90초' }
                ]);
            case 'leg':
                return createTable([
                    { exercise: '레그 익스텐션', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '스쿼트', reps: '12~15회', sets: '5est', rest: '1~2분' },
                    { exercise: '레그프레스', reps: '12~15회', sets: '3est', rest: '60~90초' },
                    { exercise: '레그 컬', reps: '12~15회', sets: '3est', rest: '60~90초' }
                ]);
            case 'biceps':
                return createTable([
                    { exercise: '바벨컬', reps: '12~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '덤벨컬', reps: '12~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '해머컬', reps: '12~15회', sets: '3est', rest: '60~90초' }
                ]);
            case 'triceps':
                return createTable([
                    { exercise: '라잉 트라이셉스 익스텐션', reps: '12~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '케이블 프레스 다운', reps: '12~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '오버헤드 익스텐션', reps: '12~15회', sets: '3est', rest: '60~90초' }
                ]);
                    
            default:
                return '<p>부위를 선택하세요.</p>';
        }
    }

    function getOptionsForForm2(part) {
        switch (part) {
            case 'back':
                return createTable([
                    { exercise: '데드리프트', reps: '10~15회', sets: '4set', rest: '1~2분' },
                    { exercise: '랫 풀 다운', reps: '10~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '비하인드 넥 풀 다운', reps: '10~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '바벨 로우', reps: '10~15회', sets: '4set', rest: '1~2분' },
                    { exercise: '시티드 케이블 로우', reps: '10~15회', sets: '3set', rest: '60~90초' }
                ]);
            case 'chest':
                return createTable([
                    { exercise: '벤치프레스', reps: '10~15회', sets: '5set', rest: '1~2분' },
                    { exercise: '인클라인 벤치프레스', reps: '10~15회', sets: '5set', rest: '1~2분' },
                    { exercise: '딥스', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '덤벨플라이', reps: '12~15회', sets: '3set', rest: '60~90초' },
                    { exercise: '케이블 크로스 오버', reps: '15~20회', sets: '3set', rest: '60~90초' }
                ]);
            case 'shoulder':
                return createTable([
                    { exercise: '밀리터리 프레스', reps: '10~15회', sets: '5est', rest: '1~2분' },
                    { exercise: '비하인드 넥 프레스', reps: '10~15회', sets: '4est', rest: '1~2분' },
                    { exercise: '사이드 레터럴 레이즈', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '바벨 프론트 레이즈', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '벤트 오버 레터럴 레이즈', reps: '15~20회', sets: '4est', rest: '60~90초' }
                ]);
            case 'leg':
                return createTable([
                    { exercise: '레그 익스텐션', reps: '12~15회', sets: '5est', rest: '1~2분' },
                    { exercise: '스쿼트', reps: '10~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '런지', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '레그 컬', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '카프레이즈', reps: '15~20회', sets: '3est', rest: '60초' }
                ]);
            case 'biceps':
                return createTable([
                    { exercise: '바벨컬', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '인클라인 덤벨컬', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '해머컬', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '프리쳐 컬', reps: '10~15회', sets: '4est', rest: '30~90초' }

                ]);
            case 'triceps':
                return createTable([
                    { exercise: '라잉 트라이셉스 익스텐션', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '원 암 덤벨 익스텐션', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '오버헤드 케이블 익스텐션', reps: '10~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '로프 프레스 다운', reps: '10~15회', sets: '4est', rest: '30~90초' }
                ]);
            default:
                return '<p>부위를 선택하세요.</p>';
        }
    }

    function getOptionsForForm3(part) {
        switch (part) {
            case 'back':
                return createTable([
                    { exercise: '데드리프트', reps: '6~15회', sets: '4~5set', rest: '1~3분' },
                    { exercise: '바벨 로우', reps: '8~15회', sets: '4set', rest: '1~2분' },
                    { exercise: '원 암 덤벨 로우', reps: '8~15회', sets: '3~4set', rest: '1~2분' },
                    { exercise: '시티드 케이블 로우', reps: '8~15회', sets: '3~4set', rest: '1~2분' },
                    { exercise: '랫 풀 다운', reps: '12~15회', sets: '3~4set', rest: '60~90초' },
                    { exercise: '덤벨 풀오버', reps: '8~15회', sets: '3~4set', rest: '60~90초' },
                ]);
            case 'chest':
                return createTable([
                    { exercise: '벤치프레스', reps: '6~15회', sets: '6~7set', rest: '1~2분' },
                    { exercise: '인클라인 벤치프레스', reps: '6~15회', sets: '3~4set', rest: '1~2분' },
                    { exercise: '인클라인 덤벨프레스', reps: '6~15회', sets: '6~7set', rest: '1~2분' },
                    { exercise: '플랫 덤벨 플라이', reps: '12~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '딥스', reps: '10~15회', sets: '4set', rest: '60~90초' },
                    { exercise: '펙덱 플라이', reps: '12~20회', sets: '3~4set', rest: '60~90초' }
                ]);
            case 'shoulder':
                return createTable([
                    { exercise: '밀리터리 프레스', reps: '6~15회', sets: '6~7est', rest: '1~2분' },
                    { exercise: '덤벨 숄더프레스', reps: '6~15회', sets: '4est', rest: '1~2분' },
                    { exercise: '사이드 레터럴 레이즈', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '바벨 프론트 레이즈', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '벤트 오버 레터럴 레이즈', reps: '12~20회', sets: '4est', rest: '60~90초' },
                    { exercise: '쉬러그', reps: '15~20회', sets: '3~4est', rest: '1~2분' }
                ]);
            case 'leg':
                return createTable([
                    { exercise: '스쿼트', reps: '6~15회', sets: '7est', rest: '1~2분' },
                    { exercise: '레그 프레스', reps: '6~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '레그 익스텐션', reps: '12~15회', sets: '4est', rest: '60~90초'} ,
                    { exercise: '런지', reps: '12~15회', sets: '3~4est', rest: '60~90초' },
                    { exercise: '레그 컬', reps: '12~15회', sets: '4est', rest: '60~90초' },
                    { exercise: '스티프 레그 데드리프트', reps: '12~15회', sets: '3~4est', rest: '60~90초'},
                    { exercise: '카프레이즈', reps: '15~20회', sets: '3~4est', rest: '60초' }
                    
                ]);
            case 'biceps':
                return createTable([
                    { exercise: '바벨컬', reps: '8~15회', sets: '5est', rest: '30~90초' },
                    { exercise: '덤벨컬', reps: '8~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '해머컬', reps: '8~15회', sets: '3est', rest: '30~90초' },
                    { exercise: '프리쳐 컬', reps: '8~15회', sets: '3est', rest: '30~90초' },
                    { exercise: 'EZ바 컬', reps: '10~15회', sets: '2~3est', rest: '30~90초' }
                ]);
            case 'triceps':
                return createTable([
                    { exercise: '라잉 트라이셉스 익스텐션', reps: '8~15회', sets: '5est', rest: '30~90초' },
                    { exercise: '원 암 덤벨 익스텐션', reps: '8~15회', sets: '4est', rest: '30~90초' },
                    { exercise: '오버헤드 케이블 익스텐션', reps: '8~15회', sets: '3est', rest: '30~90초' },
                    { exercise: '케이블 프레스 다운', reps: '8~15회', sets: '3est', rest: '30~90초' },
                    { exercise: '삼두 딥스', reps: '8~15회', sets: '2~3est', rest: '30~90초' }
                ]);
            default:
                return '<p>부위를 선택하세요.</p>';
        }
    }

    function createTable(exercises) {
        let tableHTML = `<table class="fixed-table">
            <tr>
                <th>운동</th>
                <th>반복횟수</th>
                <th>세트 수</th>
                <th>세트 사이 쉬는시간</th>
            </tr>`;
        exercises.forEach(exercise => {
            tableHTML += `<tr>
                <td class="exercise-name" data-exercise="${exercise.exercise}">${exercise.exercise}</td>
                <td>${exercise.reps}</td>
                <td>${exercise.sets}</td>
                <td>${exercise.rest}</td>
            </tr>`;
        });
        tableHTML += '</table>';
        return tableHTML;
    }

    function addExerciseClickHandlers(container, formNumber) {
        container.querySelectorAll('.exercise-name').forEach(cell => {
            cell.addEventListener('click', event => {
                const exerciseName = event.target.getAttribute('data-exercise');
                const outputElement = container.closest('.form-popup').querySelector('.form-right');
                if (outputElement) {
                    console.log(`Searching YouTube for: ${exerciseName}`); // Debugging line
                    searchYouTube(exerciseName, outputElement);
                } else {
                    console.error('Output element not found');
                }
            });
        });
    }

    function searchYouTube(query, outputElement) {
        const apiKey = 'AIzaSyBlq_Hk-A5P4Tqy99zoq90aRTa8srYVzvM'; // Replace with your YouTube Data API key
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=5&key=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('YouTube API response:', data); // Debugging line
                if (data.items && data.items.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.items.length);
                    const videoId = data.items[randomIndex].id.videoId;
                    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
                    console.log(`Embedding video: ${videoEmbedUrl}`); // Debugging line
                    outputElement.innerHTML = `<iframe width="100%" height="315" src="${videoEmbedUrl}" frameborder="0" allowfullscreen></iframe>`;
                } else {
                    outputElement.innerHTML = '<p>동영상을 찾을 수 없습니다.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching YouTube video:', error); // Improved error handling
                if (outputElement) {
                    outputElement.innerHTML = '<p>동영상을 가져오는 중 오류가 발생했습니다.</p>';
                }
            });
    }

    document.getElementById('partSelect1').addEventListener('change', () => showOptions('partSelect1', 'optionsContainer1', 1));
    document.getElementById('partSelect2').addEventListener('change', () => showOptions('partSelect2', 'optionsContainer2', 2));
    document.getElementById('partSelect3').addEventListener('change', () => showOptions('partSelect3', 'optionsContainer3', 3));
});

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}



