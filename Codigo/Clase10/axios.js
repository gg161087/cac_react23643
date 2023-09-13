const divContainer = document.querySelector('.container');

const getNameAxios = async (idPost) => {
    try {
        let resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`);  
        let resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        divContainer.innerHTML = `<p>Nombre completo: ${resUser.data.name} <p>Escribio el post: ${resPost.data.title}</p> <p>Vive en: ${resUser.data.address.city}</p>`;
    } catch (error) {
        console.log(error);
    };
};

getNameAxios(8)