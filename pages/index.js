import Head from 'next/head'
import gsap from "gsap"
import {useEffect} from "react"

export default function Home() {

  useEffect(() => {
    gsap.to(".container", {duration: 0, css: {display: "block"}})
    gsap.from(".content-inner-move", {y:100,duration:1, delay: .4, stagger: 0.3, ease: "power3.out"})
  },[])

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <h5 >
              <div className="content-inner">
                <div className="content-inner-move">
                    The RAMLY is a creative, delicious hamburger provider in all
                </div>
              </div>
              <div className="content-inner">
                <div className="content-inner-move">
                    around the world.
                </div>
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}