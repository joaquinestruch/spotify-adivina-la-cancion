
import { useStore } from "../../store/store"
import "./finishgame.css"

function FinishGame({trackNames, score}) {

  const {userData, dataArtist} = useStore(); 

  console.log(trackNames)

  return (
    <div className="alert-finishgame">
        
        
        <section className="user-finish-game">
          <h1>¡TERMINO EL JUEGO!</h1>
        </section>

        <section className="images-finish-game">
          <div>
          <img src={dataArtist?.images[1]?.url} alt="" />
          <span>{dataArtist?.name}</span>
          </div>
          
          <div>
          <img src={userData?.images[1]?.url} alt="" />
          <span>{userData?.display_name}</span>
          </div>
        </section>

        <section className="score-finish">
          <h2 className="score-final">
            {score}/{trackNames?.length}
          </h2>
          <p>
          {userData?.display_name} adivino {score} {score === 1 ? "tema": "temas"} entre los {trackNames.length} de {dataArtist?.name}.
          </p>
        </section>

        <section className="btn-section-share">
        <button className="btn-reset" onClick={() => location.reload()}>Jugar de nuevo</button>
        <button className="btn-share">Compartir</button>
        </section>

    </div>
    )
}

export default FinishGame