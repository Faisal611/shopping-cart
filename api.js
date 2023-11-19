// Api
function LoadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUser () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => anyData(data))
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then( posts => displayPosts(posts) )
}
function anyData (data) {
    const ul = document.getElementById('UserId')

    for (const user of data) {
        const li= document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`
        ul.appendChild(li)
    }

}

// Post User function
function displayPosts (posts) {
    const postsId = document.getElementById('postsId');

    for (const post of posts){
        const postDiv = document.createElement('div');

        postDiv.innerHTML = `
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                            `;
        postsId.appendChild(postDiv);
    }

}