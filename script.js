const toDos = JSON.parse(localStorage.getItem('toDos')) || [];



rendertoDoList();

document.querySelector('.todoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  btn('Add');
});

function rendertoDoList() {
  let todoListHTML = '';
  
  toDos.forEach(function(todostuff, index ) {

    const {name, date} = todostuff;

    const html = `
      <div class="todoName">
        ${name}
      </div>

      <div class="todoDate">
        ${date}
      </div>

      <button class="deleteCss" onclick="
        toDos.splice(${index}, 1);
        localStorage.setItem('toDos', JSON.stringify(toDos));
        rendertoDoList();
      ">
        Delete
      </button>
    `;
    

    todoListHTML += html;
  });
  
  document.querySelector('.todoListJs')
    .innerHTML = todoListHTML;
}

function btn(add) {
  const inputVal = document.querySelector('.inputJs');
  const dateInput = document.querySelector('.dateJs');

  if (add === 'Add') {
    toDos.push({
      name: inputVal.value,
      date: dateInput.value,
    });
  }

  localStorage.setItem('toDos', JSON.stringify(toDos));

  inputVal.value = '';
  dateInput.value = '';

  rendertoDoList();
}
