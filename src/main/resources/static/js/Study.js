document.addEventListener('DOMContentLoaded', function() {
    fetchTodos();
});

function fetchTodos() {
    fetch('/api/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.querySelector('#todoList');
            todoList.innerHTML = ''; // 기존 항목 초기화
            if (Array.isArray(data)) {
                data.forEach(todo => {
                    createTodoElement(todo.id, todo.description, todo.completed);
                });
            } else {
                console.error('Invalid response format', data);
            }
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
}

function createTodoElement(id, description, completed) {
    const todoList = document.querySelector('#todoList');
    const newLi = document.createElement('li'); // li 생성
    if (completed) {
        newLi.classList.add('complete');
    }
    const newSpan = document.createElement('span'); // span 생성
    newSpan.textContent = description; // span에 입력 값 설정

    const completeBtn = document.createElement('button'); // 완료 버튼 생성
    completeBtn.classList.add('complete-btn'); // 완료 버튼에 클래스 추가
    
    
    const deleteBtn = document.createElement('button'); // 삭제 버튼 생성
    deleteBtn.classList.add('delete-button');
    

    newLi.appendChild(newSpan); // li에 span 추가
    newLi.appendChild(completeBtn); // li에 완료 버튼 추가
    newLi.appendChild(deleteBtn); // li에 삭제 버튼 추가

    todoList.appendChild(newLi); // 전체 리스트에 새로운 항목 추가

    completeBtn.addEventListener('click', () => { // 완료 버튼 이벤트
        newLi.classList.toggle('complete'); // 'complete' 클래스 토글
        updateTodoStatus(id, !completed); // 상태 변경 후 서버에 업데이트
        updateCompletionRate(); // 상태 변경 후 완료율 업데이트
    });

    deleteBtn.addEventListener('click', () => { // 삭제 버튼 이벤트
        deleteTodoById(id); // 서버에서 항목 삭제
        todoList.removeChild(newLi); // li 요소 삭제
        updateCompletionRate(); // 항목 삭제 후 완료율 업데이트
    });

    updateCompletionRate();
} 

function keyCodeCheck(event) { // 엔터키로 추가
    if (event.keyCode === 13) {
        createTodo();
    }
}

function createTodo() {
    const todoInput = document.querySelector('#todoInput'); // 입력 필드
    if (todoInput.value !== '') {
        const description = todoInput.value;
        fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: description, completed: false }),
        })
        .then(response => response.json())
        .then(todo => {
            createTodoElement(todo.id, todo.description, todo.completed);
        });

        todoInput.value = ''; // 입력 필드 초기화
    }
}

function updateTodoStatus(id, completed) {
    fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: completed }),
    });
}

function deleteTodoById(id) {
    fetch(`/api/todos/${id}`, {
        method: 'DELETE',
    });
}

function updateCompletionRate() {
    const totalItems = document.querySelectorAll('#todoList li').length;
    const completedItems = document.querySelectorAll('#todoList li.complete').length;
    const completionRate = totalItems ? ((completedItems / totalItems) * 100).toFixed(2) : 0; // 0을 분모로 나누는 것을 방지
    document.querySelector('#completionRate').textContent = `목표 달성율 : ${completionRate}%`;
}

const addBtn = document.querySelector('#addBtn'); // 추가 버튼 선택
addBtn.addEventListener('click', createTodo);
document.querySelector('#todoInput').addEventListener('keydown', keyCodeCheck);
updateCompletionRate(); // 초기 완료율 설정
