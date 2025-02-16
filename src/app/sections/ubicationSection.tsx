"use client"
import { AnimatedUpScroll } from "../components/animations/animatedUpScroll"
import { CardSlider } from "../components/cardSlider";
import { League_Spartan } from "next/font/google";

const montserrat = League_Spartan({
    weight: ['400', '400'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap'
});

export default function HistorySection() {

    return (
        <section>
            <div className={`${montserrat.className} 2xl:mt-40 xl:mt-5 sm:mt-4 lg:mt-1 md:mt-5 gap-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1`}>
                <AnimatedUpScroll duration={1.2}>
                    <span
                        className={`
                         antialiased  2xl:ml-5 xl:ml-5 text-5xl  antialiased  text-[#4b3933]`}
                    >Ubicación
                    </span>
                </AnimatedUpScroll>

                <AnimatedUpScroll duration={1.2}>
                    <div>
                        <CardSlider />
                    </div>
                </AnimatedUpScroll>
            </div>

        </section>

    )
}