import { BsSpotify } from 'react-icons/bs';
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID

const scopes = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-read-playback-state'
];

const spotifyLinkApi = `

https://accounts.spotify.com/authorize
?client_id=${clientId}
&response_type=token
&redirect_uri=https://bef5-190-30-137-75.ngrok-free.app/play
&scope=${scopes.join("%20")}
&state=${crypto.randomUUID()}
`

function BtnLogin({text}) {

  return (
    <a className="btn-login" href={spotifyLinkApi} > <BsSpotify/> {text}</a>
  )
}

export default BtnLogin