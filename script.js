const storageKey = 'todo-list-items';
let toDos = loadTodos();

$(document).ready(function () {
  rendertoDoList();

  $('.todoForm').on('submit', function (event) {
    event.preventDefault();
    btn('Add');
  });

  $('.todoListJs').on('click', '.deleteCss', function () {
    const index = Number($(this).data('index'));

    toDos.splice(index, 1);
    saveTodos();
    rendertoDoList();
  });
});

function loadTodos() {
  const savedTodos = localStorage.getItem(storageKey);

  if (!savedTodos) {
    return [];
  }

  try {
    const parsedTodos = JSON.parse(savedTodos);

    if (!Array.isArray(parsedTodos)) {
      return [];
    }

    return parsedTodos.map(function (todo) {
      return {
        name: todo.name || '',
        date: todo.date || '',
      };
    });
  } catch (error) {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(storageKey, JSON.stringify(toDos));
}

function rendertoDoList() {
  const todoList = $('.todoListJs');

  todoList.empty();

  if (toDos.length === 0) {
    $('<p>')
      .addClass('emptyState')
      .text('No tasks yet.')
      .appendTo(todoList);
    return;
  }

  toDos.forEach(function (todo, index) {
    $('<div>')
      .addClass('todoName')
      .text(todo.name || 'Untitled task')
      .appendTo(todoList);

    $('<div>')
      .addClass('todoDate')
      .text(todo.date || 'No date')
      .appendTo(todoList);

    $('<button>')
      .addClass('deleteCss')
      .attr('type', 'button')
      .data('index', index)
      .text('Delete')
      .appendTo(todoList);
  });
}

function btn(add) {
  const inputVal = $('.inputJs');
  const dateInput = $('.dateJs');

  if (add === 'Add') {
    const name = inputVal.val().trim();
    const date = dateInput.val();

    if (!name) {
      inputVal.focus();
      return;
    }

    toDos.push({
      name: name,
      date: date,
    });

    saveTodos();
  }

  inputVal.val('');
  dateInput.val('');
  rendertoDoList();
}
