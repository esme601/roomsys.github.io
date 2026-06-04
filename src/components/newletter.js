import { jd } from "../jd.config"

export default function Newsletter() {
    return jd.section(
        {
            className: "bg-[#161524] px-6 md:px-12 lg:px-20 py-20",
        },
        [
            jd.div(
                {
                    className:
                        "max-w-4xl mx-auto border border-cyan-400/20 p-8 md:p-12",
                },
                [
                    jd.h2(
                        {
                            className:
                                "text-yellow-300 text-3xl uppercase tracking-[0.25em]",
                        },
                        ["MISSION CONTROL UPLINK"]
                    ),

                    jd.p(
                        {
                            className:
                                "mt-4 text-gray-400",
                        },
                        [
                            "Ricevi aggiornamenti sulle nuove missioni e sugli eventi speciali.",
                        ]
                    ),

                    jd.div(
                        {
                            className:
                                "mt-8 flex flex-col md:flex-row gap-4",
                        },
                        [
                            jd.input({
                                id: "newsletter-email",

                                type: "email",

                                placeholder: "EMAIL ADDRESS",

                                className:
                                    "input rounded-none flex-1 bg-black border border-cyan-400/30 text-cyan-300",
                                onkeyup: (e) => handleEmailKeyup(e),
                            }),

                            jd.button(
                                {

                                    onclick: () => {
                                        const input =
                                            document.getElementById("newsletter-email")

                                        const email = input?.value?.trim()

                                        if (!isValidEmail(email)) {
                                            // opzionale: feedback extra
                                            input.style.borderColor = "#f87171"
                                            input.style.boxShadow = "0 0 10px rgba(248, 113, 113, 0.5)"

                                            return // ❌ NON apre modal
                                        }

                                        // salva email
                                        const emails =
                                            JSON.parse(localStorage.getItem("newsletter")) || []

                                        emails.push(email)

                                        localStorage.setItem(
                                            "newsletter",
                                            JSON.stringify(emails)
                                        )

                                        // apri modal
                                        document
                                            .getElementById("newsletter-modal")
                                            ?.classList.remove("hidden")
                                    },

                                    className:
                                        "btn rounded-none bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black",
                                },
                                ["JOIN NETWORK"]
                            ),
                        ]
                    ),
                ]
            ),

            // MODAL

            jd.div(
                {
                    id: "newsletter-modal",

                    className:
                        "hidden fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
                },
                [
                    jd.div(
                        {
                            className:
                                "relative w-full max-w-xl bg-[#111827] border border-cyan-400/30 p-8 overflow-hidden",
                        },
                        [
                            jd.div({
                                className:
                                    "absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-400",
                            }),

                            jd.div({
                                className:
                                    "absolute top-0 right-0 w-4 h-4 border-r border-t border-cyan-400",
                            }),

                            jd.div({
                                className:
                                    "absolute bottom-0 left-0 w-4 h-4 border-l border-b border-cyan-400",
                            }),

                            jd.div({
                                className:
                                    "absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400",
                            }),

                            jd.div({
                                className:
                                    "absolute top-16 left-0 w-full h-px bg-cyan-400/20",
                            }),

                            jd.div(
                                {
                                    className:
                                        "flex items-center gap-2",
                                },
                                [
                                    jd.div({
                                        className:
                                            "w-2 h-2 rounded-full bg-green-400 animate-pulse",
                                    }),

                                    jd.span(
                                        {
                                            className:
                                                "text-green-400 text-[10px] tracking-[0.35em] uppercase",
                                        },
                                        [
                                            "Transmission Accepted",
                                        ]
                                    ),
                                ]
                            ),

                            jd.h2(
                                {
                                    className:
                                        "mt-5 text-3xl font-bold uppercase tracking-[0.3em] text-yellow-300",
                                },
                                ["Uplink Established"]
                            ),

                            jd.p(
                                {
                                    className:
                                        "mt-6 text-gray-300 leading-relaxed",
                                },
                                [
                                    "La tua connessione al Mission Control Network è stata registrata.",
                                ]
                            ),

                            jd.div(
                                {
                                    className:
                                        "mt-8 border border-cyan-400/20 bg-black/30 p-4 space-y-2",
                                },
                                [
                                    row(
                                        "PROTOCOL",
                                        "NEWSLETTER-01"
                                    ),
                                    row(
                                        "STATUS",
                                        "ACTIVE"
                                    ),
                                    row(
                                        "ACCESS LEVEL",
                                        "RECRUIT"
                                    ),
                                ]
                            ),

                            jd.button(
                                {
                                    onclick: () => {
                                        document
                                            .getElementById(
                                                "newsletter-modal"
                                            )
                                            ?.classList.add(
                                                "hidden"
                                            )
                                    },

                                    className:
                                        "mt-8 w-full border border-cyan-400 text-cyan-300 py-3 uppercase tracking-[0.3em] hover:bg-cyan-400 hover:text-black",
                                },
                                ["RETURN TO SYSTEM"]
                            ),
                        ]
                    ),
                ]
            ),
        ]
    )
}

function isValidEmail(email) {
    const emailRegex =
        /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/

    return emailRegex.test(email)
}

function handleEmailKeyup(e) {
    const inputEmail = e.target
    const email = inputEmail.value

    if (!isValidEmail(email)) {
        inputEmail.style.borderColor = "#f87171"
        inputEmail.style.boxShadow = "0 0 10px rgba(248, 113, 113, 0.5)"
    } else {
        inputEmail.style.borderColor = "#22d3ee"
        inputEmail.style.boxShadow = "0 0 10px rgba(34, 211, 238, 0.3)"
    }
}


function row(label, value) {
    return jd.div(
        {
            className:
                "flex justify-between text-xs uppercase tracking-widest",
        },
        [
            jd.span(
                {
                    className: "text-gray-500",
                },
                [label]
            ),


            jd.span(
                {
                    className:
                        value === "ACTIVE"
                            ? "text-green-400"
                            : value === "RECRUIT"
                                ? "text-yellow-300"
                                : "text-cyan-300",
                },
                [value]
            ),
        ]
    )

}