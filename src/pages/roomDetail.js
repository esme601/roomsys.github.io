import { jd } from "../jd.config"
import Hero from "../components/home/hero"
import roomsData from "../data/rooms.json"
import Footer from "../components/footer"

export default function RoomDetail({ params }) {
    const slug = params?.id ?? params?.params?.id
    const room = roomsData.find((r) => r.slug === slug)

    const renderNotFound = () =>
        jd.div(
            {
                className:
                    "min-h-screen bg-[#161524] text-white flex items-center justify-center",
            },
            [
                jd.div(
                    {
                        className:
                            "text-center border border-red-500/30 p-10 bg-black/30",
                    },
                    [
                        jd.h1(
                            {
                                className:
                                    "text-red-400 text-xl tracking-[0.4em] font-orbitron",
                            },
                            ["MISSION NOT FOUND"]
                        ),
                        jd.p(
                            {
                                className:
                                    "text-gray-500 text-xs mt-3 tracking-[0.3em]",
                            },
                            ["INVALID OR CORRUPTED DOSSIER"]
                        ),
                    ]
                ),
            ]
        )

    if (!room) return renderNotFound()

    const renderDifficultyBars = () => {
        const filled = room?.difficulty ?? 0
        const max = room?.maxDifficulty ?? filled

        return jd.div(
            { className: "flex gap-2 mt-3" },
            Array.from({ length: max }).map((_, i) =>
                jd.div(
                    {
                        className: `w-6 h-2 ${i < filled
                            ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                            : "bg-cyan-950"
                            }`,
                    },
                    []
                )
            )
        )
    }

    const renderInfoBox = (label, value, valueClass = "text-white") =>
        jd.div(
            {
                className:
                    "border border-cyan-400/10 bg-black/20 p-4 relative overflow-hidden",
            },
            [
                jd.div({
                    className:
                        "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)]",
                }),

                jd.p(
                    {
                        className:
                            "text-cyan-400 text-[10px] tracking-[0.4em] uppercase",
                    },
                    [label]
                ),

                jd.div(
                    {
                        className: `mt-2 text-sm font-semibold tracking-[0.1em] ${valueClass}`,
                    },
                    [value ?? "-"]
                ),
            ]
        )

    return jd.fragment([
        // HERO
        Hero({
            status: `MISSION // ${room.category?.toUpperCase() ?? "-"}`,
            title: room.title ?? "",
            description: room.shortDescription ?? "",
            buttonText: ">> DEPLOY MISSION <<",
        }),

        // MAIN PANEL
        jd.section(
            {
                className:
                    "bg-[#161524] px-6 md:px-12 lg:px-20 py-20 text-white",
            },
            [
                jd.div(
                    {
                        className:
                            "max-w-6xl mx-auto border border-cyan-400/30 bg-[#0b1220] p-10 relative shadow-[0_0_50px_rgba(34,211,238,0.08)]",
                    },
                    [
                        // HUD corners
                        jd.div({
                            className:
                                "absolute top-0 left-0 w-24 h-[1px] bg-cyan-400",
                        }),
                        jd.div({
                            className:
                                "absolute top-0 left-0 h-24 w-[1px] bg-cyan-400",
                        }),
                        jd.div({
                            className:
                                "absolute bottom-0 right-0 w-24 h-[1px] bg-cyan-400/40",
                        }),
                        jd.div({
                            className:
                                "absolute bottom-0 right-0 h-24 w-[1px] bg-cyan-400/40",
                        }),

                        // HEADER
                        jd.div(
                            {
                                className: "mb-8",
                            },
                            [
                                jd.p(
                                    {
                                        className:
                                            "text-cyan-400 text-xs tracking-[0.4em]",
                                    },
                                    ["MISSION DETAILS"]
                                ),

                                jd.h1(
                                    {
                                        className:
                                            "text-3xl md:text-5xl font-bold text-cyan-300 mt-3 font-orbitron uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]",
                                    },
                                    [room.title ?? ""]
                                ),

                                jd.div(
                                    {
                                        className: "mt-4 flex items-center gap-3",
                                    },
                                    [
                                        jd.div({
                                            className:
                                                "w-2 h-2 bg-green-400 rounded-full animate-pulse",
                                        }),
                                        jd.span(
                                            {
                                                className:
                                                    "text-green-400 text-[10px] tracking-[0.4em]",
                                            },
                                            ["ACTIVE SIMULATION"]
                                        ),
                                    ]
                                ),
                            ]
                        ),

                        jd.div(
                            {
                                className:
                                    "mt-8 border border-cyan-400/20 bg-black/30 p-5 relative overflow-hidden",
                            },
                            [
                                // glow background
                                jd.div({
                                    className:
                                        "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]",
                                }),

                                // header log style
                                jd.div(
                                    {
                                        className:
                                            "flex justify-between text-[10px] text-cyan-400 tracking-[0.35em] uppercase",
                                    },
                                    [
                                        jd.span({}, ["MISSION LOG"]),
                                        jd.span({}, ["ENCRYPTED DATA STREAM"]),
                                    ]
                                ),

                                // divider
                                jd.div({
                                    className: "mt-3 mb-4 h-px bg-cyan-400/20",
                                }),

                                jd.p(
                                    {
                                        className:
                                            "text-gray-300 text-sm leading-relaxed font-mono tracking-[0.05em] whitespace-pre-line",
                                    },
                                    [room.longDescription ?? "NO DATA AVAILABLE"]
                                ),
                            ]
                        ),

                        // GRID INFO
                        jd.div(
                            {
                                className:
                                    "grid md:grid-cols-2 gap-6 mt-10 text-sm",
                            },
                            [
                                renderInfoBox(
                                    "THREAT LEVEL",
                                    `LVL ${room.difficulty}`
                                ),
                                renderInfoBox(
                                    "OPERATORS",
                                    room.players ?? "-"
                                ),
                                renderInfoBox(
                                    "COST",
                                    `€${room.price ?? 0}`,
                                    "text-yellow-300"
                                ),
                                renderInfoBox(
                                    "CATEGORY",
                                    room.category ?? "-",
                                    "text-cyan-400"
                                ),
                            ]
                        ),

                        jd.div(
                            {
                                className: "mt-10",
                            },
                            [
                                // LABEL HUD
                                jd.div(
                                    {
                                        className:
                                            "flex justify-between text-[10px] text-cyan-400 tracking-[0.4em]",
                                    },
                                    [
                                        jd.span({}, ["THREAT LEVEL"]),
                                        jd.span({}, [`LVL ${room.difficulty}/5`]),
                                    ]
                                ),

                                // BAR
                                jd.div(
                                    {
                                        className:
                                            "mt-3 h-2 bg-cyan-950 overflow-hidden relative",
                                    },
                                    [
                                        // glow overlay
                                        jd.div({
                                            className:
                                                "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]",
                                        }),

                                        // fill
                                        jd.div({
                                            className:
                                                "h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300",
                                            style: `width:${(room.difficulty / 5) * 100}%`,
                                        }),
                                    ]
                                ),
                            ]
                        ),

                        // STATUS PANEL
                        jd.div(
                            {
                                className:
                                    "mt-10 border border-cyan-400/20 bg-black/30 p-5",
                            },
                            [
                                jd.p(
                                    {
                                        className:
                                            "text-cyan-400 text-[10px] tracking-[0.4em]",
                                    },
                                    ["SYSTEM STATUS"]
                                ),

                                jd.p(
                                    {
                                        className:
                                            "text-yellow-300 mt-2 tracking-[0.2em]",
                                    },
                                    ["READY FOR DEPLOYMENT"]
                                ),
                            ]
                        ),

                        // CTA
                        jd.routerLink(
                            {
                                href: `/booking/`,
                                className:
                                    "btn rounded-none w-full mt-6 bg-transparent border border-yellow-400 text-yellow-300 tracking-[0.3em] hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]",
                            },
                            [">> INIT BOOKING PROTOCOL <<"]
                        ),
                    ]
                ),
                jd.div({ className: "flex flex-wrap justify-center"},
                    [
                        jd.routerLink(
                            {
                                href: `/rooms/`,
                                className:
                                    "btn rounded-none mt-6 bg-transparent border border-yellow-400 text-yellow-300 tracking-[0.3em] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]",
                            },
                            [">> check other MISSIONS <<"]
                        ),

                    ]
                ),
            ]
        ),
        Footer()
    ])
}