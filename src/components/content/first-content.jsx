import React from "react"

export default function FirstContent({
  lang
}){
    return(
        <div class="mt-4 rounded-2xl px-4 py-4 shadow-[0px_4px_7px_-3px_rgba(0,0,0,0.2)] bg-white">
                      <div>
                        <div class="items-center justify-between flex">
                          <h2 class="text-lg leading-6 font-medium text-[#434343]">{lang("content_first_1")}</h2>
                          <div>
                            <a href="#/" class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                              {lang("content_first_2")}
                            </a>
                            <a href="#/" class="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-[#0088d4] focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                              {lang("content_first_3")}
                            </a>
                            <a href="#/" class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                              {lang("content_first_4")}
                            </a>
                          </div>
                        </div>
                        <div class="mb-2 mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                          <div class="bg-[#0068a3] overflow-hidden shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] rounded-xl">
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="w-0 flex-1">
                                  <dl>
                                    <dt class="text-lg font-medium text-white truncate mt-2">{lang("content_first_5")}</dt>
                                    <dd>
                                      <div class="2xl:text-3xl text-xl font-medium text-white mt-11">Rp1.230.659.45</div>
                                    </dd>
                                    <dd class="my-4 place-items-center flex">
                                      <div class="text-sm font-medium text-white mr-1">20%</div>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                      </svg>

                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="bg-[#ef4444] overflow-hidden shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] rounded-xl">
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="w-0 flex-1">
                                  <dl>
                                    <dt class="text-lg font-medium text-[#f8e9ea] truncate mt-2">{lang("content_first_6")}</dt>
                                    <dd>
                                      <div class="2xl:text-3xl text-xl font-medium text-[#f8e9ea] mt-11">Rp3.540.659.45</div>
                                    </dd>
                                    <dd class="my-4 place-items-center flex">
                                      <div class="text-sm font-medium text-[#f8e9ea] mr-1">30%</div>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-[#f8e9ea] group-hover:text-[#f8e9ea]-500 mr-3 h-5 w-5">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clip-rule="evenodd" />
                                      </svg>
                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="bg-[#f1faff] overflow-hidden shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] rounded-xl">
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="w-0 flex-1">
                                  <dl>
                                    <dt class="text-lg font-medium text-[#04496e] truncate mt-2">{lang("content_first_7")}</dt>
                                    <dd>
                                      <div class="2xl:text-3xl text-xl font-medium text-[#04496e] mt-11">Rp7.130.229.45</div>
                                    </dd>
                                    <dd class="my-4 place-items-center flex">
                                      <div class="text-sm font-medium text-[#3c955f] mr-1">50%</div>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-[#3c955f] group-hover:text-white-500 mr-3 h-5 w-5">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                      </svg>

                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
    )
}