const url = "http://localhost:3000/createTodo";
async function postTodo(todo: string) {
    const data = { todo };
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
            return responseData;
        } else {
            console.error('Response error:', response.statusText);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
}

export { postTodo };