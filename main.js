const ul = document.querySelector('.to-do-list');
const todoItem = document.querySelector('#todo-item');
const add = document.querySelector('#add');
const errorMessage = document.querySelector('.error-message');


add.addEventListener('click', () => {
    if (todoItem.value !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerHTML = todoItem.value;
        const input = document.createElement('input');
        input.type = 'checkbox';
        li.appendChild(input);
        li.appendChild(span);
        ul.appendChild(li);
        todoItem.value = '';
        errorMessage.innerHTML = '';
        
    }else{
        errorMessage.innerHTML = 'This field cannot be empty';
    }
});


ul.addEventListener('click', e => {
    const element = e.target;
   if (element.type === 'checkbox') {
       
   }
})