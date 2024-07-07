let headerData =[
    { menu: "|", link: "#" },
    { menu: "About us", link: "/src/pages/about.html", submenu: [
        {menu: "Why us ?", link: "/src/pages/why.html"},
        {menu: "Who we are ?", link: "/src/pages/who.html"},
        {menu: "What we do ?", link: "/src/pages/what.html"},
        {menu: "How we do ?", link: "/src/pages/how.html"},
    ]},
    { menu: "services", link: "/src/pages/services.html" },
    {
        menu: "Commercial",
        link: "/src/pages/commercial.html",
        submenu: [
            { menu: "Hospitality", link: "/src/product/hospitality.html" },
            { menu: "Workplace Interior", link: "/src/product/workplace-interior.html" },
            { menu: "Event and rental furniture", link: "/src/product/event-rental.html" },
            { menu: "Outdoor Furniture", link: "/src/product/outdoor-furniture.html" },
            { menu: "Games Room", link: "/src/product/games-room.html" },
        ],
    },
    {
        menu: "Residential",
        link: "/src/pages/residential.html",
        submenu: [
            { menu: "Living Room", link: "/src/product/living-room.html" },
            { menu: "Dining Room", link: "/src/product/dining-room.html" },
            { menu: "Kitchen", link: "/src/product/kitchen.html" },
            { menu: "Bedrooms", link: "/src/product/bedrooms.html" },
            { menu: "Bathrooms", link: "/src/product/bathrooms.html" },
            { menu: "Laundary Rooms", link: "/src/product/laundary-rooms.html" },
            { menu: "Drawer", link: "/src/product/drawer.html" },
            { menu: "Wardrobe", link: "/src/product/wardrobe.html" },
        ],
    },
    {
        menu: "Interiors",
        link: "/src/pages/interior.html",
        submenu: [
            { menu: "Coffee Table", link: "/src/product/coffee-table.html" },
            { menu: "Console", link: "/src/product/console.html" },
            { menu: "Lights", link: "/src/product/light.html" },
            { menu: "Flooring", link: "/src/product/flooring.html" },
            { menu: "Carpets", link: "/src/product/carpet.html" },
            { menu: "Panels", link: "/src/product/panel.html" },
            { menu: "Faucets", link: "/src/product/faucet.html" },
            { menu: "Bathroom", link: "/src/product/bathroom.html" },
            { menu: "Wellness Luxe", link: "/src/product/pages/wellness-lux.html" },
            { menu: "Chairs", link: "/src/product/chair.html" },
            { menu: "Accessories", link: "/src/product/accessories.html" },
        ],
    },
    {
        menu: "Artifacts",
        link: "/src/pages/artifacts.html",
        submenu: [
            { menu: "Home Decor", link: "/src/product/home-decor.html" },
            { menu: "Sculpture", link: "/src/product/sculpture.html" },
            { menu: "Experiential Designs", link: "/src/product/experiential-art.html" },
            { menu: "Artworks", link: "/src/product/artwork.html" },
        ],
    },
    { menu: "contact us", link: "/src/pages/contact.html" },
    { menu: "|", link: "#" },
]

let Header = `
<header>
    <div class="backdrop-blur text-white z-[999] fixed w-full lg:hidden">
        <ul class="flex flex-row justify-between items-center px-5">
            <li class="text-2xl uppercase py-2 h-10">
                <a href="/src/index.html">
                    <img loading="eager" class="h-full scale-125" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo" />
                </a>
            </li>
            <li id="menu_toggle_btn" class="font-WorkSans400 text-2xl uppercase py-2">=</li>
        </ul>
    </div>

    <div id="mob_header" class="h-screen w-full bg-purple-600 z-30 fixed hidden duration-700 ease-in-out">
        <span id="close_btn" class="fixed z-40 top-10 right-10 text-white">X</span>
    </div>

    <div class="lg:flex-row backdrop-blur-sm lg:bg-gradient-to-b lg:from-black/85 fixed w-full z-20 text-white py-5 pl-10 pr-0 justify-between items-baseline hidden lg:flex max-w-[1440px]">
        <div id="logo-img" class="font-bold text-3xl h-9">
            <a href="/src/index.html">
                <img loading="eager" class="h-full scale-125" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo" />
            </a>
        </div>
        <div>
            <ul class="flex flex-row gap-x-5 uppercase px-20">
                ${headerData
                    .map(
                        (data, index) => `
                    <li id="menu-item" class="relative group">
                        <a href="${
                            data.link
                        }" class="no-underline font-FigtreeMedium hover:underline hover:underline-offset-4 hover:text-yellow-500 hover:font-bold nav-item ${
                            data.submenu ? "group-hover:text-yellow-500" : ""
                        }">
                            ${data.menu}
                        </a>
                        ${
                            data.submenu
                                ? `
                            <ul class="submenu absolute hidden bg-black/50 min-w-fit w-72  text-white p-2 left-0  rounded shadow-lg opacity-0 transition duration-300 transform  group-hover:block group-hover:opacity-100">
                                ${data.submenu
                                    .map(
                                        (sub) => `
                                    <li>
                                        <a href="${sub.link}" class="block px-4    text-[16px] leading-7 sm:text-base sm:leading-9 hover:text-yellow-400">${sub.menu}</a>
                                    </li>
                                `
                                    )
                                    .join("")}
                            </ul>
                        `
                                : ""
                        }
                    </li>
                `
                    )
                    .join("")}
            </ul>
        </div>
    </div>
</header>`;
