"use client"
import { AnimationTextDown } from "../components/animations/animationTextDown"
import { AnimatedUp } from "../components/animations/animatedUp"
import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <section>
                <div className="mt-7 2xl:mt-36 xl:mt-0 sm:mt-5 lg:mt-1 md:mt-5 gap-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                    <div className="xl:mt-10 sm:mt-5 lg:mt-20 md:mt-5 font-light text-gray-500 sm:text-lg dark:text-gray-400 items-center text-center">
                        <AnimationTextDown duration={0.5} delay={0.3}>
                            <Image priority={true} className="items-center w-1/6" src="/images/section-home-img-h1-name-product.webp" alt="Product Image"
                                sizes="100vw" style={{ width: '80%', height: 'auto' }} width={400} height={200} />
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.8} delay={0.1}>
                            <p className="mb-4 text-xl text-stone-500">
                                El <strong className="text-orange-950">MEJOR</strong> momento del día comienza con un <strong className="text-orange-950">BUEN CAFÉ</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.85} delay={0.1}>
                            <p className="mb-4 text-xl mt-10  text-stone-500">
                                Descubre el <strong className="text-orange-950">Auténtico</strong> sabor del <strong className="text-orange-950">Café Arábico del Valle del Cauca.</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.9} delay={0.1}>
                            <p className="mb-4 text-2xl mt-10">
                                <strong className="text-orange-950">¡Encuentra tu café ahora!</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimatedUp duration={0.95}>
                            <div className="flex flex-row justify-center items-center gap-12 mt-5">
                                <a href="https://wa.link/1ym7qr" target="_blank">
                                    <button className="bg-[#2B1D1D] text-white px-8 py-3 rounded-full border-2 border-[#C4A484] hover:opacity-90">
                                        COMPRAR AHORA
                                    </button>
                                </a>
                                <button className="bg-[#2B1D1D] text-white px-8 py-3 rounded-full border-2 border-[#C4A484] hover:opacity-90">
                                    Nuestro Catálogo
                                </button>
                            </div>
                        </AnimatedUp>
                    </div>
                    <AnimatedUp duration={0.8}>
                        <Image priority={true} className="w-3/5 sm:w-1/6 md:2/6 2xl:3/5 xl:w-[500px] h-auto lg:ml-48 md:ml-80  drop-shadow-4xl" src="/images/section-home-img-product.png" alt="office content 2" width={600} height={400} />
                    </AnimatedUp >
                </div>

            </section>
        </div>
    )
}