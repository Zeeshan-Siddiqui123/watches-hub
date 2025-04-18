import React from "react"
import Couples from "./Screens/Couples";
import Index from "./Screens/Index";
import Mens from "./Screens/Mens";
import Womens from "./Screens/Womens";


export const routes = [
    {
        path: "/",
        screen: <Index/>,
        label: "Home",
    },
    {
        path: "/mens",
        screen: <Mens/>,
        label: "Mens",
    },
    {
        path: "/womens",
        screen: <Womens/>,
        label: "Womens",
    },
    {
        path: "/couples",
        screen: <Couples/>,
        label: "Couples",
    },
 
]