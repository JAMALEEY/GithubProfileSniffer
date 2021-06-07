// URL APP
const APIURL = 'https://api.github.com/users/'
// FETCHING ELEMENTS FROM HTML
const main = document.getElementById('main')
const search = document.getElementById('search')



// const clientId = "1a6715b708e45f292e9f";
// const clientSecrets = "81666fbc64d03ee3a844a2a0c2dbaadfa4030620";


async function getUser(username) {
    try {
        const {data} = await axios.get(APIURL + username)
        creatUserCard(data);   
        getRepos(username);

    } catch(err) {
            if(err.response.status !== 200) {
                creatErrorCard('Oops ...The Username you entered doesn\'t appear to belong to an account please check your username and Try again ');
            }
    }
}


function creatUserCard(user) {
    const cardHTML = `  <div class="title">  <h1> <img class="gif" src="https://telegra.ph/file/11b74c48b7609507bb830.gif"> Hip Hip ... Hurray We Found Him 🎉 :</h1>  </div>
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
                    <li>${user.public_gists}<strong>Stars</strong></li>
                </ul>
                    
                <div id="repos">

                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;

}

async function getRepos (username) {
    try {
        const { data } = await axios (APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch(err){
        createErrorCard('Opps... we\'ve encountred problems fetching data')
    }
    }












function createErrorCard(msg) {
    const cardHTML = `
                <div class="card">
                <h1>
                    ${msg}
                </h1>
    `
    main.innerHTML = cardHTML;
}







function addReposToCard(repos){
    const reposEl = document.getElementById('repos')
    // slicing my object for only the last 10 values and looping through foreach
    repos.slice(0,11).forEach(repo => {
        // creat an element on dom which is a link (a)
        const repoEl = document.createElement('a')
        // transform repoEl to a list of repo and with foreach is list of repos ....
        repoEl.classList.add('repo') 
        // transform repoEl to a link
        repoEl.href = repo.html_url
        // not in the same page
        repoEl.target = '_blank'
        // displaying on the text of those links the name of repos
        repoEl.innerText = repo.name
        // pushing this repo el to the HTML as a child of the reposEl
        reposEl.appendChild(repoEl)
    } )
}




form.addEventListener(  'input', (e) => filterData(e.target.value)  &&  
                        'submit', (e) => {
    e.preventDefault()
    const user = search.value   
    if(user) {
        getUser(user)
        search.value = '';
    }
})



async function filterData(search) {
       try {
        const {data} = await axios.get(APIURL + search)
        creatUserCard(data);   
        getRepos(search);

    } catch(err) {
            if(err.response.status !== 200) {
                creatErrorCard('Oops ...The Username you entered doesn\'t appear to belong to an account please check your username and Try again ');
            }
    }
}