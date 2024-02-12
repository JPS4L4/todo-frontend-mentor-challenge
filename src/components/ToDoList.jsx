import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, updateToDo, deleteToDo }) => {
    return (
        <div className="bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 dark:bg-gray-800  transition-all duration-500">
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    updateToDo={updateToDo}
                    deleteToDo={deleteToDo}
                />
            ))}
        </div>
    );
};

export default ToDoList;
