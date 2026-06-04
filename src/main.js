import "./style.css";
import { createRoot } from "just-dom";
import { jd } from "./jd.config.js";
import {
  applyTheme,
  readStoredTheme,
  themeToggleButton,
} from "./components/theme-toggle";
import { defineRoutes } from "@just-dom/router"
import { RootLayout } from "./components/root-layout.js"
import Homepage from "./pages/homepage.js"
import Rooms from "./pages/rooms.js";
import Booking from "./pages/booking.js";
import RoomDetail from "./pages/roomDetail.js";


applyTheme(readStoredTheme());


const routes = defineRoutes([
  {
    layout: RootLayout,
    children: [
      { index: true, element: Homepage },
      { 
        children: [
          {
            path: "rooms",
            element: Rooms,
            children: [
              {
                path: `:id`,
                element: (props) => RoomDetail(props),
              },
            ],
          },
          {
            path: "booking",
            element: Booking,
          }
        ],
      },
      { path: "*", element: () => jd.h1({}, ["Not found"]) }, // page 404 
    ],
  },
])

createRoot("app", jd.router(routes))
