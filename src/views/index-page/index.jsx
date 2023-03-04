import React from "react";
import { handleRegister } from "../../helpers/register";

export default function IndexPage({
    domain,
    setDomain,
    navigate
}){
    const [visible, setVisible] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const [createAccount, setCreateAccount] = React.useState(false);

    const [valueEmail, setValueEmail] = React.useState("");
    const [valuePassword, setValuePassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [valueDomain, setValueDomain] = React.useState("");

    const handleQuit = () => {
        setLogin(false)
        setCreateAccount(false)
        setValueEmail('')
        setValuePassword('')
        setConfirmPassword('')
        setValueDomain('')
        setDomain('')
    }

    function useOutsideAlerter(ref) {
        React.useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    handleQuit()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = React.useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <React.Fragment>

            {/* POPUP */}
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{display: login ? '' : 'none'}}>
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div ref={wrapperRef}  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-full">
                            <button onClick={() => handleQuit()} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-gray-900">
                                    {createAccount ? 'Register Account' : `Let's find your domain`}
                                </h3>
                                <form onSubmit={(e) => {
                                        if(createAccount){
                                            if(valuePassword === confirmPassword){
                                                handleRegister(
                                                    valuePassword,
                                                    valueDomain,
                                                    valueEmail,
                                                )
                                                e.preventDefault();navigate(valueDomain)
                                            }
                                            alert('password not match!')
                                            e.preventDefault();
                                            return
                                        }
                                        e.preventDefault();navigate(domain)
                                    }} 
                                    class="space-y-6" action="#">
                                    {createAccount ? 
                                    <>
                                        <div>
                                            <input onChange={(e) => setValueEmail(e.target.value)} value={valueEmail} 
                                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 outline-0" 
                                            placeholder="Enter your email.." required type="email" />
                                        </div>
                                        <div>
                                            <input onChange={(e) => setValuePassword(e.target.value)} value={valuePassword} 
                                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 outline-0" 
                                            placeholder="Enter your password.." required type="password" />
                                        </div>
                                        <div>
                                            <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} 
                                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 outline-0" 
                                            placeholder="Enter confirm password.." required type="password" />
                                        </div>
                                        <div>
                                            <input onChange={(e) => setValueDomain(e.target.value)} value={valueDomain} 
                                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 outline-0" 
                                            placeholder="Enter your domain.." required />
                                        </div>
                                        <div class="flex justify-between">
                                            <t onClick={() => setCreateAccount(false)} class="text-sm text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Submit a domain</t>
                                        </div>
                                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Register
                                        </button>
                                    </>
                                    : 
                                    <>
                                        <div>
                                            <input onChange={(e) => setDomain(e.target.value)} value={domain} class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 outline-0" placeholder="Enter domain here.." required />
                                        </div>
                                        <div class="flex justify-between">
                                            <t onClick={() => setCreateAccount(true)} class="text-sm text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Create account</t>
                                        </div>
                                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Submit
                                        </button>
                                    </>
                                    }
                                </form>
                                <div class="mt-6">
                                    <div class="relative">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm">
                                        <span class="px-2 bg-white text-gray-500"> example domain </span>
                                    </div>
                                    </div>

                                    <div class="relative mt-2">
                                    <p class="text-gray-500 text-center">admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* HOME */}
            <div class="relative bg-white overflow-hidden">
                <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
                    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
                    <defs>
                        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                    </svg>
                </div>

                <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                    <div>
                    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div class="flex items-center flex-1">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            <a href="#/">
                            <span class="sr-only">Company</span>
                            <img class="h-8 w-auto sm:h-10" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                            </a>
                            <div class="-mr-2 flex items-center md:hidden">
                            <button onClick={() => setVisible(true)} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                {/* <!-- Heroicon name: outline/menu --> */}
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div class="hidden md:block md:ml-10 md:space-x-10">
                            <a href="#/" class="font-medium text-gray-500 hover:text-gray-900">Products</a>

                            <a href="#/" class="font-medium text-gray-500 hover:text-gray-900">For teams</a>

                            <a href="#/" class="font-medium text-gray-500 hover:text-gray-900">Support</a>
                        </div>
                        </div>
                        <div class="hidden md:block text-right">
                        <span onClick={() => setLogin(true)} class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                            <t class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 cursor-pointer"> Log in </t>
                        </span>
                        </div>
                    </nav>

                    {/* <!--
                        Mobile menu, show/hide based on menu open state.

                        Entering: "duration-150 ease-out"
                        From: "opacity-0 scale-95"
                        To: "opacity-100 scale-100"
                        Leaving: "duration-100 ease-in"
                        From: "opacity-100 scale-100"
                        To: "opacity-0 scale-95"
                    --> */}
                    {visible && 
                    <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <div>
                            <img class="h-8 w-auto" src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719" alt="" />
                            </div>
                            <div class="-mr-2">
                            <button type="button" onClick={() => {setVisible(false)}} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close main menu</span>
                                {/* <!-- Heroicon name: outline/x --> */}
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Products</a>

                            <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For teams</a>

                            <a href="#/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Support</a>

                        </div>
                        <t onClick={() => setLogin(true)} class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </t>
                        </div>
                    </div>
                    }
                    

                    </div>

                    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                            <span class="block text-gray-900">It’s possible</span>
                            <span class="block text-indigo-600 sm:px-4">with teamwork</span>
                            </span>
                        </h1>
                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Atlassian solutions are designed for all types of work. Make work flow across teams while connecting back to company goals,
                        Enable your dev, IT ops, and business teams to deliver great service experiences, and Run a world-class agile software company—from discovery to delivery and operations.
                        </p>
                        <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <p class="text-base font-medium text-gray-900">Be the first to know all about Atlassian Events!</p>
                            <form action="#" method="POST" class="mt-3 sm:flex">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email" id="email" class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300 border border-lightgray px-4" placeholder="Enter your email here" />
                            <button type="submit" class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">Submit</button>
                            </form>
                            <p class="mt-3 text-sm text-gray-500">
                            We care about the protection of your data. Read our &nbsp;
                            <a href="#/" class="font-medium text-gray-900 underline">Privacy Policy</a>.
                            </p>
                        </div>
                        </div>
                        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                            <defs>
                            <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                            </defs>
                            <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                            <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                        </svg>
                        <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">Watch our video to learn more</span>
                            <img class="w-full" src="https://wac-cdn.atlassian.com/dam/jcr:5943cdc2-12ed-49cb-be7d-0dbd30c7097a/hero_right_800x450px@1_5x.jpg?cdnVersion=789" alt="" />
                            <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                                <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                </svg>
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                    </main>
                </div>
                </div>

                {/* End Section */}
                <div>
                    <h2 class="sr-only">Our perks</h2>
                    <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                        <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div class="sm:flex">
                            <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                <img class="w-28 h-24" src="https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg" alt="" />
                            </div>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                            <h3 class="text-sm font-medium text-gray-900">Free delivery</h3>
                            <p class="mt-2 text-sm text-gray-500">Order now and you&#039;ll get delivery absolutely free. Well, it&#039;s not actually free, we just price it into the products. Someone&#039;s paying for it, and it&#039;s not us.</p>
                            </div>
                        </div>

                        <div class="sm:flex">
                            <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                <img class="w-28 h-24" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg" alt="" />
                            </div>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                            <h3 class="text-sm font-medium text-gray-900">10-year warranty</h3>
                            <p class="mt-2 text-sm text-gray-500">We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we&#039;ll stand behind it.</p>
                            </div>
                        </div>

                        <div class="sm:flex">
                            <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                <img class="w-28 h-24" src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg" alt="" />
                            </div>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                            <h3 class="text-sm font-medium text-gray-900">Exchanges</h3>
                            <p class="mt-2 text-sm text-gray-500">We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.</p>
                            </div>
                        </div>

                        <div class="sm:flex">
                            <div class="sm:flex-shrink-0">
                            <div class="flow-root">
                                <img class="w-28 h-24" src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg" alt="" />
                            </div>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                            <h3 class="text-sm font-medium text-gray-900">For the planet</h3>
                            <p class="mt-2 text-sm text-gray-500">Like you, we love the planet, and so we&#039;ve pledged 1% of all sales to the preservation and restoration of the natural environment.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}