const divContainer = document.querySelector('.container');

const getNameAsync = async (idPost) => {
    try {
        let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        let post = await resPost.json();
        let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let user = await resUser.json();
        divContainer.innerHTML = `<p>Nombre Completo: ${user.name}</p> <p>Vive en: ${user.address.city}</p> <p>Escribio el post ${idPost}: ${post.title}</p>`;        
    } catch (error) {
        console.log(error);
    };
};

getNameAsync(80)