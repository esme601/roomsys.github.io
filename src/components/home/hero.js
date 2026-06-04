import { jd } from "../../jd.config"
import roomData from "../../data/rooms.json"
import RoomsSection from "./roomsSection";


export default function Hero ({
    status = "SYSTEM STATUS: ONLINE",
    title = "ACCESS SIMULATION",
    description = "Access approved simulation environment. Select a mission and attempt extraction before time limit expires.",
    buttonText = "ENTER SIMULATION",
}) {
    return jd.fragment([
        jd.section(
            {
                className:
                    "relative h-auto bg-[#161524] flex items-center px-6 md:px-12 lg:px-16 py-20 overflow-hidden",
            },
            [
                // STATUS
                jd.div(
                    {
                        className:
                            "absolute top-6 left-6 md:top-10 md:left-10 text-cyan-400 text-[10px] md:text-xs tracking-widest",
                    },
                    [status]
                ),

                // CONTENT
                jd.div(
                    {
                        className:
                            "max-w-2xl text-center md:text-left mx-auto md:mx-0",
                    },
                    [
                        jd.h1(
                            {
                                className:
                                    "text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-yellow-300 leading-tight   md:text-ellipsis",
                            },
                            [title]
                        ),

                        jd.p(
                            {
                                className:
                                    "text-gray-300 mt-6 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed",
                            },
                            [description]
                        ),

                        // PULSANTE CYAN GLOW
                        jd.routerLink({
                            href: `/rooms/`,
                            className:
                                "btn rounded-none relative overflow-hidden bg-transparent border border-cyan-400 text-cyan-300 px-5 py-2 mt-6 text-xs tracking-[0.3em] transition duration-300 hover:text-black hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]",
                        }, [buttonText])
                    ]
                ),

    // DECORATIONS
    jd.div({
        className:
            "absolute top-0 left-0 w-20 md:w-32 h-[1px] bg-cyan-400",
    }),

        jd.div({
            className:
                "absolute bottom-10 md:bottom-20 right-4 md:right-10 w-24 md:w-40 h-[1px] bg-yellow-400",
        }),
            ]
        ),
    ])
}