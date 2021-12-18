import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Kbas() {

let location= useLocation()
const [KbaData, setKbaData] = useState(null)


    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setKbaData(data))
    }, [location.pathname]);


    console.log(location.pathname)







if(!KbaData) return null
console.log(KbaData)
    return (
        <div>
            <p>dddddd</p>
        </div>
    )
}

export default Kbas
