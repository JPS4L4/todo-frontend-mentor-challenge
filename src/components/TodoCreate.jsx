import { useState } from "react";

const ToDoCreate = ({ createToDo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddToDo = (e) => {
        e.preventDefault();

        if (!title.trim().length) {
            return setTitle('');
        }

        createToDo(title)    
        setTitle('');
    };

    return (
        <form
            onSubmit={handleSubmitAddToDo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white mt-8 py-4 px-4 dark:bg-gray-800 transition-all duration-500"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full outline-none text-gray-400 dark:text-gray-300 dark:bg-gray-800 transition-all duration-500"
                type="text"
                placeholder="Create a new To Do..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default ToDoCreate;
