import TodoType from "./types";

const url = "http://localhost:3000/todos";

async function getTodos() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const responseData:TodoType[] = await response.json();
            return responseData.reverse();
        } else {
            console.error('Response error:', response.statusText);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
}

async function postTodo(todoData: string) {
    const data = { todoData };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const responseData = await response.json();
            return responseData.todo;
        } else {
            console.error('Response error:', response.statusText);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
}

export { getTodos, postTodo };