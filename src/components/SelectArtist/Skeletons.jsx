import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonsReact() {

  return (
    <>
    <article className="artist-top">
        <Skeleton height={"130px"} width={"130px"} circle={true} baseColor="#42424a" highlightColor="#686875"/>
        <br />
        <Skeleton height={"12px"} width={"130px"} baseColor="#42424a" highlightColor="#686875"/>
    </article>

    <article className="artist-top">
        <Skeleton height={"130px"} width={"130px"} circle={true} baseColor="#42424a" highlightColor="#686875"/>
        <br />
        <Skeleton height={"12px"} width={"130px"} baseColor="#42424a" highlightColor="#686875"/>
    </article>

    <article className="artist-top">
        <Skeleton height={"130px"} width={"130px"} circle={true} baseColor="#42424a" highlightColor="#686875"/>
        <br />
        <Skeleton height={"12px"} width={"130px"} baseColor="#42424a" highlightColor="#686875"/>
    </article>

    <article className="artist-top">
        <Skeleton height={"130px"} width={"130px"} circle={true} baseColor="#42424a" highlightColor="#686875"/>
        <br />
        <Skeleton height={"12px"} width={"130px"} baseColor="#42424a" highlightColor="#686875"/>
    </article>

    <article className="artist-top">
        <Skeleton height={"130px"} width={"130px"} circle={true} baseColor="#42424a" highlightColor="#686875"/>
        <br />
        <Skeleton height={"12px"} width={"130px"} baseColor="#42424a" highlightColor="#686875"/>
    </article>
    </>
  );
}

