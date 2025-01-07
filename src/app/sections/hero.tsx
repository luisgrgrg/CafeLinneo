import {AnimatedTitle} from "../components/animatedTittle"
import {AnimatedParagraph1} from "../components/animatedParagraph1"
import {AnimatedParagraph2} from "../components/animatedParagraph2"
import {AnimatedParagraph3} from "../components/animdatedParagraph3"
import {AnimatedImage } from  "../components/animatedImageHero"

export default function Hero() {
    return (
        <div>
            <section>
                <div className="mt-7 2xl:mt-28 xl:mt-1 sm:mt-5 lg:mt-1 md:mt-5 gap-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                    <div className="sm:mt-5 lg:mt-20 md:mt-5 font-light text-gray-500 sm:text-lg dark:text-gray-400 items-center text-center">
                        <AnimatedTitle />
                        <AnimatedParagraph1 />
                        <AnimatedParagraph2 />
                        <AnimatedParagraph3 />
                    </div>
                    <AnimatedImage />
                </div>
            </section>
        </div>
    )
}

