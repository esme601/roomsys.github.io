import "../style.css"
import { jd } from "../jd.config.js"
import Hero from "../components/home/hero.js"
import Footer from "../components/footer.js"
import leaderboardSection from "../components/home/leaderboardPreview.js"
import rooms from "../data/rooms.json"
import RoomCard from "../components/home/roomCard.js"

export default function Rooms() {

    let selectedCategory = "ALL"

    const categories = ["ALL"]
    rooms.forEach((r) => {
        if (!categories.includes(r.category)) {
            categories.push(r.category)
        }
    })

    function render() {
        const filtered = rooms.filter((room) =>
            selectedCategory === "ALL"
                ? true
                : room.category === selectedCategory
        )

        return jd.fragment([
            Hero({
                status: "SYSTEM DATABASE: ONLINE",
                title: "MISSION ARCHIVE",
                description:
                    "Browse all available escape missions. Analyze difficulty levels...",
                buttonText: "ACCESS DATABASE",
            }),

            // FILTER
            jd.div(
                {
                    className:
                        "flex flex-wrap gap-2 justify-center bg-[#161524] py-6 px-10",
                },
                categories.map((cat) =>
                    jd.button(
                        {
                            onClick: () => {
                                selectedCategory = cat
                                update()
                            },
                            className:
                                "px-3 py-1 text-[10px] tracking-[0.3em] border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black transition",
                        },
                        [cat]
                    )
                )
            ),

            // GRID
            jd.section(
                {
                    className:
                        "relative bg-[#161524] px-6 md:px-12 lg:px-16 py-16",
                },
                [
                    jd.div(
                        {
                            className:
                                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
                        },
                        filtered.map((room) => RoomCard(room))
                    ),
                ]
            ),

            Footer(),
        ])
    }

    function update() {
        const app = document.getElementById("app")
        if (!app) return
        app.innerHTML = ""
        app.appendChild(render())
    }

    return render()
}