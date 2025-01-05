import Navar from "@/app/components/navar"

export default function Home() {
    return (
        <div>
            <Navar />
            <section>
                <div className="sm:mt-5 lg:mt-7 md:mt-5 gap-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                    <div className="sm:mt-5 lg:mt-20 md:mt-5 font-light text-gray-500 sm:text-lg dark:text-gray-400 items-center text-center">
                        <h2 className="flex justify-center items-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            <img className="items-center w-4/6" src="./images/section-home-img-h1-name-product.png" />
                        </h2>
                        <p className="mb-4 text-2xl ">El <strong className=" text-white">MEJOR</strong> momento del día comienza con un <strong className=" text-white">BUEN CAFÉ</strong></p>
                        <p className="mb-4 text-xl mt-10">
                            Descubre el <strong className=" text-white">Auténtico</strong>  sabor del
                            <strong className=" text-white"> Café Arábico del Valle del Cauca.</strong>
                        </p>
                        <p className="mb-4 text-2xl  mt-10"><strong className=" text-white">¡Encuentra tu café ahora!</strong></p>

                    </div>
                    <div className="grid grid-cols-1 content-center gap-4">
                        <img className="w-auto lg:h-4/6 lg:ml-48 md:ml-80 md:h-2/6 sm:h-1/6 drop-shadow-4xl" src="./images/section-home-img-product.png" alt="office content 2" />
                    </div>
                </div>
            </section>
        </div>
    )
}