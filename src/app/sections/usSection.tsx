
"use client"
import Image from "next/image"
import { League_Spartan } from "next/font/google";
import { AnimatedUpScroll } from "../components/animations/animatedUpScroll"

const montserrat = League_Spartan({
    weight: ['400', '400'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap'
});

export default function Us() {
    return (
        <section className={`${montserrat.className} 2xl:mt-44 xl:mt-20 sm:mt-4 mx-auto max-w-screen-xl`}>
            <h2 className="2xl:ml-5 xl:ml-5 text-4xl  antialiased  text-[#4b3933]">
                <strong>NOSOTROS</strong></h2>
            <AnimatedUpScroll duration={0.8}>
                <div className="2xl:mt-10 xl:mt-5 sm:mt-5 grid grid-cols-2 gap-0">
                    <div className="h-full overflow-hidden">
                        <div className=" flex flex-col-reverse relative bg-cover h-full">
                            <span className="absolute ml-10 text-2xl text-white"><strong>FINCA EL <br /> MILAGRO</strong></span>
                            <img
                                src="./images/us/fincaElMilagro.webp"
                                className="object-cover"
                                alt="Louvre" />
                        </div>
                    </div>
                    <div className="h-full overflow-hidden">
                        <div className="flex flex-row-reverse relative bg-cover h-full">
                            <span className="absolute mr-10 text-2xl text-white"><strong>CASA <br /> LINNEO</strong></span>
                            <img
                                src="./images/us/casaLinneo.webp"
                                className="object-cover"
                                alt="Louvre" />
                        </div>
                    </div>
                </div>
            </AnimatedUpScroll>
        </section>

    )
}