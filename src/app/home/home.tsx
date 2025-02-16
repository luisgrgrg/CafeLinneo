import Navar from "@/app/components/navar"
import CoffeFloating from "../components/coffeFloating"
import Hero from "../sections/heroSection"
import Products from "../sections/productSection"
import Us from "../sections/usSection"
import HistorySection from "../sections/ubicationSection"
import { AnimatedUpScroll } from "../components/animations/animatedUpScroll"

export default function Home() {
    return (
        <div>
            <img src="/images/whatsapp.png" className=" fixed bottom-5 right-10 z-50 w-16" />
            <CoffeFloating />
            <Navar />
            <Hero />
            <Products />
            <Us />
        </div>
    )
}