export async function searchArtist(accessToken, artist){

    const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=artist`;

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