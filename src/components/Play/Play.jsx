import { getDataLink } from "../../scripts/getDataLink";
import { getInfoProfileUser } from "../../scripts/getInfoUser";
import Header from "../Header/Header";
import "./play.css";
import { useStore } from "../../store/store";
import { useEffect } from "react";
import MainPlay from "../MainPlay/MainPlay";


function Play() {
  

  const { accessToken } = getDataLink();
  const {changeUserData} = useStore();

  useEffect(() => {
    getInfoProfileUser(accessToken).then((e) => {
      changeUserData(e)
    });
  }, [])


  return (
    <>
      <Header />
      <MainPlay/>
    </>
  );
}

export default Play;
