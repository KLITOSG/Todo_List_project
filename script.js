const toDos = [];

rendertoDoList();
function rendertoDoList() {
  let todoListHTML = '';

  for(let i = 0; i < toDos.length; i++){

    const todostuff = toDos[i];
    const {name, dueDate} =   todostuff;
   
    const html = `
    <p>
     ${name} ${dueDate}
      <button onclick="
        toDos.splice(${i}, 1);

        rendertoDoList();
      ">
        Delete
      </button>
    </p>
    `
    todoListHTML += html;
  }

  document.querySelector('.todoListJs')
    .innerHTML = todoListHTML;
}

function btn (add) {
  const inputVal = document.querySelector('.inputJs');
  const dateInput = document.querySelector('.dateJs');

  if(add === 'Add') {

    toDos.push({
      name: inputVal.value,
      date: dateInput.value
    })
  }
    
    inputVal.value = '';
    dateInput.value = '';

    rendertoDoList();
  
  };
