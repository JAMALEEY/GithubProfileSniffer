const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const search = document.getElementById('search')


async function getUser(username) {
    try {
        const {data} = await axios.get(APIURL + username)
        creatUserCard(data);   
    } catch(err) {
        console.log(err)
    }
    
        
}


function creatUserCard(user) {
    const cardHTML = `
                <div class="card">
            <div class="picuser">
                <img src="${user.avatar_url}" alt="${user.name}" class="">
            </div>
            <div class="userInfo">
                <h2>
                    ${user.name}
                </h2>
                    ${user.bio}
                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                    <li>${user.stargazers_count}<strong>Stars</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;

}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if(user) {
        getUser(user)
        search.value = '';
    }
})
