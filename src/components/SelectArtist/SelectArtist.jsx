import { useState, useEffect, } from "react";
import { getDataLink } from "../../scripts/getDataLink";
import { topArtistData } from "../../scripts/getTopArtist";
import "./selectartist.css";
import { searchArtist } from "../../scripts/getSearchArtist";

import ArtistTop from "../ArtistTop";
import Skeletons from "../skeletons";


function SelectArtist() {
  

  const { accessToken } = getDataLink();

  const [topArtist, setTopArtist] = useState([]);
  const [searchArtists, setSearchArtist] = useState([]);

  useEffect(() => {
    topArtistData(accessToken).then((e) => {
      setTopArtist(e.items.slice(0, 5));
    });
  }, []);
  
  return (
    <section className="select-artist">
      <h2>Tus artistas más escuchados</h2>
      <div className="top-artist">
        {
        
        topArtist.length > 0 ?

        topArtist?.map((e, index) => {
          const { id, images, name } = e;

          return (
            <ArtistTop  key={id} id={id} images={images} name={name} index={index} accessToken={accessToken} />
          );
        })
        
        :  <Skeletons/>
            
        }
      </div>

      <div className="search-artist">
        <h3>Buscar artista</h3>
        <input
          type="text"
          onChange={(e) => {
            searchArtist(accessToken, e.target.value).then((e) => {
              setSearchArtist(e.artists.items.slice(0, 5));
            });

            if (e.target.value.length === 0) {
              setSearchArtist([]);
            }
          }}
          placeholder="Pablito Lescano"
        />
      </div>

      <div className="top-artist search">
        {searchArtists.length > 0
          ? searchArtists.map((e, index) => {
              const { id, images, name } = e;

              return (
                <ArtistTop key={id} id={id} images={images} name={name} index={index} accessToken={accessToken} />
              );
            })
          : ""}
      </div>
    </section>
  );

  
}

export default SelectArtist;
