import React from "react"
import FirstThirdContent from "./third-content/first"
import SecondThirdContent from "./third-content/second"

export default function ThirdContent({
    lang
}){
    return(
        <div class="rounded-lg bg-gray-200 overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mt-1">
            <FirstThirdContent lang={lang} />
            <SecondThirdContent lang={lang} />
        </div>
    )
}