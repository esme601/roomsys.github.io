import { jd } from "../../jd.config"

export default function ExperienceFlow() {
    return jd.section(
        {
            className:
                "bg-[#161524] px-6 md:px-12 lg:px-20 py-24 text-white font-mono",
        },
        [
            jd.div(
                {
                    className: "mb-12 max-w-2xl",
                },
                [
                    jd.h2(
                        {
                            className:
                                "text-yellow-300 text-3xl md:text-4xl uppercase tracking-[0.25em]",
                        },
                        ["COME FUNZIONA L'ESPERIENZA"]
                    ),

                    jd.p(
                        {
                            className:
                                "mt-3 text-gray-400 text-sm leading-relaxed",
                        },
                        [
                            "Un'esperienza reale strutturata come un sistema di missioni. Chiara, guidata e progressiva.",
                        ]
                    ),
                ]
            ),

            jd.div(
                {
                    className:
                        "grid grid-cols-1 md:grid-cols-3 gap-6",
                },
                [
                    card(
                        "CHECK-IN",
                        "Arrivo in struttura e breve fase di preparazione. Accesso alla stanza già configurata e pronta."
                    ),

                    card(
                        "SCELTA MISSIONE",
                        "Selezioni difficoltà e scenario. Ogni stanza ha un livello di sfida diverso "
                    ),

                    card(
                        "SANIFICAZIONE",
                        "Sterilizzazione per agenti patogeni esterni. Inizio Missione."
                    ),
                ]
            ),

            jd.div(
                {
                    className:
                        "mt-12 border border-cyan-400/20 bg-[#111827] p-5 flex flex-col md:flex-row justify-between gap-4",
                },
                [
                    info("DURATA", "60 MIN"),
                    info("GIOCATORI", "2 - 6"),
                    info("DIFFICOLTÀ", "DINAMICA"),
                    info("STILE", "LIVE EXPERIENCE"),
                ]
            ),
        ]
    )
}

function card(title, text) {
    return jd.div(
        {
            className:
                "relative bg-[#111827] border border-cyan-400/20 p-5 hover:border-cyan-400 transition overflow-hidden",
        },
        [
            // neon side bar
            jd.div({
                className:
                    "absolute left-0 top-0 h-full w-[3px] bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.9)]",
            }),

            jd.div(
                {
                    className: "pl-4",
                },
                [
                    jd.h3(
                        {
                            className:
                                "text-cyan-400 uppercase tracking-[0.25em] text-sm",
                        },
                        [title]
                    ),

                    jd.p(
                        {
                            className:
                                "mt-2 text-gray-400 text-sm leading-relaxed",
                        },
                        [text]
                    ),
                ]
            ),
        ]
    )
}

function info(label, value) {
    return jd.div(
        {
            className: "flex flex-col",
        },
        [
            jd.span(
                {
                    className:
                        "text-[10px] text-gray-500 tracking-[0.25em]",
                },
                [label]
            ),

            jd.span(
                {
                    className:
                        "text-cyan-300 text-sm font-semibold",
                },
                [value]
            ),
        ]
    )
}