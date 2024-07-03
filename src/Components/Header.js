let headerData = [
    { menu: "|", link: "#" },
    {
        menu: "Commercial",
        link: "/src/pages/commercial.html",
        submenu: [
            { menu: "Hospitality", link: "#" },
            { menu: "Workplace Interior", link: "#" },
            { menu: "Event and rental furniture", link: "#" },
            { menu: "Outdoor Furniture", link: "#" },
            { menu: "Games Room", link: "#" },
        ],
    },
    {
        menu: "Residential",
        link: "/src/pages/residential.html",
        submenu: [
            { menu: "Living Room", link: "#" },
            { menu: "Dining Room", link: "#" },
            { menu: "Kitchen", link: "#" },
            { menu: "Bedrooms", link: "#" },
            { menu: "Bathrooms", link: "#" },
            { menu: "Laundary Rooms", link: "#" },
            { menu: "Drawer", link: "#" },
            { menu: "Wardrobe", link: "#" },
        ],
    },
    {
        menu: "Interiors",
        link: "/src/pages/interior.html",
        submenu: [
            { menu: "Coffee Table", link: "#" },
            { menu: "Console", link: "#" },
            { menu: "Lights", link: "#" },
            { menu: "Flooring", link: "#" },
            { menu: "Carpets", link: "#" },
            { menu: "Panels", link: "#" },
            { menu: "Faucets", link: "#" },
            { menu: "Bathroom", link: "#" },
            { menu: "Wellness Luxe", link: "#" },
            { menu: "Chairs", link: "#" },
            { menu: "Accessories", link: "#" },
        ],
    },
    {
        menu: "Artifacts",
        link: "/src/pages/artifacts.html",
        submenu: [
            { menu: "Home Decor", link: "#" },
            { menu: "Sculpture", link: "#" },
            { menu: "Experiential Designs", link: "#" },
            { menu: "Artworks", link: "#" },
        ],
    },
    { menu: "About us", link: "/src/pages/about.html" },
    { menu: "services", link: "/src/pages/services.html" },
    { menu: "contact us", link: "/src/pages/contact.html" },
    { menu: "|", link: "#" },
];

let Header = `
<header>
    <div class="backdrop-blur text-white z-30 fixed w-full lg:hidden">
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
