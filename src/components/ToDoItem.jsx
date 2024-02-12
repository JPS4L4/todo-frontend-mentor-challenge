import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const ToDoItem = ({ todo, updateToDo,deleteToDo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b-gray-400 border-b">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"}`}
                onClick={() => updateToDo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow ${completed && "line-through"} dark:text-gray-300 transition-all duration-500`}>
                {title}
            </p>
            <button onClick={() => deleteToDo(id)} className="flex-none">
                <IconCross />
            </button>
        </article>
    );
};

export default ToDoItem;
