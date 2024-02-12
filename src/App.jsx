import { useEffect, useState } from "react";
import Header from "./components/Headers";
import ToDoComputed from "./components/ToDoComputed";
import ToDoFilter from "./components/ToDoFilter";
import ToDoList from "./components/ToDoList";
import ToDoCreate from "./components/TodoCreate";

/* const initialStateToDos = [
    { id: 1, title: "Estudiar", completed: false },
    { id: 2, title: "Hacer Ejercicio", completed: true },
    { id: 3, title: "Mejorar constantemente", completed: true },
    { id: 4, title: "Aprender JavaScript", completed: false },
]; */

const initialStateToDos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateToDos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createToDo = (title) => {
        const newToDo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newToDo]);
    };

    const updateToDo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const countLeftToDo = todos.filter((todo) => !todo.completed).length;

    const clearCompletedToDo = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filteredToDos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "completed":
                return todos.filter((todo) => todo.completed);
            case "active":
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat  dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-500 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <ToDoCreate createToDo={createToDo} />

                <ToDoList
                    todos={filteredToDos()}
                    updateToDo={updateToDo}
                    deleteToDo={deleteToDo}
                />

                <ToDoComputed
                    countLeftToDo={countLeftToDo}
                    clearCompletedToDo={clearCompletedToDo}
                />

                <ToDoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-500">
                Drag and drop to order list
            </footer>
        </div>
    );
};

export default App;
