export function getAllTracks(accessToken, idArtist) {
    return new Promise(async (resolve, reject) => {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      try {
        const albumsUrl = `https://api.spotify.com/v1/artists/${idArtist}/albums?include_groups=album%2Csingle&limit=50`;
        const albumsResponse = await fetch(albumsUrl, {
          method: 'GET',
          headers: headers,
        });
  
        const albumsData = await albumsResponse.json();
        const albumIds = albumsData.items.map((album) => album.id);
  
        const allTracks = [];
  
        for (const albumId of albumIds) {
          const tracksUrl = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
          const tracksResponse = await fetch(tracksUrl, {
            method: 'GET',
            headers: headers,
          });
  
          const tracksData = await tracksResponse.json();
          const albumTracks = tracksData.items;
  
          allTracks.push(...albumTracks);
        }
  
        resolve(allTracks);
      } catch (error) {
        reject(error);
      }
    });
  }
  