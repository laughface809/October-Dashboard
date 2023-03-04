import React from "react"

export default function SecondContent({
  lang
}){
    return(
        <div class="rounded-lg bg-gray-200 overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mt-1">
                      <div class="mt-4 rounded-2xl px-8 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] bg-white">

                        <div class="items-center justify-between flex">
                          <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("content_second_1")}</h2>
                        </div>

                        <div class="items-center mt-8 flex justify-evenly">
                          <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-[#0088d4] w-1/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-3.5">
                              <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd" />
                            </svg>
                          </span>

                          <div class="w-4/5">
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">{lang("content_second_2")}</h2>
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">Rp10.231.002,00/Rp20.872.000,00</h2>
                            <div class="m-1 mt-2" aria-hidden="true">
                              <div class="bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-2 bg-[#434343] rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="items-center mt-8 flex justify-evenly">
                          <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-[#0088d4] w-1/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-3.5">
                              <path d="M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z" />
                            </svg>
                          </span>

                          <div class="w-4/5">
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">{lang("content_second_3")}</h2>
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">Rp5.231.002,00/Rp20.872.000,00</h2>
                            <div class="m-1 mt-2" aria-hidden="true">
                              <div class="bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-2 bg-[#434343] rounded-full w-1/4"></div>
                              </div>
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
                      
                      <div class="mt-4 rounded-2xl px-8 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] bg-white">

                        <div class="items-center justify-between flex">
                          <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("content_second_5")}</h2>
                        </div>

                        <div class="items-center mt-8 flex justify-evenly">
                          <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-[#0088d4] w-1/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-3.5">
                              <path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z" clip-rule="evenodd" />
                            </svg>
                          </span>

                          <div class="w-4/5">
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">{lang("content_second_6")}</h2>
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">Rp3.231.002,00/Rp3.872.000,00</h2>
                            <div class="m-1 mt-2" aria-hidden="true">
                              <div class="bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-2 bg-[#434343] rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="items-center mt-8 flex justify-evenly">
                          <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-[#0088d4] w-1/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 inline-block h-14 w-14 h-full w-full p-3.5">
                              <path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd" />
                            </svg>
                          </span>

                          <div class="w-4/5">
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">{lang("content_second_7")}</h2>
                            <h2 class="text-sm leading-6 font-medium text-[#434343] m-1">Rp5.231.002,00/Rp20.872.000,00</h2>
                            <div class="m-1 mt-2" aria-hidden="true">
                              <div class="bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-2 bg-[#434343] rounded-full w-1/4"></div>
                              </div>
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

                    </div>
    )
}