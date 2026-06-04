import { jd } from "../jd.config"

export function RootLayout({ outlet }) {
  return jd.div({}, [
    // Navbar
    jd.nav({ className: "sticky top-0 z-50  navbar bg-[#161524] border-b shadow-[0_0_15px_#00e5ff] tracking-widest uppercase shadow-sm text-cyan-500 hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#ffe600] transition-all" }, [
      jd.div({ className: "flex justify-between items-center relative z-10" }, [
        jd.div({ className: "px-20" }, [
          jd.div(
            {
              className:
                "flex items-center gap-2 text-cyan-300 font-mono tracking-[0.4em]",
            },
            [
              jd.span({
                className:
                  "w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(253,224,71,.8)]",
              }),

              jd.span({}, ["ROOMSYS"]),
            ]
          )
        ]),
        jd.div({ className: "tracking-widest px-2 font-medium" }, [
          jd.ul({ className: "menu menu-horizontal px-1x" }, [
            jd.li({}, [
              jd.routerLink(
                ({ isExact }) => ({
                  href: "/",
                  className: isExact ? "underline" : "",
                  "aria-current": isExact ? "page" : undefined,
                }),
                ["Home"],
              ),
            ]),
            jd.li({}, [
              jd.routerLink(
                ({ isExact }) => ({
                  href: "/rooms",
                  className: isExact ? "underline" : "",
                  "aria-current": isExact ? "page" : undefined,
                }),
                ["rooms"],
              ),
            ]),
            jd.li({}, [
              jd.routerLink(
                ({ isExact }) => ({
                  href: "/booking",
                  className: isExact ? "underline" : "",
                  "aria-current": isExact ? "page" : undefined,
                }),
                ["get mission"],
              ),
            ])
          ])
        ])

      ])
    ]),
    // Contenuto della pagina
    outlet,
  ])
}