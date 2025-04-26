import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Home from "../pages/Home";
import Technology from "../pages/Technology";

export const routeConfigs = [
    {path:"/", label: "home", element: <Home/>},
    {path:"/destination", label: "destination", element: <Destination/>},
    {path:"/crew", label: "crew", element: <Crew/>},
    {path:"/technology", label: "technology", element: <Technology/>},
]