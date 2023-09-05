export function getDataLink(){
    
    const urlWithFragment = window.location.href;
    const urlParams = new URLSearchParams(urlWithFragment.split("#")[1]);

    const accessToken = urlParams.get("access_token");
    const tokenType = urlParams.get("token_type");
    const expiresIn = urlParams.get("expires_in");
    const state = urlParams.get("state");

    return{
        accessToken,
        tokenType,
        expiresIn,
        state
    }

}


