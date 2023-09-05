import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { BsSpotify } from "react-icons/bs";
import { getDataTrack } from "../../scripts/getDataTrack";
import { getDataLink } from "../../scripts/getDataLink";


import ReactAudioPlayer from 'react-audio-player';

import "./ingame.css"
import FinishGame from "../FinishGame/FinishGame";

function InGame() {
  const { accessToken } = getDataLink();
  const { dataArtist, allTracks, changeAllTracks } = useStore();

  const [start, setStart] = useState(false);

  const [selectedTrack, setSelectedTrack] = useState(null);
  const [imageSelectedTrack, setImageSelectedTrack] = useState(null);

  

  const [trackNames, setTrackNames] = useState([]);
  const [randomTracks, setRandomTracks] = useState([]);
  const [score, setScore] = useState(0);

  const [isClickedOption, setIsClickedOption] = useState(false); 

  const [finishGame, setFinishGame] = useState(false);

  const extractTrackNames = () => {
    const names = allTracks.map((track) => track?.name);
    setTrackNames(names)
  };


  const selectAndRandomizeTrack = () => {
    if (allTracks.length === 0) {
      setFinishGame(true);
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * allTracks.length);
    const randomTrack = allTracks[randomIndex];
  
    setSelectedTrack(randomTrack);
  
    const filteredTracks = trackNames.filter((track) => track !== randomTrack?.name);

    const randomizedTracks = [...filteredTracks.sort(() => 0.5 - Math.random()).slice(0, 2), randomTrack?.name];
    
    setRandomTracks([...randomizedTracks.sort(() => 0.5 - Math.random())]);
  
    getDataTrack(accessToken, randomTrack?.id).then((trackData) => {
      const imageUrl = trackData.album.images[0]?.url;
      if (imageUrl) {
        setImageSelectedTrack(imageUrl);
      }
    });
  };
  
  const handleOptionClick = async (clickedTrackName) => {

    setIsClickedOption(true)

    if (clickedTrackName === selectedTrack?.name) {
      setScore(score + 1);
    }

    const indiceAEliminar = allTracks.indexOf(selectedTrack);

    if (indiceAEliminar !== -1) {
      allTracks.splice(indiceAEliminar, 1);
      changeAllTracks(allTracks);
    }

    setTimeout(() => {
      getDataTrack(accessToken, selectedTrack?.id).then((e) => {
        setImageSelectedTrack(e.album.images[0]?.url);
        setIsClickedOption(false)
      });
      selectAndRandomizeTrack();      
    }, 2000);
    
  };

  useEffect(() => {
    extractTrackNames()
  }, []);

  return (
    <article className="container-play">
      {
        finishGame ? <FinishGame trackNames={trackNames} score={score}/> : ""
      }
      <h1>¿Cuántas canciones te sabes?</h1>
      <section className="in-game">
        <article className="card-track">
          {!start ? (
            <button
              className="btn-comenzar"
              onClick={() => {
                setStart(true);
                selectAndRandomizeTrack();  
              }}

              disabled={allTracks.length === 0 ? true : false}

            >
              ¡Comenzar a jugar!
            </button>
          ) : (
            <div className="game-container">
              {selectedTrack && (
                <div className="loading-image">
                  <img
                    src={imageSelectedTrack ? imageSelectedTrack : ""}
                    className={`image-selected ${isClickedOption ? "clicked" : ""}`}
                    alt=""
                    
                  />
                </div>
              )}

              <ReactAudioPlayer autoPlay controls src={selectedTrack?.preview_url}></ReactAudioPlayer>

              <nav className="selected-button-options">
                {randomTracks.map((trackName, index) => (
                  <button
                    key={index}
                    className={`btn-option ${trackName == selectedTrack?.name && isClickedOption ? "correct-option" : isClickedOption && trackName != selectedTrack?.name ? "losee-option" : "" }`}
                    onClick={() => {
                      handleOptionClick(trackName)
                    }}
                    disabled={allTracks.length === 0 ? true : false}
                  >
                    {trackName}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </article>

        <article className="artist-info">
          <img src={dataArtist.images?.[0].url} alt="" />
          <div className="name-artist">
            <h2>{dataArtist?.name}</h2>
            <a
              href={`https://open.spotify.com/artist/${dataArtist.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify />
            </a>
            
              <div className="score-artist2 score-mobile">
              <p>Canciones restantes: {allTracks.length}</p>
              <p>Puntaje: {score}</p>
            </div>

          </div>
          <div className="score-artist">
            <p>Canciones restantes: {allTracks.length}</p>
            <p>Puntaje: {score}</p>
          </div>

        </article>
      </section>
    </article>
  );
}

export default InGame;
