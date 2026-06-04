import { jd } from "../jd.config"

export default function Footer() {
    return jd.footer(
        {
            className:
                "bg-[#0b1220] border-t border-cyan-400/20 px-6 md:px-12 lg:px-20 py-14 font-mono text-gray-300",
        },
        [
            // HEADER HUD
            jd.div(
                {
                    className:
                        "flex flex-col md:flex-row justify-between gap-10",
                },
                [
                    jd.div(
                        {},
                        [
                            jd.h3(
                                {
                                    className:
                                        "text-cyan-400 text-xl md:text-2xl tracking-[0.35em] uppercase",
                                },
                                ["ROOMSYS CONTROL NODE"]
                            ),

                            jd.p(
                                {
                                    className:
                                        "mt-2 text-gray-500 text-xs max-w-md leading-relaxed",
                                },
                                [
                                    "Sistema operativo missioni escape room. Monitoraggio stato, prenotazioni e performance in tempo reale.",
                                ]
                            ),
                        ]
                    ),

                    jd.div(
                        {
                            className:
                                "text-[11px] uppercase tracking-widest text-gray-500 space-y-1 md:text-right",
                        },
                        [
                            jd.span({}, [" NODE: MILAN-SECTOR-01 "]),
                            jd.span({}, [" NETWORK: ONLINE "]),
                            jd.span(
                                { className: "text-green-400" },
                                [" STATUS: ACTIVE "]
                            ),
                        ]
                    ),
                ]
            ),

            // SYSTEM GRID (HUD PANELS)
            jd.div(
                {
                    className:
                        "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6",
                },
                [
                    panel(
                        "MISSION DATA",
                        [
                            "Accesso missioni attivo",
                            "Slot prenotazioni disponibili",
                            "Tracking tempi abilitato",
                        ]
                    ),

                    panel(
                        "SAFETY PROTOCOL",
                        [
                            "Esperienza non pericolosa",
                            "Controllo ambientale attivo",
                            "Supporto sempre presente",
                        ]
                    ),

                    panel(
                        "SYSTEM ACCESS",
                        [
                            "Email supporto attivo",
                            "Chat live disponibile",
                            "Aggiornamenti automatici missioni",
                        ]
                    ),
                ]
            ),

            // DIVIDER HUD
            jd.div({
                className:
                    "mt-10 border-t border-cyan-400/10",
            }),

            // BOTTOM STATUS BAR
            jd.div(
                {
                    className:
                        "mt-6 flex flex-col md:flex-row justify-between text-[10px] tracking-[0.3em] uppercase text-gray-600",
                },
                [
                    jd.span({}, ["ROOMSYS v1.0"]),
                    jd.span(
                        { className: "text-cyan-400" },
                        ["SYSTEM STABLE"]
                    ),
                    jd.span(
                        { className: "text-yellow-300" },
                        ["ALL RIGHTS RESERVED"]
                    ),
                ]
            ),
        ]
    )
}

/* -------------------------
   HUD PANEL COMPONENT
--------------------------*/

function panel(title, items) {
    return jd.div(
        {
            className:
                "bg-[#111827] border border-cyan-400/20 p-5 hover:border-cyan-400 transition",
        },
        [
            jd.h4(
                {
                    className:
                        "text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3",
                },
                [title]
            ),

            jd.div(
                {
                    className: "space-y-2",
                },
                items.map((t) =>
                    jd.div(
                        {
                            className:
                                "text-gray-400 text-xs flex items-center gap-2",
                        },
                        [
                            jd.span({
                                className:
                                    "w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,.6)]",
                            }),

                            jd.span({}, [t]),
                        ]
                    )
                )
            ),
        ]
    )
}