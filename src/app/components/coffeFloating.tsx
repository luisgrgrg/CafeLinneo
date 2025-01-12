import { FloatingImage } from "./animations/floattingInYImage";

export default function CoffeFloating() {
    return (
        <div>
            {/* BUTTONS COFFE RIGTH */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-4 2xl:w-16 xl:w-12 sm:w-4 lg:w-7 md:w-5 top-96 right-10 rotate-12 opacity-50"
                alt="Coffe float right 1"
                duration={3}
                ymove={18}
            />

            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-4 2xl:w-16 xl:w-10 sm:w-5 lg:w-7 md:w-5 top-[550px] right-[550px] rotate-45 opacity-50 "
                alt="Coffe float right 2"
                duration={5}
                ymove={18}
            />
 


            {/* BUTTONS COFFE CENTER */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-5 2xl:w-9 xl:w-12 sm:w-5 lg:w-7 md:w-5 right-550 2xl:right-790 top-80 rotate-300 opacity-50"
                alt="Coffe float center 1"
                duration={5}
                ymove={18}
            />

            {/* BUTTONS COFFE LEFTH */}
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-3 2xl:w-18 xl:w-7 sm:w-3 lg:w-5 md:w-3 top-20 left-10 opacity-50"
                alt="Coffe float left 2"
                duration={4}
                ymove={18}
            />
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-10 2xl:w-10 xl:w-10 sm:w-8 lg:w-8 md:w-8 top-28 left-96 rotate-330 opacity-50"
                alt="Coffe float left 2"
                duration={4}
                ymove={18}
            />
            <FloatingImage
                src="./images/coffe-float.png"
                className="fixed w-6 2xl:w-16 xl:w-8 sm:w-4 lg:w-4 md:w-3 top-96 left-40 rotate-320 opacity-50"
                alt="Coffe float left 3"
                duration={5}
                ymove={18}
            />
        </div>
    );
}
