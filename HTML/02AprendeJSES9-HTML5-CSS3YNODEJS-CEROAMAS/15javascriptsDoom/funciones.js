const todos = [];
window.onload = () => {

    /*     alert("Introduccion al Doom")
        const parrafo = document.getElementById('texto')
        parrafo.innerHTML = "texto actualizado";
        console.log(parrafo.innerHTML)
        document.write(parrafo.innerText) */

    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        const todoList = document.getElementById("todo-lista")
        const todosTemplate = todos.map(t => `<li>${t}</li>`)
        const elementos = document.querySelectorAll("#todo-lista li");
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click', () => {
                elemento.parentNode.
                console.log(elemento, i);

            })
        })


        /* 
        todoList.innerHTML = todosTemplate.join('');
        todoList.innerHTML = ""
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += `<li>${todos[i]}</li>`;
        } */
    }

}