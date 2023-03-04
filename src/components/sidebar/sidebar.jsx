import React from "react"

export default function SideBar({
  lang,
  sidebarModel
}){
    
    return(
        <nav class={`${sidebarModel ? 'block' : 'hidden'} lg:block`} aria-label="Sidebar">
                  <div>
                    <a href="#/" class="text-[#00466c] hover:bg-gray-50 hover:text-gray-900 group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5 opacity-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                      {lang("sider_0")}<br/>{lang("sider_0_1")}
                    </a>

                    <a href="#/" class="bg-[#0088d4] text-white group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-white group-hover:text-white-500 mr-3 h-5 w-5">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
                    </svg>

                      {lang("sidebar_menu_1")}
                    </a>

                    <a href="#/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 group-hover:text-gray-500 mr-3 h-5 w-5">
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>

                      {lang("sidebar_menu_2")}
                    </a>

                    <a href="#/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 group-hover:text-gray-500 mr-3 h-5 w-5">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                      {lang("sidebar_menu_3")}
                    </a>

                    <a href="#/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 group-hover:text-gray-500 mr-3 h-5 w-5">
                      <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd" />
                    </svg>
                      {lang("sidebar_menu_4")}
                    </a>

                    <a href="#/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-8 py-8 text-lg font-medium border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 group-hover:text-gray-500 mr-3 h-5 w-5">
                      <path fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>

                      {lang("sidebar_menu_5")}
                      
                    </a>

                  </div>

                  {/* UPGRADE */}
                  <div class="min-[1800px]:p-12 p-3 sm:p-16 xl:p-3">
                    <div class="overflow-hidden shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] rounded-xl" style={{backgroundImage: 'linear-gradient(145deg, rgba(0,136,212,1) 0%, rgba(0,64,99,1) 100%)'}}>
                        <div class="p-5">
                          <div class="flex items-center">
                            <div class="w-0 flex-1">
                              <dl class="text-center">
                                <h2 class="text-sm leading-6 font-medium text-white m-1">{lang("premium_sidebar")}</h2>
                                <div class="px-8">
                                  <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white w-1/4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <h2 class="text-sm leading-6 font-sm text-white m-1 w-3/4">{lang("premium_sidebar_1")}</h2>
                                  </div>
                                  <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white w-1/4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <h2 class="text-sm leading-6 font-sm text-white m-1 w-3/4">{lang("premium_sidebar_2")}</h2>
                                  </div>
                                  <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white w-1/4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <h2 class="text-sm leading-6 font-sm text-white m-1 w-3/4">{lang("premium_sidebar_3")}</h2>
                                  </div>
                                  <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white w-1/4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <h2 class="text-sm leading-6 font-sm text-white m-1 w-3/4">{lang("premium_sidebar_4")}</h2>
                                  </div>
                                  <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white w-1/4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <h2 class="text-sm leading-6 font-sm text-white m-1 w-3/4">{lang("premium_sidebar_5")}</h2>
                                  </div>
                                </div>

                                
                              </dl>
                            </div>
                          </div>

                          <div class="text-center my-5">
                            <a href="#/" class="items-center px-8 py-3 text-sm font-medium rounded-md shadow-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            {lang("premium_sidebar_pro")}
                            </a>
                          </div>
                          
                        </div>
                      </div>
                  </div>

                </nav>
    )
}