const initState = [
  { id: 1, name: "Learn Assembly", completed: false, priority: "Medium" },
  { id: 2, name: "Study Database", completed: true, priority: "High" },
  {
    id: 3,
    name: "Studying Computer Science",
    completed: false,
    priority: "Low",
  },
  {
    id: 4,
    name: "Try to remember all of the song from Folklore",
    completed: false,
    priority: "High",
  },
  { id: 5, name: "Crying in the room", completed: true, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoListReducer;
