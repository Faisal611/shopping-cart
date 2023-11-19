// Api
const buddiesApi = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data =>displayBuddies(data))
}
buddiesApi();
const displayBuddies = (data) => {

    const buddies =  data.results;
    const buddieId = document.getElementById('buddiesId');

    for (const buddie of buddies){

        const p = document.createElement('p');
        p.innerText = buddie.email;
        buddieId.appendChild(p)

    }

}