const divContainer = document.querySelector('.container');

const getNamefetch = (idPost) => {
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then((res) => {                
                return res.json();
            })
            .then((post) => {
                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then((res) => {                        
                        return res.json();
                    })
                    .then((user) => {
                        divContainer.innerHTML = `<p>Nombre Completo: ${user.name} <p>Escribio el post: ${idPost}</p> <p>Vive en: ${user.address.city}</p>`;
                    });
            });
    } catch (error) {
        console.log(error);
    };
};

getNamefetch(48);