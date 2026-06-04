import "../style.css"
import { jd } from "../jd.config.js"
import Hero from "../components/home/hero.js"
import RoomsSection from "../components/home/roomsSection.js"
import Footer from "../components/footer.js"
import leaderboardSection from "../components/home/leaderboardPreview.js"
import Newsletter from "../components/newletter.js"
import ExperienceFlow from "../components/home/briefing.js"

export default function Homepage() {
    return jd.fragment([
        Hero({
            status: "TRANSMISSION RECEIVED",
            title: "ACCEDI ALLA MISSIONE",
            description: "L'anomalia è stata rilevata. Riunisci il tuo equipaggio e completa la missione prima che il tempo scada.",
            buttonText: "INIZIA LA MISSIONE"
        }),
        ExperienceFlow(),
        RoomsSection(),
        leaderboardSection(),
        Newsletter(),
        Footer()
    ])
}



