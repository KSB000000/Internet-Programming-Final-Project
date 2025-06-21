    document.addEventListener('DOMContentLoaded', (event) => {
        const studyButton = document.querySelector('.card_icon1');
        const gymButton = document.querySelector('.card_icon2');
        const foodButton = document.querySelector('.card_icon3');
    
        studyButton.addEventListener('click', () => {
            window.location.href = '/study';
        });
    
        gymButton.addEventListener('click', () => {
            window.location.href = '/exercise';
        });
    
        foodButton.addEventListener('click', () => {
            window.location.href = '/food';
        });

        
    });
    document.addEventListener('DOMContentLoaded', function() {
        const quotes = [
            { quote: "삶이 있는 한 희망은 있다. <br>- 알베르 카뮈 -" },
                { quote: "성공의 비결은 실패에서 힘을 얻는 데 있다. <br>- 벤자민 프랭클린 -" },
                { quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다. <br>- 헨리 포드 -" },
                { quote: "교육은 무기다. 어떻게 사용하느냐가 당신을 결정짓는다. <br>- 넬슨 만델라 -" },
                { quote: "도전이 없다면 성취도 없다. <br>- 에메르슨 -" },
                { quote: "일은 인생의 소중한 부분이다. <br>- 아인슈타인 -" },
                { quote: "미소는 어떤 언어보다도 강력한 힘이다. <br>- 마더 테레사 -" },
                { quote: "목표를 성취하려면 자신의 능력을 믿어야 한다. <br>- 소포클레스 -" },
                { quote: "포기하지 않으면 어떤 어려움도 이길 수 있다. <br>- 찰스길 -" },
                { quote: "성공은 가장 적게 실패한 사람이 아니라, 가장 많은 도전을 이긴 사람에게 온다. <br>- 로버트 슐러 -" },
                { quote: "오늘 날짜로부터 20년 후, 당신이 하지 않은 것에 대한 후회가 더 크다. <br>- 마크 트웨인 -" },
                { quote: "행복은 우리가 간과하는 작은 것들에서 찾을 수 있다. <br>- 데일 카네기 -" },
                { quote: "당신이 취하는 행동이 당신의 가치를 결정짓는다. <br>- 마하트마 간디 -" },
                { quote: "성공의 가장 큰 비결은 성공에 대한 강렬한 열망이다. <br>- 나폴레온 힐 -" },
                { quote: "실패는 성공의 어머니이다. <br>- 토마스 에디슨 -" },
                { quote: "미래를 예측하는 최고의 방법은 미래를 창조하는 것이다. <br>- 피터 드러커 -" },
                { quote: "당신의 꿈을 계속 쫓아가라. 그것이 삶의 의미를 찾는 길이다. <br>- 로버트 브라우닝 -" },
                { quote: "시작이 중요한 것이 아니라, 시작하지 않으면 아무 것도 중요하지 않다. <br>- 존 C. 맥스웰 -" },
                { quote: "언제나 현재에 집중하라. 과거는 이미 벌어진 일이고, 미래는 아직 시작되지 않았다. <br>- 나다르자 -" },
                { quote: "위대한 일은 소인들에게는 생각할 수 없는 일이다. <br>- 토마스 풀러 -" },
                { quote: "당신이 할 수 있는 일에 집중하라, 그리고 나머지는 신경쓰지 마라. <br>- 톰 모나건 -" },
                { quote: "성공은 단순한 의지의 연속이다. <br>- 윈스턴 처칠 -" },
                { quote: "인생은 자신을 찾는 여행이 아니라, 자신을 만드는 여정이다. <br>- 조셉 캠벨 -" },
                { quote: "가장 훌륭한 예언은 스스로 만드는 것이다. <br>- 앤드류 카네기 -" },
                { quote: "행동 없는 꿈은 공허한 환상에 불과하다. <br>- 엘리너 루즈벨트 -" },
                { quote: "행복은 매일 새로운 무엇을 배우는 데에서 찾을 수 있다. <br>- 와루치니 -" },
                { quote: "꿈을 실현시키기 위해서는 행동하는 것이 가장 중요하다. <br>- 액션 브롤슨 -" },
                { quote: "성공은 자신의 한계를 뛰어넘는 데에서 비롯된다. <br>- 아델레 스티븐슨 -" },
                { quote: "오늘 당장 시작하지 않으면, 내일 당장은 더 늦다. <br>- 리베카 웨스트 -" },
                { quote: "도전은 삶을 더 크게 만든다. <br>- 마라 존슨 -" },
                { quote: "성공은 항상 과정이자, 결과는 이에 따르는 자연스러운 결과이다. <br>- 토니 로빈스 -" },
                { quote: "당신이 세운 목표가 당신의 인생을 이끌 것이다. <br>- 데니스 웨이틀리 -" },
                { quote: "모든 꿈은 실현 가능하다. 그러나 결코 쉽지 않다. <br>- 단테 -" },
                { quote: "좋은 생각이 아무리 많아도, 실행되지 않으면 아무 가치가 없다. <br>- 토마스 에디슨 -" },
                { quote: "우리는 우리가 된다. 우리는 늘 자신의 선택에 의해 정해진다. <br>- 알버트 카뮈 -" },
                { quote: "평범한 삶을 선택하면, 평범한 결과를 얻을 것이다. <br>- 짐 롼 -" },
                { quote: "당신의 꿈은 결코 너무 크지 않다. <br>- 제시 켄든 -" },
                { quote: "더 높게 날아라. 모든 것이 가능하다. <br>- 마리 플로렌스 -" },
                { quote: "자신을 알고, 이해하고, 받아들이는 것이 성공의 첫걸음이다. <br>- 산드라 니스움 -" },
                { quote: "당신이 눈으로 본 것을 마음으로 기억하라. <br>- 프랭클린 -" },
                { quote: "가장 어두운 순간일수록 가장 밝은 아이디어가 떠오른다. <br>- 글라디에이터 -" },
                { quote: "성공은 자신에 대한 믿음에서 시작된다. <br>- 나폴레온 힐 -" },
                { quote: "목표를 향해 꾸준한 노력이 필요하다. <br>- 존 C. 맥스웰 -" },
                { quote: "나의 꿈을 행한 첫 걸음은 나의 결정에 달렸다. <br>- 로버트 브라우닄 -" },
                { quote: "당신이 지금까지 살아온 삶은 당신이 지금까지 만들어온 삶이다. <br>- 짐 롼 -" },
                { quote: "먼저 자신을 변화시키고 싶다면, 세상도 따라 변할 것이다. <br>- 마하트마 간디 -" },
                { quote: "무엇보다도 용기를 가져라. 그러면 당신은 성공할 것이다. <br>- 오에노니무스 -" },
                { quote: "가장 중요한 것은 끝나지 않은 노력이다. <br>- 윈스턴 처칠 -" },
                { quote: "당신이 가는 길이 어려움이 가득하다면, 그 길은 올바른 길이다. <br>- 버나드 쇼 -" },
                { quote: "당신이 늘 갖고 있던 꿈을 쫓아가라. 그것이 네 인생의 목표이다. <br>- 헨리 존스 -" }
        ];
    
        const quoteElement = document.getElementById('quoteText');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
    
        quoteElement.innerHTML = randomQuote.quote;
    });

    function checkLoginAndNavigate(url) {
        fetch('/api/checkLogin')
            .then(response => response.json())
            .then(data => {
                if (data.loggedIn) {
                    window.location.href = url;
                } else {
                    alert('로그인이 필요합니다.');
                }
            })
            .catch(error => {
                console.error('Error checking login status:', error);
            });
    }