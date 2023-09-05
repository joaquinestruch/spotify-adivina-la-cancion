import { getAllTracks } from "../scripts/getAllTracksForArtist";
import { getDataArtist } from "../scripts/getArtist";
import { useStore } from "../store/store";


function ArtistTop({accessToken, id, name, index, images}) {

  const {changeArtistSelected, changeAllTracks, changeDataArtist, changeLoadingData} = useStore();

  return (
    <article
    className="artist-top"
    key={id}
    onClick={() => {
      changeLoadingData(true)
      getAllTracks(accessToken, id).then((e) => {
        let hash = {};
      
        let arrayNoRepeats = e.filter((track) => {
          let normalizedTrackName = track.name.toLowerCase().trim();
          let exist = !hash[normalizedTrackName];
          hash[normalizedTrackName] = true;
          return exist;
        });
      
        changeAllTracks(arrayNoRepeats);
      
        getDataArtist(accessToken, id).then((e) => {
          changeDataArtist(e);
        });
      }).then(() => {
        changeLoadingData(false);
        changeArtistSelected(true);
      });


    }}
  >
    <img src={images?.length > 0 ? images[2]?.url : ""} alt={`Foto de perfil en Spotify de ${name}`} />
    <p>
      {index + 1}. {name}
    </p>
  </article>
  )
}

export default ArtistTop