import * as React from "react"

//icons
import {FcInTransit} from "react-icons/fc"


export default function Index(){


    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 content-center shadow-md rounded">
            <div className="flex justify-center items-center">
            <FcInTransit size="60"/>
            </div>
           
            <div className="flex justify-center items-center">
                <h3>Vehicles</h3>
            </div>
        </div>
    )
}