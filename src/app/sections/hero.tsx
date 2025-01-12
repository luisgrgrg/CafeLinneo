"use client"
import { AnimationTextDown } from "../components/animations/animationTextDown"
import { AnimatedUp } from "../components/animations/animatedUp"
import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <section>
                <div className="mt-7 2xl:mt-28 xl:mt-1 sm:mt-5 lg:mt-1 md:mt-5 gap-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                    <div className="xl:mt-10 sm:mt-5 lg:mt-20 md:mt-5 font-light text-gray-500 sm:text-lg dark:text-gray-400 items-center text-center">
                        <AnimationTextDown duration={0.5}>
                            <Image priority={true} className="items-center w-1/6" src="/images/section-home-img-h1-name-product.webp" alt="Product Image"
                                sizes="100vw" style={{ width: '100%', height: 'auto' }} width={400} height={200} />
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.8}>
                            <p className="mb-4 text-2xl">
                                El <strong className=" text-white">MEJOR</strong> momento del día comienza con un <strong className=" text-white">BUEN CAFÉ</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.85}>
                            <p className="mb-4 text-xl mt-10">
                                Descubre el <strong className=" text-white">Auténtico</strong> sabor del <strong className=" text-white">Café Arábico del Valle del Cauca.</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimationTextDown duration={0.9}>
                            <p className="mb-4 text-2xl mt-10">
                                <strong className=" text-white">¡Encuentra tu café ahora!</strong>
                            </p>
                        </AnimationTextDown>
                        <AnimatedUp duration={0.95}>
                            <div className="flex flex-row justify-center items-center gap-10">
                                <button className="bg-[#2B1D1D] text-white px-8 py-2 rounded-full border-2 border-[#C4A484] hover:opacity-90">
                                    COMPRAR AHORA
                                </button>

                                <button className="bg-[#2B1D1D] text-white px-8 py-2 rounded-full border-2 border-[#C4A484] hover:opacity-90">
                                    Nuestro Catálogo
                                </button>
                            </div>
                        </AnimatedUp>
                    </div>
                    <AnimatedUp duration={0.8}>
                        <Image priority={true} className="w-auto lg:h-4/6 lg:ml-48 md:ml-80 md:h-2/6 sm:h-8 drop-shadow-4xl" src="/images/section-home-img-product.webp" alt="office content 2" width={600} height={400} />
                    </AnimatedUp >
                </div>

            </section>
        </div>
    )
}