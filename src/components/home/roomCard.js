import { jd } from "../../jd.config"

export default function RoomCard(room) {
    return jd.div(
        {
            className: " relative overflow-hidden group bg-[#111827] border border-cyan-400/20 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,229,255,.18)] hover:border-cyan-400 ,"
        },
        [
            corner("tl"),
            corner("tr"),
            corner("bl"),
            corner("br"),

            // background image
            jd.div({
                className:
                    "absolute inset-0 opacity-15 bg-cover bg-center transition duration-500 group-hover:scale-105 group-hover:opacity-30",
                style: `background-image:url(${room.image})`,
            }),

            // overlays
            jd.div({
                className:
                    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20",
            }),

            jd.div({
                className:
                    "absolute top-16 left-0 w-full h-px bg-cyan-400/10",
            }),

            jd.div({
                className:
                    "absolute bottom-24 left-0 w-full h-px bg-cyan-400/10",
            }),

            jd.div({
                className:
                    "absolute left-5 top-0 bottom-0 w-px bg-cyan-400/5",
            }),

            jd.div(
                {
                    className: "relative z-10",
                },
                [
                    // STATUS
                    jd.div(
                        {
                            className: "flex items-center gap-2",
                        },
                        [
                            jd.div({
                                className:
                                    "w-2 h-2 rounded-full bg-green-400 animate-pulse",
                            }),

                            jd.span(
                                {
                                    className:
                                        "text-[10px] text-green-400 tracking-[0.35em]",
                                },
                                [room.status]
                            ),
                        ]
                    ),

                    // TITLE
                    jd.h3(
                        {
                            className:
                                "mt-4 text-2xl md:text-3xl font-bold uppercase text-yellow-300 tracking-[0.25em] font-orbitron",
                        },
                        [`//${room.title}`]
                    ),

                    // IMAGE PANEL
                    jd.div({
                        className:
                            "mt-5 h-40 border border-cyan-400/20 bg-cover bg-center relative overflow-hidden",
                        style: `background-image:url(${room.image})`,
                    }),

                    // DESCRIPTION
                    jd.p(
                        {
                            className:
                                "mt-4 text-sm text-gray-300 leading-relaxed",
                        },
                        [room.shortDescription]
                    ),

                    // THREAT BAR
                    jd.div(
                        {
                            className: "mt-5",
                        },
                        [
                            jd.div(
                                {
                                    className:
                                        "flex justify-between text-[10px] text-cyan-400 tracking-[0.3em]",
                                },
                                [
                                    jd.span({}, ["THREAT LEVEL"]),
                                    jd.span({}, [`0${room.difficulty}`]),
                                ]
                            ),

                            jd.div(
                                {
                                    className:
                                        "mt-2 h-1 bg-cyan-950 overflow-hidden",
                                },
                                [
                                    jd.div({
                                        className:
                                            "h-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]",
                                        style: `width:${room.difficulty * 20}%`,
                                    }),
                                ]
                            ),
                        ]
                    ),

                    // HUD DATA
                    jd.div(
                        {
                            className:
                                "grid grid-cols-4 gap mt-6 border-t border-cyan-400/20 pt-4",
                        },
                        [
                            stat("LVL", room.difficulty),
                            stat("CREW", room.players),
                            stat("COST", `${room.price}€`),
                            stat("TYPE", room.category),
                        ]
                    ),

                    // BUTTON
                    jd.routerLink(
                        {
                            href: `/rooms/${room.slug}`,
                            className:
                                "btn rounded-none mt-6 w-full bg-transparent border border-cyan-400 text-cyan-300 tracking-[0.3em] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,.8)]",
                        },
                        [">> OPEN DOSSIER <<"]
                    ),
                ]
            ),
        ]
    )
}

function stat(label, value) {
    return jd.div(
        {
            className: "flex flex-col",
        },
        [
            jd.span(
                {
                    className:
                        "text-[9px] text-gray-500 tracking-[0.25em]",
                },
                [label]
            ),

            jd.span(
                {
                    className:
                        "text-cyan-300 font-semibold text-sm",
                },
                [String(value)]
            ),
        ]
    )
}

function corner(pos) {
    const base =
        "absolute w-3 h-3 border-cyan-400/60 group-hover:border-cyan-400 transition"

    const map = {
        tl: "top-0 left-0 border-l border-t",
        tr: "top-0 right-0 border-r border-t",
        bl: "bottom-0 left-0 border-l border-b",
        br: "bottom-0 right-0 border-r border-b",
    }

    return jd.div({
        className: `${base} ${map[pos]}`,
    })
}