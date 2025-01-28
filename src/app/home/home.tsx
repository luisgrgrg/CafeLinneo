import Navar from "@/app/components/navar"
import CoffeFloating from "../components/coffeFloating"
import Hero from "../sections/heroSection"
import Products from "../sections/productSection"

export default function Home() {
    return (
        <div>
            <CoffeFloating />
            <Navar />
            <Hero />
            <Products />
        </div>
    )
}