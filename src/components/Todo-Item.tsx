const TodoItem = ({ todo }: { todo: { id: number; text: string; completed: boolean } }) => `
  <div 
  hx-put="/api/todos/${todo.id}/toggle"
  hx-target="#todo-${todo.id}"
  hx-swap="outerHTML"
  class="flex items-center justify-between bg-white ps-4 shadow-md rounded-lg mb-2 text-blue-950" 
  id="todo-${todo.id}"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        ${todo.completed ? 'checked' : ''}
        class="mr-2"
      />
      <span class="${todo.completed ? 'line-through text-gray-400' : ''}">${todo.text}</span>
    </div>
    <button
      hx-delete="/api/todos/${todo.id}"
      hx-target="#todo-${todo.id}"
      hx-swap="outerHTML"
      class="text-red-500 hover:text-red-700 p-4 border-l-2 border-red-500 bg-red-100 hover:bg-red-200 rounded-e-lg"
    >
      Delete
    </button>
  </div>
`;

export default TodoItem;