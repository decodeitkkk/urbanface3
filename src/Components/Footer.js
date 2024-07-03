let footerData1 = [
    { menu: "commercials", link: "/src/pages/commercial.html" },
    { menu: "RESIDENTIAL", link: "/src/pages/residential.html" },
    { menu: "Interiors", link: "/src/pages/interior.html" },
    { menu: "artifacts", link: "/src/pages/artifacts.html" },
];
let footerData2 = [
    { menu: "About us", link: "/src/pages/about.html" },
    { menu: "contacts", link: "/src/pages/contact.html" },
    { menu: "services", link: "/src/pages/services.html" },
];
let footerData3 = [
    {
        menu: "commercials",
        link: "/src/pages/commercial.html",
        submenu: [
            { menu: "Hospitality", link: "/src/pages/commercial-retail.html" },
            {
                menu: "Workplace Interior",
                link: "/src/pages/commercial-office.html",
            },
            {
                menu: "Event and Rental Furniture",
                link: "/src/pages/commercial-industrial.html",
            },
            {
                menu: "Outdoor Furniture",
                link: "/src/pages/commercial-mixed.html",
            },
            { menu: "Games Room", link: "/src/pages/commercial-mixed.html" },
        ],
    },
    {
        menu: "RESIDENTIAL",
        link: "/src/pages/residential.html",
        submenu: [
            {
                menu: "Living Room",
                link: "/src/pages/residential-apartments.html",
            },
            { menu: "Dining Room", link: "/src/pages/residential-houses.html" },
            { menu: "Kitchen", link: "/src/pages/residential-condos.html" },
            { menu: "Bedrooms", link: "/src/pages/residential-villas.html" },
            { menu: "Bathrooms", link: "/src/pages/residential-villas.html" },
            {
                menu: "Laundary Rooms",
                link: "/src/pages/residential-villas.html",
            },
            { menu: "Drawer", link: "/src/pages/residential-villas.html" },
            { menu: "Wardrobe", link: "/src/pages/residential-villas.html" },
        ],
    },
    {
        menu: "Interiors",
        link: "/src/pages/interior.html",
        submenu: [
            { menu: "Living Room", link: "/src/pages/interior-living.html" },
            { menu: "Bedroom", link: "/src/pages/interior-bedroom.html" },
            { menu: "Kitchen", link: "/src/pages/interior-kitchen.html" },
            { menu: "Bathroom", link: "/src/pages/interior-bathroom.html" },
        ],
    },
    {
        menu: "artifacts",
        link: "/src/pages/artifacts.html",
        submenu: [
            {
                menu: "Sculptures",
                link: "/src/pages/artifacts-sculptures.html",
            },
            { menu: "Paintings", link: "/src/pages/artifacts-paintings.html" },
            { menu: "Ceramics", link: "/src/pages/artifacts-ceramics.html" },
            { menu: "Textiles", link: "/src/pages/artifacts-textiles.html" },
        ],
    },
];

