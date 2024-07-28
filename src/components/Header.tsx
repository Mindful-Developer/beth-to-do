export default function Header() {
    return (
        <header class='mb-5'>
            <h1>Todos For Yous</h1>
            <p>A place to get things done.</p>
            <button
                hx-delete="/api/todos"
                hx-target="#todo-list"
                hx-swap="outerHTML"
                class="bg-red-500 text-white mt-4 py-3 px-4 rounded-lg hover:bg-red-600"
            >
                Clear All Completed
            </button>
        </header>
    );
}