import TodoItem from './Todo-Item';
import AddTodoForm from './Add-Todo-Form';

const TodoList = ({ todos = [] }: { todos?: Array<{ id: number; text: string; completed: boolean }> }) => `
  <div id="todo-list">
    ${todos.map((todo) => TodoItem({ todo })).join('')}
  </div>
`;

export default TodoList;