import { FloatingImage } from "../components/floattingImage";

export default function CoffeFloating() {
    return (
        <div>
            {/* BUTTONS COFFE RIGTH */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-4 2xl:w-10 xl:w-8 sm:w-4 lg:w-7 md:w-5 top-96 right-10 rotate-12 opacity-50"
                alt="Coffe float right 1"
                duration={2}
                ymove={7}
            />
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-2 2xl:w-6 xl:w-4 sm:w-2 lg:w-4 md:w-2 top-12 right-80 rotate-90 opacity-50"
                alt="Coffe float right 2"
                duration={4}
                ymove={7}
            />


            {/* BUTTONS COFFE CENTER */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-5 2xl:w-9 xl:w-7 sm:w-5 lg:w-7 md:w-5 right-550 2xl:right-790 top-80 rotate-300 opacity-50"
                alt="Coffe float center 1"
                duration={4}
                ymove={7}
            />

            {/* BUTTONS COFFE LEFTH */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-3 2xl:w-7 xl:w-5 sm:w-3 lg:w-5 md:w-3 top-20 left-10 opacity-50"
                alt="Coffe float left 2"
                duration={2}
                ymove={7}
            />
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-6 2xl:w-8 xl:w-6 sm:w-4 lg:w-4 md:w-3 top-96 left-40 rotate-320 opacity-50"
                alt="Coffe float left 3"
                duration={4}
                ymove={10}
            />
        </div>
    );
}
