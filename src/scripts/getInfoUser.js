export async function getInfoProfileUser(accessToken){

    const apiUrl = 'https://api.spotify.com/v1/me';

    const headers = {
        Authorization: `Bearer ${accessToken}`
    }



    const res = await fetch(apiUrl, {
        method: 'GET',
        headers: headers
      })
    const data = await res.json()
    return data; 

}