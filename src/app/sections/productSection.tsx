"use client"
import { AnimatedUp } from "../components/animations/animatedUp"
import { AnimatedUpScroll } from "../components/animations/animatedUpScroll"
import { CardSlider } from "../components/cardSlider";
import { AnimationTextDown } from "../components/animations/animationTextDown"
import { Playwrite_TZ } from "next/font/google";

const satisfy = Playwrite_TZ({
    weight: ['400', '400'],
    variable: '--font-poppins',
    display: 'swap'
});

export default function Products() {

    return (
        <div>
            <section>
                <div className="2xl:mt-44 xl:mt-20 sm:mt-4 lg:mt-1 md:mt-5 gap-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1">
                    <AnimatedUpScroll duration={0.7}>
                        <span className={`${satisfy.className} antialiased text-white text-3xl`}>NUESTROS PRODUCTOS</span>
                    </AnimatedUpScroll>
                    <AnimatedUpScroll duration={0.7}>
                        <CardSlider />
                    </AnimatedUpScroll>
                </div>

            </section>
        </div>
    )
}