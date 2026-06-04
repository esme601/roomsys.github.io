// PULSANTE PER LA STANZA CYAN GLOW
 jd.routerLink({
    href: `/rooms/${room.slug}`,
    className:
        "btn rounded-none relative overflow-hidden bg-transparent border border-cyan-400 text-cyan-300 px-5 py-2 mt-6 text-xs tracking-[0.3em] transition duration-300 hover:text-black hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]",
}, ["[ACCESS MISSION]"]);




// PULSANTE PER LA STANZA YELLOW GLOW

jd.routerLink({
    href: `/rooms/${room.slug}`,
    className:
        "btn rounded-none relative overflow-hidden bg-transparent border border-yellow-400 text-yellow-300 px-5 py-2 mt-6 text-xs tracking-[0.3em] transition duration-300 hover:text-black hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]",
}, ["[ELITE MISSION]"]),




// PULSANTE PER STANZA CYAN NO GLOW

jd.routerLink({
    href: `/rooms/${room.slug}`,
    className:
        "btn rounded-none bg-transparent border border-cyan-400 text-cyan-300 px-5 py-2 mt-6 text-xs tracking-[0.3em] transition duration-300 hover:bg-cyan-400 hover:text-black",
}, ["[VIEW MISSION]"]),





// PULSANTE PER STANZA YELLOW NO GLOW 

jd.routerLink({
    href: `/rooms/${room.slug}`,
    className:
        "btn rounded-none bg-transparent border border-yellow-400 text-yellow-300 px-5 py-2 mt-6 text-xs tracking-[0.3em] transition duration-300 hover:bg-yellow-400 hover:text-black",
}, ["[VIEW ELITE]"])




