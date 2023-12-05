// Api

// User id and api
    function loadUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => displayUsers(data))
    }
    function displayUsers(data) {
        const userId = document.getElementById('userId');
        for (const user of data) {
            const li= document.createElement('li');
            li.innerText = `
                Name: ${user.name} 
                Email: ${user.email}
            `
            userId.appendChild(li)
        }
    }

// Post User function
    function loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then( posts => displayPosts(posts) )
    }
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