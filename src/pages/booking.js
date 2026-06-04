import { jd } from "../jd.config"
import BookingForm from "../components/booking/bookingForm"
import Footer from "../components/footer"





export default function Booking() {
    return jd.fragment([
        jd.div(
            {
                className:
                    "bg-[#111827]",
            }, [
            BookingForm(),
            jd.section(
                {
                    className:
                        "bg-[#161524] px-6 md:px-12 lg:px-20 py-20",
                },
                [
                    jd.div(
                        {
                            className:
                                "max-w-5xl mx-auto",
                        },
                        [
                            // HEADER
                            // FAQ LIST
                            jd.section(
                                {
                                    className:
                                        "bg-[#161524] px-6 md:px-12 lg:px-20 py-24",
                                },
                                [
                                    jd.div(
                                        {
                                            className:
                                                "max-w-5xl mx-auto",
                                        },
                                        [
                                            jd.div(
                                                {
                                                    className: "text-center mb-14",
                                                },
                                                [
                                                    jd.p(
                                                        {
                                                            className:
                                                                "text-cyan-400 text-xs tracking-[0.4em] uppercase",
                                                        },
                                                        ["SYSTEM FAQ NODE"],
                                                    ),
                                                    jd.h2(
                                                        {
                                                            className:
                                                                "text-4xl font-bold text-yellow-300 mt-3 tracking-[0.2em]",
                                                        },
                                                        ["ACCESS TERMINAL HELP"],
                                                    ),
                                                    jd.p(
                                                        {
                                                            className:
                                                                "text-gray-400 mt-4 text-sm max-w-2xl mx-auto",
                                                        },
                                                        [
                                                            "Database operativo. Espandi un nodo per visualizzare informazioni classificate sulle missioni.",
                                                        ]
                                                    ),
                                                ]
                                            ),

                                            jd.div(
                                                {
                                                    className: "space-y-4",
                                                },
                                                [
                                                    faqItemTech(
                                                        "DURATA MISSIONE",
                                                        "60 MINUTI STANDARD / 75 MINUTI ADVANCED"
                                                    ),
                                                    faqItemTech(
                                                        "REQUISITI TEAM",
                                                        "MINIMO 2 OPERATORI / MAX VARIABILE PER STANZA"
                                                    ),
                                                    faqItemTech(
                                                        "LIVELLO SICUREZZA",
                                                        "SISTEMA COMPLETAMENTE CONTROLLATO / USCITA SEMPRE DISPONIBILE"
                                                    ),
                                                    faqItemTech(
                                                        "ACCESSO PRINCIPIANTI",
                                                        "TUTTE LE MISSIONI SUPPORTANO LIVELLO BASE"
                                                    ),
                                                    faqItemTech(
                                                        "ESPERIENZA NECESSARIA",
                                                        "NESSUNA FORMAZIONE RICHIESTA / SIMULAZIONE GUIDATA"
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ]
                    ),
                ]
            ),

            // ----------------------------------------------------
            // SEZIONE CONTATTI E GEOLOCALIZZAZIONE (AGGIUNTA)
            // ----------------------------------------------------
            jd.section(
                {
                    className: "my-25 p-6 rounded-lg border border-cyan-500/20 bg-[#111827] shadow-[0_0_15px_rgba(34,211,238,0.05)] font-mono text-xs "
                },
                [
                    // INTESTAZIONE SEZIONE
                    jd.div({ className: "flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-3" }, [
                        jd.h3({ className: "uppercase tracking-widest text-cyan-400 font-bold" }, [
                            "// RILEVAMENTO COORDINATE BASE & CONTATTI"
                        ]),
                        jd.span({ className: "text-[10px] text-gray-500 hidden sm:inline" }, ["COM_LINK_SECURE_v2.4"])
                    ]),

                    // GRID A DUE COLONNE (Mappa a sinistra, Contatti a destra)
                    jd.div({ className: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [

                        // COLONNA 1 & 2: VERMAPPA IN DISGUISE SCI-FI
                        jd.div({ className: "lg:col-span-2 relative rounded border border-cyan-500/30 overflow-hidden group" }, [
                            // Iframe reale con filtri Tailwind per renderlo dark/cyberpunk
                            jd.iframe({
                                title: "Mappa sede Escape room",
                                src: "https://maps.google.com/maps?q=Milano&t=&z=13&ie=UTF8&iwloc=&output=embed",
                                className: "w-full h-full grayscale invert hue-rotate-180 contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-300",
                                style: "border: 0",
                                allowfullscreen: true,
                                loading: "lazy"
                            })
                        ]),

                        // COLONNA 3: INFORMAZIONI DI CONTATTO TRADOTTE IN STILE TERMINALE
                        jd.div({ className: "flex flex-col justify-between space-y-6 text-gray-300" }, [

                            // Blocco Località
                            jd.div({}, [
                                jd.span({ className: "text-yellow-300 block uppercase tracking-wider mb-1 font-bold" }, ["[ LOCAZIONE FISICA ]"]),
                                jd.p({ className: "text-gray-400 leading-relaxed pl-2 border-l border-yellow-300/30" }, [
                                    "Via del Cyber-Spazio 404,",
                                    jd.br(),
                                    "20100 Milano (MI) - Settore 4"
                                ])
                            ]),

                            // Blocco Comunicazioni (Telefono & Email)
                            jd.div({}, [
                                jd.span({ className: "text-cyan-400 block uppercase tracking-wider mb-1 font-bold" }, ["[ CANALI DI COMUNICAZIONE ]"]),
                                jd.div({ className: "space-y-1 pl-2 border-l border-cyan-400/30 text-gray-400" }, [
                                    jd.p({}, ["(Tel): +39 02 9876543"]),
                                    jd.p({}, ["a-space-hub@gmail.com"])
                                ])
                            ]),

                            // Blocco Note Operative
                            jd.div({ className: "border border-cyan-400/20 bg-[#111827] p-6" }, [
                                jd.span({ className: "text-yellow-500 block uppercase tracking-wider mb-1" }, ["// DIRETTIVE ACCESSO"]),
                                jd.p({ className: "text-cyan-500" }, [
                                    "Le trasmissioni sono attive 24/7. Per l'accesso fisico alla struttura, presentarsi al checkpoint 15 minuti prima dell'orario stabilito."
                                ])
                            ])

                        ])
                    ])
                ]
            ),

            Footer()

        ]),

    ])
}


function faqItemTech(question, answer) {
    return jd.div(
        {
            className:
                "relative group border border-cyan-400/20 bg-[#0f172a]/60 backdrop-blur-md p-5 transition hover:border-cyan-400/60",
        },
        [
            // glow background
            jd.div({
                className:
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.12),transparent_60%)]",
            }),

            jd.div(
                { className: "relative z-10 flex justify-between items-start gap-6" },
                [
                    jd.div(
                        {},
                        [
                            jd.p(
                                {
                                    className:
                                        "text-cyan-400 text-[11px] tracking-[0.3em] uppercase",
                                },
                                [question]
                            ),
                            jd.p(
                                {
                                    className:
                                        "text-gray-300 text-sm mt-2",
                                },
                                [answer]
                            ),
                        ]
                    ),

                    // tech indicator
                    jd.div(
                        {
                            className:
                                "w-2 h-2 mt-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse",
                        },
                        []
                    ),
                ]
            ),
        ]
    )
}