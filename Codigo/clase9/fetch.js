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
            console.log(user.name);
        })
    })
}

getNameFetch(48)