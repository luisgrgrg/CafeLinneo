"use client"
export const FooterHome = () => {
    return (
        <footer className="bg-[#161111]  dark:bg-[#161111] mt-40">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Nos Contactaremos Contigo!</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="number" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#161111] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Numero de Teléfono" />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#161111]  border rounded-lg hover:bg-[#c5a880] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Contactanos!
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Navegar</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Productos</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Nosotros</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Nuestro Mercado</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Café Artesanal</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Restaurante</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-1 gap-4 hover:cursor-pointer">
                        <img src="https://lirp.cdn-website.com/f07fdd66/dms3rep/multi/opt/vendty-logo-blanco-fondo-transparente-640w.png" width="130" height="110" alt="" />
                    </div>

                    <div className="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        <img src="https://www.svgrepo.com/show/452114/tiktok.svg" width="30" height="30" alt="inst" />
                    </div>
                </div>
                <p className="text-white p-8 text-start md:text-center md:text-lg md:p-4">© 2025 Café Linneo . Todos los Derechos Reservados.</p>
            </div>
        </footer>
    )
}