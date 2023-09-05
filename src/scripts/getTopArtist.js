export async function topArtistData(accessToken){

    const apiUrl = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term';

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