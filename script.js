const APIURL = 'https://api.github.com/users/'

getUser('JAMALEEY')

async function getUser(username) {
    try {
        const {data} = await axios.get(APIURL + username)
        console.log(data)
    } catch(err) {
        console.log(err)
    }
    
        
}
