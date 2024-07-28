const AddTodoForm = () => `
  <form
    hx-post="/api/todos"
    hx-target="#todo-list"
    hx-swap="beforeend"
    class="mt-4"
  >
    <input
      type="text"
      name="text"
      placeholder="Add a new todo"
      class="py-3 px-4 border rounded-l-lg w-2/3 text-blue-950"
      required
    />
    <button
      type="submit"
      class="bg-blue-500 text-white py-3.5 px-4 rounded-r-lg hover:bg-blue-600"
    >
      Add
    </button>
  </form>
`;

export default AddTodoForm;