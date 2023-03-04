import React from "react"

export default function Sider({
    lang
}){
    return(
        <div>
            <div class="items-center justify-between flex">
                <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("sider_1")}</h2>
                <div>
                    <a href="#/" class="ml-3 inline-flex items-center px-4 py-2 text-sm lg:text-xs 2xl:text-sm font-medium rounded-md shadow-sm text-white bg-[#0088d4] focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" />
                        </svg>
                        {lang("sider_2")}
                    </a>
                </div>
            </div>

            {/* CARDS */}
            <div class="md:h-72 min-[1800px]:h-96 xl:h-80 h-96">
                <div class="p-12 sm:p-4 min-[1800px]:p-12 xl:p-6 pb-0 min-[1800px]:pb-0 xl:pb-2">
                <div class="mt-4 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] bg-white">

                    <div class="items-baseline justify-between flex px-8 h-36 rounded-t-2xl bg-cover" style={{backgroundImage: `linear-gradient(90deg, rgba(145, 237, 255, 0.1) 0%, rgba(188, 189, 189, 0.3) 40%, rgba(255, 255, 255, 0.2) 100%), url("https://www.rainforesttrust.org/app/uploads/2021/10/Rainforest-Aerial-Background2-aspect-ratio-1440-780.jpg")`}}>
                    </div>

                    </div>
                </div>

                {/* CARDS 2 */}
                <div class="p-8 sm:p-0 min-[1800px]:p-8 xl:p-2 pb-0 relative top-[-10rem]">
                <div class="mt-4 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] bg-white">

                    <div class="items-baseline justify-between flex px-8 h-36 rounded-t-2xl bg-cover" style={{backgroundImage: `linear-gradient(90deg, rgba(145, 237, 255, 0.1) 0%, rgba(188, 189, 189, 0.3) 40%, rgba(255, 255, 255, 0.2) 100%), url("https://www.rainforesttrust.org/app/uploads/2021/10/Rainforest-Aerial-Background2-aspect-ratio-1440-780.jpg")`}}>
                        <h2 class="text-lg leading-6 font-medium text-[#434343] flex text-white items-center mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1 text-white">
                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                        </svg>
                        {lang("sider_3")}</h2>
                    </div>

                    <div class="items-center justify-between flex px-8 py-4">
                        <h2 class="text-lg sm:text-sm 2xl:text-lg leading-6 font-medium text-[#434343]">
                            Bima Sena</h2>
                        <h2 class="text-lg sm:text-sm 2xl:text-lg leading-6 font-medium text-[#434343] flex items-center">0018 8982 9899
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                    </h2>
                    </div>

                    </div>
                </div>
            </div>

            {/* SECTION 2 */}

            <div class="items-center justify-between flex">
                <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("sider_4")}</h2>
            </div>

            <div class="mt-8">
                <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    
                    <a href="#/" class="text-gray-900 rounded-l-xs group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-2 2xl:px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                        <span>{lang("sider_5")}</span>
                    </a>
                    
                    <a href="#/" class="text-gray-900 rounded-l-xs bg-gray-200 group relative min-w-0 flex-1 overflow-hidden py-3 px-2 2xl:px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                        <span>{lang("sider_6")}</span>
                    </a>
                    
                    <a href="#/" class="text-gray-900 rounded-l-xs group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-2 2xl:px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                        <span>{lang("sider_7")}</span>
                    </a>
                    
                </nav>
            </div>

            <div class="flex mt-8 justify-between gap-4">
                <div class="w-2/4">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_8")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full" value={`🍽️ ${lang("sider_9")}`} />
                </div>

                <div class="w-2/4">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_10")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full" value={`💵 ${lang("sider_11")}`} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-[#434343] h-6 w-6 relative top-[-2.5rem] cursor-pointer ml-auto right-[5%]">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <div class="flex mt-2 justify-between gap-4">
                <div class="w-3/5">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_12")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full" value="Rp100.000,00" />
                </div>

                <div class="w-2/5">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_13")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full" value="IDR" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-[#434343] h-6 w-6 relative top-[-2.5rem] cursor-pointer ml-auto right-[5%]">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <div class="flex mt-2 justify-between gap-4">
                <div class="w-2/4">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_14")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full text-center" value="Aug 10, 2022" />
                </div>

                <div class="w-2/4">
                    <p class="text-gray-700 font-medium text-sm">{lang("sider_15")}</p>
                    <input class="text-gray-700 font-medium text-sm bg-gray-200 mt-2 rounded-lg py-4 px-4 w-full text-center" value="10:30 AM" />
                </div>
            </div>
            
        </div>
    )
}