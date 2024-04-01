import * as React from "react";

//menuitem
import MenuItem from "./MenuItem"

export default function Index(){


    return (
        <section className=" w-[100%] xl:w-[16%] sticky">
            <h2 className="text-lg font-semibold mb-1">Categories</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-1 gap-2">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            </div>

        </section>
    )
}