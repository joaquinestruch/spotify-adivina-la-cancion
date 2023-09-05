export async function getDataTrack(accessToken, id){

    const apiUrl = `https://api.spotify.com/v1/tracks/${id}`;

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