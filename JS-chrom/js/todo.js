const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY ="toDos";

let toDos = [];
// 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//삭제
function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) );
    saveToDos();
}
// todolist 그리기
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const spen = document.createElement("spen");
    spen.innerText = newTodo.text ;
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(spen);
    li.appendChild(btn);
    toDoList.appendChild(li);

}
// submit 핸들러 
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // 새로운 todo 오브젝트 생성
    const newTodoObj = {
    id: Date.now(),
    text: newTodo,
}
toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if( savedToDos !== null ){
    const parsedToDos =JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}