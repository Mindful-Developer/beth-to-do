import { Elysia } from 'elysia';
import Base from "../components/Base";
import Header from "../components/Header";
import TodoList from "../components/Todo-List";
import { todos } from '../data';
import AddTodoForm from "../components/Add-Todo-Form";


const pageRouter = new Elysia()
    .get('/', () =>
            <Base>
                <Header />
                <TodoList todos={todos} />
                <AddTodoForm />
            </Base>
    );


export default pageRouter;