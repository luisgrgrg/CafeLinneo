export default function Navar() {
    return (

        <div>
            <nav className="bg-transparent text-white border-gray-200 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/cafe_Linneo_icon.png" className="h-20" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 border border-gray-100 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-gray-700">
                            <li className="m-0 p-0">
                                <a
                                    href="#"
                                    className="block bg-opacity-5 w-[90px] h-[80px] text-white bg-gradient-to-b from-[#d9d9d9]/30 to-[#dbdbdb]/30 rounded-b-[2rem] flex items-center justify-center shadow-lg" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#productos"
                                    className="block py-2 px-3 mt-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Productos</a>
                            </li>
                            <li>
                                <a href="#nosotros"
                                    className="block py-2 px-3 mt-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Nosotros</a>
                            </li>
                            <li>
                                <a href="#historia"
                                    className="block py-2 px-3 mt-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Historia</a>
                            </li>
                            <li>
                                <a href="#ubicaccion"
                                    className="block py-2 px-3 mt-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Ubicación</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}