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

export default function Products() {

    return (
            <section>
                <div className={`${montserrat.className} 2xl:mt-36 xl:mt-20 sm:mt-4 lg:mt-10 md:mt-5 gap-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1`}>
                    <AnimatedUpScroll duration={0.8}>
                        <span
                            className={`
                         antialiased  text-[#c5a880] [text-shadow:_0.2px_0.2px_0_black,_-0.2px_-0.2px_0_black,_0.2px_-0.2px_0_black,_-0.2px_0.2px_0_black] text-5xl`}
                        >Nuestos Productos
                        </span>
                    </AnimatedUpScroll>
                    <AnimatedUpScroll duration={0.8}>
                        <CardSlider />
                    </AnimatedUpScroll>
                </div>

            </section>
     
    )
}