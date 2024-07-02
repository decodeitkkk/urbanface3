let headerData = [
{ menu: "|", link: "#" },
// { menu: "Architectural", link: "/src/pages/architectural.html" },
{ menu: "Commercial", link: "/src/pages/commercial.html" },
{ menu: "Residential", link: "/src/pages/residential.html" },
// { menu: "Experiential", link: "/src/pages/portfolio.html" },
// { menu: "Residential", link: "/src/pages/rooms.html" },
{ menu: "Interiors", link: "/src/pages/interior.html" },
{ menu: "Artifacts", link: "/src/pages/artifacts.html" },
{ menu: "About us", link: "/src/pages/about.html" },
{ menu: "services", link: "/src/pages/services.html" },
{ menu: "contact us", link: "/src/pages/contact.html" },
{ menu: "|", link: "#" },
// { menu: "EN", link: "#" },
// { menu: "Ru", link: "#" },
];

let Header = `
<header>
    <div class="backdrop-blur text-white z-30 fixed w-full lg:hidden  ">
        <ul class="flex flex-row justify-between items-center px-5">
            <li class=" text-2xl uppercase py-2 h-10 ">
                <a href="/src/index.html">
                    <img loading="eager" class="h-full scale-125  " src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo" />
                </a>
            </li>
            <li id="menu_toggle_btn" class="font-WorkSans400 text-2xl uppercase py-2">=</li>
        </ul>
    </div>
    <div id="mob_header" class="h-screen w-full bg-purple-600 z-30 fixed hidden duration-700 ease-in-out ">
        <span id="close_btn" class="fixed z-40 top-10 right-10 text-white">X</span>
    </div>




    <div
        class=" lg:flex-row backdrop-blur-sm lg:bg-gradient-to-b  lg:from-black/85 fixed w-full z-20 text-white py-5 pl-10 pr-0  justify-between items-baseline hidden lg:flex max-w-[1440px] ">
        <div id="logo-img" class=" font-bold text-3xl h-9 ">
            <a href="/src/index.html">
                <img loading="eager" class="h-full scale-125 " src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo" />
            </a>
        </div>
        <div>
            <ul class="flex flex-row gap-x-5 uppercase   px-20">${headerData
                .map(
                (data) =>
                `<li id="menu-item">
                    <a href="${data.link}"
                        class="no-underline font-FigtreeMedium hover:underline hover:underline-offset-4 hover:text-yellow-500 hover:font-bold nav-item ">${data.menu}</a>
                </li> `
                )
                .join("")}
            </ul>
        </div>
    </div>



    </div>


</header>




`;