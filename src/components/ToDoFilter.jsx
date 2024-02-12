const ToDoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto px-4 mt-8">
            <div className="bg-white p-4 rounded-md flex gap-4 justify-center  dark:bg-gray-800 transition-all duration-500">
                <button
                    className={`${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-500"}`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${filter === "active" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-500"}`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${filter === "completed" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-500"}`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default ToDoFilter;
