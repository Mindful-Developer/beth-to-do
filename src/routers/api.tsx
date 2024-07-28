import { Elysia } from 'elysia';
import TodoItem from '../components/Todo-Item';
import AddTodoForm from '../components/Add-Todo-Form';
import TodoList from "../components/Todo-List";
import { todos } from '../data';


const apiRouter = new Elysia()
    .group('/api', (api) =>
        api
            .post('/todos', ({ body }: any) => {
                const newTodo = {
                    id: todos.length + 1,
                    text: body.text,
                    completed: false,
                };
                todos.push(newTodo);
                return <TodoItem todo={newTodo} />;
            })
            .put('/todos/:id/toggle', ({ params }) => {
                const todo = todos.find((t) => t.id === parseInt(params.id));
                if (todo) {
                    todo.completed = !todo.completed;
                    return <TodoItem todo={todo} />;
                }
            })
            .delete('/todos/:id', ({ params }) => {
                const index = todos.findIndex((t) => t.id === parseInt(params.id));
                if (index !== -1) {
                    todos.splice(index, 1);
                }
                return '';
            })
            .delete('/todos', () => {  // clear completed todos
                for (let i = todos.length - 1; i >= 0; i--) {
                    if (todos[i].completed) {
                        todos.splice(i, 1);
                    }
                }
                return <TodoList todos={todos} />;
            })
            .get('/todos', () => <TodoList todos={todos} />)
            .get('/add-todo-form', () => <AddTodoForm />)
    )


export default apiRouter;