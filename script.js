const toDos = [{dueDate:''}];

rendertoDoList();
function rendertoDoList() {
  let todoListHTML = '';

  for(let i = 0; i < toDos.length; i++){

    const todostuff = toDos[i];
    const html = `
    <p>
     ${todostuff}
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

  if(add === 'Add') {
    toDos.push(inputVal.value);
    console.log(toDos);
  }
    
    inputVal.value = '';

    rendertoDoList();
  
  };
