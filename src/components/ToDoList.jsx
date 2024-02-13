import ToDoItem from "./ToDoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const ToDoList = ({ todos, updateToDo, deleteToDo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 dark:bg-gray-800  transition-all duration-500"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <ToDoItem
                                    todo={todo}
                                    updateToDo={updateToDo}
                                    deleteToDo={deleteToDo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default ToDoList;
