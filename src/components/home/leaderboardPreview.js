import { jd } from "../../jd.config"
import roomsData from "../../data/rooms.json"

export default function leaderboardSection() {
    let selectedRoom = "ALL"
    let showAdmin = false

    const container = document.createElement("div")

    const toSeconds = (t) => {
        const [m, s] = t.split(":").map(Number)
        return m * 60 + s
    }

    const getLeaderboard = () =>
        JSON.parse(localStorage.getItem("leaderboard")) || []

    const getRooms = () => {
        const data = getLeaderboard()

        return [
            "ALL",
            ...new Set(data.map((d) => d.room)),
        ]
    }


    let errorMessage = ""

    const isValidTime = (time) => {
        const match = time.match(/^(\d{2}):(\d{2})$/)

        if (!match) return false

        const minutes = Number(match[1])
        const seconds = Number(match[2])

        return (
            minutes >= 0 &&
            minutes <= 60 &&
            seconds >= 0 &&
            seconds <= 59
        )
    }


    const saveResult = (name, room, time) => {
        const leaderboard = getLeaderboard()

        leaderboard.push({
            name,
            room,
            time,
            timestamp: Date.now(),
        })

        localStorage.setItem(
            "leaderboard",
            JSON.stringify(leaderboard)
        )
    }

    const render = () => {
        const data = getLeaderboard()

        const sorted = [...data].sort(
            (a, b) =>
                toSeconds(a.time) -
                toSeconds(b.time)
        )

        const rooms = getRooms()

        const filtered =
            selectedRoom === "ALL"
                ? sorted
                : sorted.filter(
                    (d) =>
                        d.room === selectedRoom
                )

        return jd.section(
            {
                className:"bg-[#161524] px-6 md:px-10 xl:px-16 py-24 md:py-32 relative",
            },
            [
                jd.div(
                    {
                        className:"max-w-4xl mx-auto",
                    },
                    [
                        jd.div({}, [
                            jd.p({ className: "text-cyan-400 text-xs tracking-[0.4em]", },["SYSTEM ARCHIVE",]
                            ),

                            jd.h2(
                                {
                                    className:
                                        "text-3xl md:text-5xl font-bold font-orbitron text-yellow-300 mt-3",
                                },
                                [
                                    "LEADERBOARD",
                                ]
                            ),
                        ]),

                        jd.div(
                            {
                                className:
                                    "flex justify-between items-center mt-8",
                            },
                            [
                                jd.div(
                                    {
                                        className:
                                            "flex flex-wrap gap-2 text-xs uppercase tracking-widest",
                                    },
                                    rooms.map(
                                        (room) =>
                                            jd.button(
                                                {
                                                    className:
                                                        room ===
                                                            selectedRoom
                                                            ? "px-3 py-1 border border-cyan-400 text-cyan-400 bg-cyan-400/10"
                                                            : "px-3 py-1 border border-gray-600 text-gray-400 hover:text-yellow-300 hover:border-yellow-300 transition",

                                                    onclick:
                                                        () => {
                                                            selectedRoom =
                                                                room
                                                            rerender()
                                                        },
                                                },
                                                [
                                                    room,
                                                ]
                                            )
                                    )
                                ),

                                jd.button(
                                    {
                                        className:
                                            "px-4 py-2 border border-yellow-300 text-yellow-300 text-xs tracking-widest hover:bg-yellow-300 hover:text-black transition",

                                        onclick:
                                            () => {
                                                showAdmin =
                                                    true
                                                rerender()
                                            },
                                    },
                                    [
                                        "MISSION CONTROL",
                                    ]
                                ),
                            ]
                        ),

                        jd.div(
                            {
                                className:
                                    "space-y-3 font-mono text-sm mt-8",
                            },
                            filtered.length >
                                0
                                ? filtered.map(
                                    (
                                        item,
                                        index
                                    ) =>
                                        jd.div(
                                            {
                                                className:
                                                    "grid grid-cols-4 gap-4 py-3 border-b border-cyan-500/10",
                                            },
                                            [
                                                jd.span(
                                                    {
                                                        className:
                                                            "text-gray-500",
                                                    },
                                                    [
                                                        `#${index + 1}`,
                                                    ]
                                                ),

                                                jd.span(
                                                    {},
                                                    [
                                                        item.name,
                                                    ]
                                                ),

                                                jd.span(
                                                    {
                                                        className:
                                                            "text-yellow-300",
                                                    },
                                                    [
                                                        item.time,
                                                    ]
                                                ),

                                                jd.span(
                                                    {
                                                        className: "text-cyan-400 text-xs",
                                                    },
                                                    [
                                                        (() => {
                                                            const found = roomsData.find(
                                                                (r) => r.slug === item.room
                                                            )

                                                            return found ? found.title : item.room
                                                        })(),
                                                    ]
                                                ),
                                            ]
                                        )
                                )
                                : [
                                    jd.p(
                                        {
                                            className:
                                                "text-gray-500",
                                        },
                                        [
                                            "NO OPERATIVE DATA",
                                        ]
                                    ),
                                ]
                        ),
                    ]
                ),

                showAdmin
                    ? jd.div(
                        {
                            className:
                                "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
                        },
                        [
                            jd.div(
                                {
                                    className:
                                        "bg-[#111827] border border-cyan-400 p-8 w-full max-w-md",
                                },
                                [
                                    jd.h3(
                                        {
                                            className:
                                                "text-yellow-300 text-xl mb-6",
                                        },
                                        [
                                            "MISSION CONTROL",
                                        ]
                                    ),
                                    errorMessage
                                        ? jd.p(
                                            {
                                                className:
                                                    "text-red-400 text-xs mb-4 tracking-widest",
                                            },
                                            [errorMessage]
                                        )
                                        : null,

                                    jd.form(
                                        {
                                            onsubmit:
                                                (
                                                    e
                                                ) => {
                                                    e.preventDefault()

                                                    const name =
                                                        e.target.elements.name.value.trim()

                                                    const room =
                                                        e.target.elements.room.value.trim()

                                                    const time =
                                                        e.target.elements.time.value.trim()

                                                    if (!name) {
                                                        errorMessage = "INSERT TEAM NAME"
                                                        rerender()
                                                        return
                                                    }

                                                    if (!room) {
                                                        errorMessage = "SELECT A ROOM"
                                                        rerender()
                                                        return
                                                    }

                                                    if (!isValidTime(time)) {
                                                        errorMessage =
                                                            "USE MM:SS (00-60 MINUTES / 00-59 SECONDS)"
                                                        rerender()
                                                        return
                                                    }

                                                    errorMessage = ""

                                                    saveResult(
                                                        name,
                                                        room,
                                                        time
                                                    )

                                                    showAdmin =
                                                        false

                                                    rerender()
                                                },
                                        },
                                        [
                                            jd.input(
                                                {
                                                    name: "name",
                                                    placeholder:
                                                        "TEAM NAME",
                                                    className:
                                                        "w-full mb-4 p-3 bg-black border border-gray-700",
                                                }
                                            ),

                                            jd.select(
                                                {
                                                    name: "room",
                                                    className:
                                                        "w-full mb-4 p-3 bg-black border border-gray-700 text-white",
                                                },
                                                [
                                                    jd.option(
                                                        {
                                                            value: "",
                                                        },
                                                        ["SELECT ROOM"]
                                                    ),

                                                    ...roomsData.map((room) =>
                                                        jd.option(
                                                            {
                                                                value: room.slug,
                                                            },
                                                            [room.title]
                                                        )
                                                    ),
                                                ]
                                            ),

                                            jd.input(
                                                {
                                                    name: "time",
                                                    placeholder:
                                                        "MM:SS",
                                                    className:
                                                        "w-full mb-6 p-3 bg-black border border-gray-700",
                                                }
                                            ),

                                            jd.div(
                                                {
                                                    className:
                                                        "flex gap-3",
                                                },
                                                [
                                                    jd.button(
                                                        {
                                                            type: "submit",
                                                            className:
                                                                "flex-1 py-3 border border-cyan-400 text-cyan-400",
                                                        },
                                                        [
                                                            "SAVE",
                                                        ]
                                                    ),

                                                    jd.button(
                                                        {
                                                            type: "button",

                                                            onclick:
                                                                () => {
                                                                    showAdmin =
                                                                        false
                                                                    rerender()
                                                                },

                                                            className:
                                                                "flex-1 py-3 border border-red-400 text-red-400",
                                                        },
                                                        [
                                                            "CLOSE",
                                                        ]
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ]
                            ),
                        ]
                    )
                    : null,
            ]
        )
    }

    const rerender = () => {
        container.innerHTML = ""
        container.appendChild(render())
    }

    setTimeout(rerender, 0)

    return container
}




