
const todoList = document.querySelector('.listado');
const allButton = document.querySelector('#all_btn')
const activeButton = document.querySelector('#active_btn');
const completedButton = document.querySelector('#completed_btn');

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {

    allButton.addEventListener('click', mostrarTodo);
    function mostrarTodo() {
      displayTodos(data)
    }

    activeButton.addEventListener('click', mostrarActive);
    function mostrarActive() {
      displayActivos(data)
    }

    completedButton.addEventListener('click', mostrarCompleted)
    function mostrarCompleted() {
      displayCompleted(data)
    }
  })
  .catch(error => console.error('Error fetching data:', error));


// Función para mostrar los todos en la página
function displayTodos(todos) {

  todos.forEach(objeto => {

    const div = document.createElement('div');
    const input = document.createElement('input');
    const parrafo = document.createElement('p');
    div.classList.add('input_checkbox');
    input.type = "checkbox";

    if (objeto.completed) {
      input.checked = true
    }

    parrafo.textContent = objeto.title;
    div.append(input, parrafo)
    todoList.appendChild(div);
  });
}

function displayActivos(actives) {
  actives.forEach(objeto => {
    if (!objeto.completed) {
      const div = document.createElement('div');
      const input = document.createElement('input');
      const parrafo = document.createElement('p');
      div.classList.add('input_checkbox');
      input.type = "checkbox";

      if (objeto.completed) {
        input.checked = true
      }

      parrafo.textContent = objeto.title;
      div.append(input, parrafo)
      todoList.appendChild(div);
    }

  });

}

function displayCompleted(complete) {
  complete.forEach(objeto => {
    if (objeto.completed) {
      const div = document.createElement('div');
      const input = document.createElement('input');
      const parrafo = document.createElement('p');
      div.classList.add('input_checkbox');
      input.type = "checkbox";

      if (objeto.completed) {
        input.checked = true
      }

      parrafo.textContent = objeto.title;
      div.append(input, parrafo)
      todoList.appendChild(div);
    }

  });

}


