const GRAPHQL_URL = 'http://localhost:9000/'
async function fetchGreetings() {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `,
        }),
    });

    const { data } = await response.json();
    return data;
}

const element = document.getElementById('greeting');
element.textContent = 'Loading...';
fetchGreetings().then(({greeting}) => {
    element.textContent = greeting; 
});
