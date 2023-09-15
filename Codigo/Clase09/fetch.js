const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const span = document.querySelector('#span');

const apiUrl = 'https://jsonplaceholder.typicode.com'

const getNameFetch = (idPost) => {
    fetch(`${apiUrl}/posts/${idPost}`)
    .then((res) => {
        return res.json()
    })
    .then((post) => {
        fetch(`${apiUrl}/users/${post.userId}`)
        .then((res) => {
            return res.json()
        })
        .then((user) => {
            console.log(user);
            span.innerText = `
                id: ${user.id}
                name: ${user.name}
                username: ${user.username}
                email: ${user.email}
                address: ${user.address.street}
                phone: ${user.phone}
            `;
        })
        return user.name
    })
}

btn.addEventListener('click', () => {
    getNameFetch(Number(input.value))  
})