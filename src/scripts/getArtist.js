export async function getDataArtist(accessToken, id){

    const apiUrl = `https://api.spotify.com/v1/artists/${id}`;

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