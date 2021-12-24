import { useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"

import Dallas from "../public/images/dallas.webp"
import Austin from "../public/images/austin.webp"
import Beijing from "../public/images/beijing.webp"
import NewYork from "../public/images/newyork.webp"
import SanFrancisco from "../public/images/sanfrancisco.webp"

const cities = [
    {
        name: "Dallas",
        image: Dallas
    },
    {
        name: "Austin",
        image: Austin
    },
    {
        name: "Beijing",
        image: Beijing
    },
    {
        name: "New York",
        image: NewYork
    },
    {
        name: "San Francisco",
        image: SanFrancisco
    },
]

export const Hamburger = ({state}) => {

    useEffect(() => {
        if(state.clicked === false){
            //close Menu
            gsap.to([".menu-layer"," .menu-secondary-background-color"],{
                duration:.8,
                height:0,
                ease: "power3.inOut",
                stagger:{
                    amount:.07
                }
            })
            gsap.to(".hamburger-menu",{
                duration:1,
                css: {display: "none"}
            })

        }else if(state.clicked === true || state.clicked === true && state.initial === null){
            // open Menu
            
            gsap.to(".hamburger-menu",{
                duration:0,
                css: {display: "block"}
            })

            gsap.to([" .menu-secondary-background-color",".menu-layer"],{
                duration:0,
                opacity: 1,
                height:"100%",
            });

            gsap.from([".menu-secondary-background-color",".menu-layer"],{
            duration:.8,
            height:0,
            transformOrigin:"right top",
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount:.07
            }
            })
            fadeInUp(".info")
            staggerText(".line1",".line2",".line3")

        }
    },[state])

    const fadeInUp = (class1) => {
            gsap.from(class1,{
                y: 60,
                duration: 1,
                delay: .2,
                opacity:0,
                ease: "power3.inOut"
        })
    }
    const staggerText = (class1, class2, class3) => {
            gsap.from([class1, class2, class3],{
                y: 100,
                duration: 1,
                delay: .1,
                opacity:0,
                ease: "power3.inOut",
                stagger: {
                    amount: .3
                }
        })
    }

    const handleCityIn = city => {
        console.log(city)
        gsap.to(".menu-city-background",{
            duration: .1,
            background: `url(${city}) center center`
        })

        gsap.to(".menu-city-background",{
            duration: .4,
            opacity: 1,
            ease: "power3.inOut"
        })

        gsap.from(".menu-city-background",{
            duration: .4,
            skewY: 2,
            transformOrigin: "right top",
            ease: "power3.inOut"
        })
    }

    const handleCityOut = () => {
        gsap.to(".menu-city-background",{
            duration: .4,
            opacity: 0,
        })
    }

    const handleHover = e => {
        gsap.to(e.target, {
            duration: .3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut"
        })
    }

    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: .3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        })
    }


    return (
        <div className="hamburger-menu">
            <div className="menu-secondary-background-color"></div>
            <div className="menu-layer">
                <div className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li className="line1" onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)}><Link href={'/opportunities'}>Opportunities</Link></li>
                                    <li className="line2" onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)}><Link  href={'/solutions'}>Solutions</Link></li>
                                    <li className="line3" onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)}><Link  href={'/contact-us'}>Contact us</Link></li>
                                </ul>
                            </nav>
                            <div className="info">
                                <h3>Our Promise</h3>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                            </div>
                            <div className="locations">
                                Locations:
                                {cities.map((location, index) => (
                                    <span key={index} onMouseEnter={() => handleCityIn(location.image.src)} onMouseOut={() => handleCityOut()}>{location.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
