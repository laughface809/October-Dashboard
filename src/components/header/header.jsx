import React from "react"
import ChangePhoto from "./change-photo"
import http from '../../helpers/axios-helper'

export default function Header({
  lang,
  setSidebarModel,
  langs
}){
    const [language, setLanguage] = React.useState(false)
    const [profile, setProfile] = React.useState(false)
    const [targetPhoto, setTargetPhoto]  = React.useState('')
    const [userPic, setUserPic] = React.useState('default.png')

    const refs = React.useRef({})

    React.useEffect(() => {
        function handler(event) {
            if(event.target.id !== "lang-en" &&
            event.target.id !== "lang-id" &&
            event.target.id !== "lang-fr" &&
            !refs.current.modalRef.current?.contains(event.target)) {
              setLanguage(false)
            }
            if(event.target.id !== "change-photo" && event.target.id !== "sign-out" && !refs.current.profileRef.current?.contains(event.target)) {
              setProfile(false)
            }
            if(event.target.id === "bg-Outside") {
              setTargetPhoto('')
            }
        }
        async function getImageProfile(){
          await http.get('/profile-picture').then((res) => {
            if(res.statusText === "OK"){
              setUserPic(res.data.picture)
            }
          }).catch((e) => {
          })
        }
        getImageProfile()
        window.addEventListener('mousedown', handler)
        return () => window.removeEventListener('mousedown', handler)
    }, [])

    const handleLanguage = (e) => {
      lang.changeLanguage(e);
    }

    const getSignout = () => {
      localStorage.clear();
      window.open(`${window.location.origin}`, '_self')
    }

    const handlePhoto = () => {
      setProfile(false);
      refs.current.fileRef.click()
    }

    function onselectPhoto(e) {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader()
        reader.addEventListener('load', () =>
        setTargetPhoto(reader.result?.toString() || ''),
        )
        reader.readAsDataURL(e.target.files[0])
      }
    }

    return(
        <React.Fragment>

            <ChangePhoto 
            refs={refs}
            targetPhoto={targetPhoto}
            language={langs}
            setUserPic={(e) => setUserPic(e)}
            setTargetPhoto={(e) => setTargetPhoto(e)}
            />

            {/* UPLOAD */}
            <input ref={ref => (refs.current['fileRef'] = ref)} type="file" accept="image/*" hidden onChange={
              (e) => {
                onselectPhoto(e);
                e.target.value=null
              }
              } />

            <nav class="flex-shrink-0 bg-white">
            <div class="mx-auto px-2 sm:px-4 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                <div class="flex items-center px-2 lg:px-0 xl:w-72">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-auto" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                  </div>
                </div>
                <div class="flex lg:hidden">
                  <button onClick={() => setSidebarModel((prev) => !prev)} type="button" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div class="hidden lg:block lg:w-80">
                  <div class="flex items-center justify-end">
                    <div class="relative flex-shrink-0">
                      <div>
                        <svg ref={ref => (refs.current['modalRef'] = ref)} onClick={() => setLanguage((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex text-gray-800 ml-4 cursor-pointer">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                      </div>
                      <div hidden={!language} class="origin-top-right absolute z-10 right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <t onClick={() => {handleLanguage('en');setLanguage(false)}} class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-[#0088d4] hover:text-white" role="menuitem" tabindex="-1" id="lang-en">English</t>
                        <t onClick={() => {handleLanguage('id');setLanguage(false)}} class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-[#0088d4] hover:text-white" role="menuitem" tabindex="-1" id="lang-id">Indonesia</t>
                        <t onClick={() => {handleLanguage('fr');setLanguage(false)}} class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-[#0088d4] hover:text-white" role="menuitem" tabindex="-1" id="lang-fr">French</t>
                      </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 flex text-gray-800 ml-4 cursor-pointer">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 relative flex-shrink-0">
                      <div>
                        <button type="button" class="bg-gray-400 flex text-sm rounded-full text-white focus:outline-none focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                          <span class="sr-only">Open user menu</span>
                          <img ref={ref => (refs.current['profileRef'] = ref)} onClick={() => setProfile((prev) => !prev)} class="h-8 w-8 rounded-full" src={`http://localhost:8081/upload/${userPic}`} alt="" />
                        </button>
                      </div>
                      <div hidden={!profile} class="origin-top-right absolute z-10 right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <t id="change-photo" onClick={() => handlePhoto()} class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-[#0088d4] hover:text-white" role="menuitem" tabindex="-1">{langs("popup_profile_1")}</t>
                        <t id="sign-out" onClick={() => getSignout()} class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-[#0088d4] hover:text-white" role="menuitem" tabindex="-1">{langs("popup_profile_2")}</t>
                      </div>
                    </div>
                    <div class="flex">
                      <a href="#/" class="px-3 py-2 rounded-md text-md font-medium text-gray-600 hover:text-gray-900">Bima Sena</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3">
                <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Overview</a>
                <a href="#/" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Transactions</a>
              </div>
              {/* <div class="pt-4 pb-3 border-t border-indigo-800">
                <div class="px-2">
                  <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"></a>
                  <a href="#/" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"></a>
                  <a href="#/" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"></a>
                </div>
              </div> */}
            </div>
          </nav>
        </React.Fragment>
    )
}