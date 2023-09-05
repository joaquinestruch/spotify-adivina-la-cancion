
import { useStore } from "../../store/store"
import InGame from "../InGame/InGame"
import SelectArtist from "../SelectArtist/SelectArtist"
import "./main.css"

function MainPlay() {

    const {artistSelected, loadingData} = useStore()


    return (
    <main className="main-play">
        {   
            loadingData ? <div style={{textAlign: "center"}}>Cargando... <br /> Puede tardar unos segundos.</div> : 

            artistSelected ? 
            <InGame/> : 
            <SelectArtist/>
        }
    </main>
  )
}

export default MainPlay