"use client"
import { AnimatedUpScroll } from "../components/animations/animatedUpScroll"
import { CardSlider } from "../components/cardSlider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['400', '400'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap'
});

export default function Products() {

    return (
        <div>
            <section>
                <div className="2xl:mt-44 xl:mt-20 sm:mt-4 lg:mt-1 md:mt-5 gap-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1">
                    <AnimatedUpScroll duration={0.7}>
                        <span className={`${montserrat.className} antialiased  text-white 
    [text-shadow:_0.7px_0.7px_0_black,_-0.5px_-0.5px_0_black,_0.7px_-0.5px_0_black,_-0.5px_0.7px_0_black] text-5xl`}>Nuestos Productos</span>
                    </AnimatedUpScroll>
                    <AnimatedUpScroll duration={0.8}>
                        <CardSlider />
                    </AnimatedUpScroll>
                </div>

            </section>
        </div>
    )
}