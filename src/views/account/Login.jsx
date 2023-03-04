import React, { useState } from 'react'

import http from '../../helpers/axios-helper'

export const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  
  const HOST = window.location.host

  const domain = HOST.split('.', 1)

  const handleSubmit = (e) => {
    http
      .post('/login', {
        email: email,
        password: password,
        rememberMe: rememberMe
      })
      .then(function (result) {
        if (result.data.token) {
          localStorage.setItem('token', result.data.token)
          window.location = '/'
        }
      })
  }

  return (
    <>
    {/* <Link style={{ color: 'blue' }} to={`/register`}>register</Link> */}
      <div class="min-h-full h-screen bg-lightgray">
        <nav class="bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block lg:hidden h-8 w-auto" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                  <img class="hidden lg:block h-8 w-auto" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                </div>
                <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  <a href="#/" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page"> Dashboard </a>

                  <a href="#/" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Team </a>

                  <a href="#/" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Projects </a>

                  <a href="#/" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Calendar </a>
                </div>
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:items-center">
                <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">View notifications</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                <div class="ml-3 relative">
                  <div>
                    <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.416/static/media/Search.fcd456b5.svg" alt="" />
                  </div>

                  <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"> 
                      <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.416/static/media/PageBreadcrumbs.f3d0f4f2.svg" alt="" />
                    </a>

                    <a href="#/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">
                      <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.416/static/media/PageBreadcrumbs.f3d0f4f2.svg" alt="" />
                    </a>

                    <a href="#/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">
                      <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.416/static/media/PageBreadcrumbs.f3d0f4f2.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex items-center sm:hidden">
                <button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="pt-2 pb-3 space-y-1">
              <a href="#/" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page"> Dashboard </a>

              <a href="#/" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"> Team </a>

              <a href="#/" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"> Projects </a>

              <a href="#/" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"> Calendar </a>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-200">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                  <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.416/static/media/Search.fcd456b5.svg" alt="" />
                </div>
                
              </div>
              <div class="mt-3 space-y-1">
                <a href="#/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"> Your Profile </a>

                <a href="#/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"> Settings </a>

                <a href="#/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"> Sign out </a>
              </div>
            </div>
          </div>
        </nav>

        <div class="py-10">
          <header>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="px-4 py-8 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* POPUP */}
      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-full flex flex-col justify-center pb-12 sm:px-6 lg:px-8 h-screen items-center">

                  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-4/5">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 rounded">
                      <form class="space-y-6" onSubmit={(e) => {e.preventDefault();handleSubmit()}}>
                        <div class="items-center justify-between">
                          <img class="mx-auto h-12 w-auto" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 capitalize">Sign in to <t class="text-indigo-600 hover:text-indigo-700">{domain}</t></h2>
                        </div>
                        <div>
                          <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                          <div class="mt-1">
                            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                          </div>
                        </div>

                        <div>
                          <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                          <div class="mt-1">
                            <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                          </div>
                        </div>

                        <div>
                          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                        </div>
                      </form>

                      <div class="mt-6">
                        <div class="relative">
                          <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                          </div>
                          <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500"> example account </span>
                          </div>
                        </div>

                        <div class="relative mt-2">
                          <p class="text-gray-500 text-center">admin@admin.com | admin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
    </>
  )
}