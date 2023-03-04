import React from "react";

export default function FirstThirdContent({
    lang
}){
    return(
        <div class="mt-4 rounded-2xl px-8 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] bg-white">

                        <div class="items-center justify-between flex">
                          <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("content_third_1")}</h2>
                        </div>

                        {/* FIRST LIST */}
                        <div>
                            <div class="items-center justify-between flex">
                            <p class="text-sm leading-6 font-medium text-[#434343] mt-8">{lang("content_third_2")}</p>
                            </div>

                            <div class="items-center mt-2 flex justify-between">
                                <div class="flex items-center">
                                    <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-[#0088d4] mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-1">
                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="text-sm leading-5 font-medium text-[#434343]">{lang("content_third_3")} Vaa <br/> <t class="font-thin text-xs">{lang("content_third_4")}</t></p>
                                    </div>
                                </div>

                            <div>
                                <h2 class="text-xl leading-6 font-medium text-[#434343] m-1">Rp100.000.00</h2>
                            </div>
                            </div>

                            <div class="items-center mt-2 flex justify-between">
                                <div class="flex items-center">
                                    <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-[#ef4444] mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-1">
                                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="text-sm leading-5 font-medium text-[#434343]">{lang("content_third_3")} Vaa <br/> <t class="font-thin text-xs">{lang("content_third_4")}</t></p>
                                    </div>
                                </div>

                            <div>
                                <h2 class="text-xl leading-6 font-medium text-[#434343] m-1">Rp100.000.00</h2>
                            </div>
                            </div>
                        </div>
                        
                        {/* SECOND LIST */}

                        <div>
                            <div class="items-center justify-between flex">
                            <p class="text-sm leading-6 font-medium text-[#434343] mt-8">{lang("content_third_5")}</p>
                            </div>

                            <div class="items-center mt-2 flex justify-between">
                                <div class="flex items-center">
                                    <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-[#0088d4] mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-1">
                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="text-sm leading-5 font-medium text-[#434343]">{lang("content_third_3")} Vaa <br/> <t class="font-thin text-xs">{lang("content_third_4")}</t></p>
                                    </div>
                                </div>

                            <div>
                                <h2 class="text-xl leading-6 font-medium text-[#434343] m-1">Rp100.000.00</h2>
                            </div>
                            </div>

                            <div class="items-center mt-2 flex justify-between">
                                <div class="flex items-center">
                                    <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-[#ef4444] mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-1">
                                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="text-sm leading-5 font-medium text-[#434343]">{lang("content_third_3")} Vaa <br/> <t class="font-thin text-xs">{lang("content_third_4")}</t></p>
                                    </div>
                                </div>

                            <div>
                                <h2 class="text-xl leading-6 font-medium text-[#434343] m-1">Rp100.000.00</h2>
                            </div>
                            </div>
                        </div>

                        <div class="items-center justify-between flex mt-6">
                          <h2 class="text-sm leading-6 font-medium text-[#434343]">{lang("content_second_4")}</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-[#434343] h-6 w-6">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                          </svg>
                        </div>

                      </div>
    )
}