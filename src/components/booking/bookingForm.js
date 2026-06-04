import { jd } from "../../jd.config"
import rooms from "../../data/rooms.json"

export default function BookingForm() {

    function handleMission(e) {
        const input = e.target
        const value = input.value.trim().toLowerCase()

        const validValues = []

        for (let i = 0; i < rooms.length; i++) {
            validValues.push(rooms[i].slug.toLowerCase())
            validValues.push(rooms[i].title.toLowerCase())
        }

        if (!validValues.includes(value)) {
            input.style.borderColor = "#f87171"
        } else {
            input.style.borderColor = "#22d3ee"
        }
    }

    function handleEmailKeyup(e) {
        const inputEmail = e.target
        const email = inputEmail.value
        const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/

        if (!emailRegex.test(email)) {
            inputEmail.style.borderColor = "#f87171"
            inputEmail.style.boxShadow = "0 0 10px rgba(248, 113, 113, 0.5)"
        } else {
            inputEmail.style.borderColor = "#22d3ee"
            inputEmail.style.boxShadow = "0 0 10px rgba(34, 211, 238, 0.3)"
        }
    }

    function handleDate(e) {
        const input = e.target
        const value = input.value

        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const selected = new Date(value)

        if (!value || selected < today) {
            input.style.borderColor = "#f87171"
            input.style.boxShadow = "0 0 10px rgba(248, 113, 113, 0.5)"
        } else {
            input.style.borderColor = "#22d3ee"
            input.style.boxShadow = "0 0 10px rgba(34, 211, 238, 0.3)"
        }
    }

    function handlePlayers(e) {
        const input = e.target
        const value = Number(input.value)

        if (!value || value <= 0) {
            input.style.borderColor = "#f87171"
            input.style.boxShadow = "0 0 10px rgba(248, 113, 113, 0.5)"
        } else {
            input.style.borderColor = "#22d3ee"
            input.style.boxShadow = "0 0 10px rgba(34, 211, 238, 0.3)"
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        const mission = e.target.mission.value.trim().toLowerCase()
        const date = e.target.date.value
        const players = e.target.players.value
        const email = e.target.email.value.trim()

        const validMission = rooms.some(r =>
            r.slug.toLowerCase() === mission ||
            r.title.toLowerCase() === mission
        )

        if (!mission || !date || !players || !email) {
            alert("ERROR // COMPLETE ALL MISSION PARAMETERS")
            return
        }

        if (!validMission) {
            alert("ERROR // INVALID MISSION")
            return
        }

        if (Number(players) <= 0) {
            alert("ERROR // INVALID TEAM SIZE")
            return
        }

        const bookings = JSON.parse(localStorage.getItem("bookings")) || []

        bookings.push({ mission, date, players, email })

        localStorage.setItem("bookings", JSON.stringify(bookings))

        alert("MISSION DEPLOYED SUCCESSFULLY")

        e.target.reset()
    }

    return jd.section(
        {
            className:
                "min-h-screen bg-[#161524] flex items-center justify-center px-6 py-20",
        },
        [
            jd.div(
                {
                    className:
                        "relative w-full max-w-md bg-[#0a1220] border border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,.12)] overflow-hidden",
                },
                [
                    jd.div({
                        className:
                            "absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(34,211,238,.05),transparent)] animate-pulse",
                    }),

                    jd.div({
                        className:
                            "absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-cyan-400",
                    }),
                    jd.div({
                        className:
                            "absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-yellow-300",
                    }),
                    jd.div({
                        className:
                            "absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-yellow-300",
                    }),
                    jd.div({
                        className:
                            "absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-cyan-400",
                    }),

                    jd.div(
                        { className: "relative z-10 p-8 space-y-6" },
                        [
                            jd.div(
                                { className: "space-y-2" },
                                [
                                    jd.p(
                                        { className: "text-cyan-400 text-xs tracking-[0.5em]" },
                                        ["MISSION ACCESS NODE"]
                                    ),
                                    jd.h2(
                                        { className: "text-white text-2xl font-bold tracking-wide" },
                                        ["BOOKING TERMINAL"]
                                    ),
                                    jd.p(
                                        { className: "text-gray-400 text-sm" },
                                        ["Initialize mission parameters to deploy escape room simulation."]
                                    ),
                                ]
                            ),

                            jd.form(
                                {
                                    className: "space-y-6",
                                    onsubmit: handleSubmit
                                },
                                [

                                    jd.div(
                                        { className: "space-y-2 border border-cyan-500/10 p-3 bg-[#08111f]/40" },
                                        [
                                            jd.label(
                                                { className: "text-[11px] tracking-[0.35em] text-cyan-400" },
                                                ["MISSION NAME"]
                                            ),
                                            jd.input({
                                                name: "mission",
                                                type: "text",
                                                className:
                                                    "w-full bg-transparent outline-none text-cyan-100 tracking-wider border-b border-cyan-500/30 focus:border-cyan-300",
                                                oninput: handleMission
                                            }),
                                        ]
                                    ),

                                    jd.div(
                                        { className: "space-y-2 border border-cyan-500/10 p-3 bg-[#08111f]/40" },
                                        [
                                            jd.label(
                                                { className: "text-[11px] tracking-[0.35em] text-cyan-400" },
                                                ["MISSION DATE"]
                                            ),
                                            jd.input({
                                                name: "date",
                                                type: "date",
                                                className:
                                                    "w-full bg-transparent outline-none text-cyan-100 border-b border-cyan-500/30 focus:border-cyan-300",
                                                onimput: handleDate
                                            }),
                                        ]
                                    ),

                                    jd.div(
                                        { className: "space-y-2 border border-cyan-500/10 p-3 bg-[#08111f]/40" },
                                        [
                                            jd.label(
                                                { className: "text-[11px] tracking-[0.35em] text-cyan-400" },
                                                ["TEAM SIZE"]
                                            ),
                                            jd.input({
                                                name: "players",
                                                type: "number",
                                                className:
                                                    "w-full bg-transparent outline-none text-cyan-100 border-b border-cyan-500/30 focus:border-cyan-300",
                                            }),
                                        ]
                                    ),

                                    jd.div(
                                        { className: "space-y-2 border border-cyan-500/10 p-3 bg-[#08111f]/40" },
                                        [
                                            jd.label(
                                                { className: "text-[11px] tracking-[0.35em] text-cyan-400" },
                                                ["EMAIL"]
                                            ),
                                            jd.input({
                                                name: "email",
                                                type: "text",
                                                id: "email-input",
                                                placeholder: "OPERATOR_EMAIL@SECURE.NET",
                                                className:
                                                    "w-full bg-[#161524] border border-cyan-500/30 p-3 text-sm font-mono text-white focus:outline-none focus:border-cyan-400 transition-all",
                                                onkeyup: handleEmailKeyup
                                            }),
                                        ]
                                    ),

                                    jd.button(
                                        {
                                            type: "submit",
                                            className:
                                                "w-full mt-4 py-3 border border-cyan-400 text-cyan-300 tracking-[0.4em] hover:bg-cyan-400 hover:text-black transition shadow-[0_0_20px_rgba(34,211,238,.2)]",
                                        },
                                        ["INITIALIZE MISSION"]
                                    ),
                                ]
                            ),
                        ]
                    ),
                ]
            ),
        ]
    )
}