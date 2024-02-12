const ToDoComputed = ({ countLeftToDo, clearCompletedToDo }) => {
    return (
        <section className="py-4 px-4 flex justify-between rounded-b-md bg-white dark:bg-gray-800 transition-all duration-500">
            <span className="text-gray-400">{countLeftToDo} items left</span>
            <button className="text-gray-400" onClick={clearCompletedToDo}>
                Clear Completed
            </button>
        </section>
    );
};

export default ToDoComputed;
