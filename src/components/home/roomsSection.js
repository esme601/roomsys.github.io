import { jd } from "../../jd.config"
import rooms from "../../data/rooms.json";
import RoomCard from "./roomCard";

export default function RoomsSection() {
    return jd.section(
        {
            className:
                "bg-[#161524] px-6 md:px-12 lg:px-16 py-24",
        },
        [
            jd.div(
                {
                    className:
                        "flex items-start justify-between mb-12 flex-wrap gap-6",
                },
                [
                    jd.div(
                        {},
                        [
                            jd.h2(
                                {
                                    className:
                                        "text-3xl md:text-5xl text-yellow-300 tracking-[0.2em] font-bold",
                                },
                                ["OPERAZIONI DISPONIBILI"]
                            ),

                            jd.p(
                                {
                                    className:
                                        "mt-2 text-[11px] tracking-[0.3em] text-cyan-400",
                                },
                                [
                                    `STATUS: ${rooms.slice(0, 3).length} / ${rooms.length} MISSIONS DISPLAYED`,
                                ]
                            ),
                        ]
                    ),

                    jd.routerLink(
                        {
                            href: "/rooms",
                            className:
                                "px-6 py-2 border border-cyan-400 text-cyan-300 uppercase tracking-[0.3em] text-sm hover:bg-cyan-400 hover:text-black transition shadow-[0_0_15px_rgba(34,211,238,.15)]",
                        },
                        [">> VIEW ALL <<"]
                    ),
                ]
            ),

            jd.div(
                {
                    className:
                        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
                },
                rooms.slice(0, 3).map(room => RoomCard(room))
            ),
        ]
    )
}