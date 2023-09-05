import { useStore } from "../../store/store"

import "./header.css"

function Header() {


  const {userData} = useStore();

  const {display_name, images} = userData; 


  return (
    <header className="header-play">
        <img onClick={() => {
          location.reload();
        }} src="https://i.ibb.co/PDBGvL9/image.png" className="logo-header" alt="Logo" />
        <div className="user-profile-header">
            <img src={images?.length > 0 ? images[0]?.url : ""} alt={`Foto de perfil de ${display_name}`} />
            <p>{display_name}</p>
        </div>
    </header>
  )
}

export default Header