let Footer = `
<footer id="footer" class="relative">
    <div class="container mx-auto px-4 h-screen">
        <div class="flex flex-col justify-center items-center text-left h-[100vh] sm:flex sm:items-center">
            <video id="footer-video" autoplay loop muted class="absolute z-[-1] w-full h-full object-cover  ">
                <source src="https://res.cloudinary.com/dgebxxagb/video/upload/v1719827846/URBANFACE/sand_video_olli8w.mp4" type="video/mp4" />
            </video>
            <div class="w-full px-4 mb-0">
                <div class="flex flex-wrap sm:flex-nowrap sm:flex sm:flex-row-reverse items-top py-6 text-white">
                    <div id="footer-logo" class="w-full ml-auto hidden sm:block  text-3xl h-8 md:text-5xl md:h-16 ">
                        <img loading="lazy" class="h-full" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo">
                    </div>
                    <div class="w-full ml-auto">
                        <ul class="list-unstyled uppercase font-FigtreeMedium ">
                            ${footerData1
                                .map(
                                    (item) => `
                            <li>
                                <a id="footer-menu"
                                    class=" font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="${item.link}">
                                    ${item.menu}
                                </a>
                            </li>
                            `
                                )
                                .join("")}

                        </ul>
                    </div>
                    <div class="w-full">
                        <ul class="list-unstyled uppercase font-FigtreeMedium">
                            ${footerData2
                                .map(
                                    (item) => `
                            <li>
                                <a id="footer-menu"
                                    class="font-FigtreeMedium  block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="${item.link}">
                                    ${item.menu}
                                </a>
                            </li>
                            `
                                )
                                .join("")}

                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 my-10 sm:flex sm:flex-row sm:justify-between">
                <div class="lg:mb-0">
                    <button
                        class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://wa.me/+918802955060" taget="_blank">
                            <i class="fa-brands fa-whatsapp text-black text-lg "></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.facebook.com/share/nZa5Fq7K89bQtSS2/?mibextid=LQQJ4d" taget="_blank">
                            <i class="fa-brands fa-facebook text-black text-lg "></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.instagram.com/urbanface.official?igsh=MTU1Y3RuaXJhbXo1cg==" taget="_blank">
                            <i class="fa-brands fa-instagram text-black text-lg "></i>
                        </a>
                    </button>
                   


                </div>
                <div id="footer-copyright" class="text-white my-5 font-FigtreeMedium">
                    Copyright 2024 - Urbanface
                </div>
            </div>
        </div>
    </div>
</footer>
`;
let Footer2 = `
<footer id="footer" class="relative">
    <div class="container mx-auto  px-4 ">
        <div class="flex flex-col justify-start items-center text-left h-[100vh] sm:flex sm:items-center">
            <video id="footer-video" autoplay loop muted class="absolute z-[-1] w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dgebxxagb/video/upload/v1719827846/URBANFACE/sand_video_olli8w.mp4" type="video/mp4" />
            </video>
            <div class="w-full px-4 mb-0 mt-16">
                <div class="flex flex-wrap sm:flex-nowrap sm:flex sm:flex-row-reverse items-top py-6 text-white">
                    <div id="footer-logo" class="w-full ml-auto hidden sm:block text-3xl h-8 md:text-5xl md:h-16">
                        <img loading="lazy" class="h-full" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719827647/URBANFACE/logo_q3jyzh.png" alt="urbanface-logo">
                    </div>
                    <div class="w-full ml-auto">
                        <ul class="list-none uppercase font-FigtreeMedium  overflow-y-auto ">
                            ${footerData3
                                .map(
                                    (item) => `
                                <li class="relative group hover:text-yellow-500">
                                    <a id="footer-menu" class="font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9" href="#">
                                        ${item.menu}
                                    </a>
                                    ${
                                        item.submenu
                                            ? `
                                        <ul class=" hidden group-hover:block  text-white p-2 left-0 mt-1 rounded shadow-lg  ">
                                            ${item.submenu
                                                .map(
                                                    (sub) => `
                                                <li>
                                                    <a href="${sub.link}" class="block px-4 py-2 hover:bg-gray-700 text-xs leading-7 sm:text-base sm:leading-9 hover:text-yellow-400 ">${sub.menu}</a>
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
                    <div class="w-full">
                        <ul class="list-none uppercase font-FigtreeMedium">
                            ${footerData2
                                .map(
                                    (item) => `
                                <li>
                                    <a id="footer-menu" class="font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9" href="${item.link}">
                                        ${item.menu}
                                    </a>
                                </li>
                            `
                                )
                                .join("")}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 my-10 sm:flex sm:flex-row sm:justify-between">
                <div class="lg:mb-0">
                    <button class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5" type="button">
                        <a href="https://wa.me/+918802955060" target="_blank">
                            <i class="fa-brands fa-whatsapp text-black text-lg"></i>
                        </a>
                    </button>
                    <button class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5" type="button">
                        <a href="https://www.facebook.com/share/nZa5Fq7K89bQtSS2/?mibextid=LQQJ4d" target="_blank">
                            <i class="fa-brands fa-facebook text-black text-lg"></i>
                        </a>
                    </button>
                    <button class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5" type="button">
                        <a href="https://www.instagram.com/urbanface.official?igsh=MTU1Y3RuaXJhbXo1cg==" target="_blank">
                            <i class="fa-brands fa-instagram text-black text-lg"></i>
                        </a>
                    </button>
                </div>
                <div id="footer-copyright" class="text-white my-5 font-FigtreeMedium">
                    Copyright 2024 - Urbanface
                </div>
            </div>
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".footer-menu").forEach((menu) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            const index = menu.getAttribute("data-index");
            const submenu = document.getElementById(`submenu-${index}`);
            submenu.classList.toggle("hidden");
        });
    });
});
