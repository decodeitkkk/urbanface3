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

        submenu: [
            { menu: "Hospitality", link: "/src/product/hospitality.html" },
            {
                menu: "Workplace Interior",
                link: "/src/product/workplace-interior.html",
            },
            {
                menu: "Event and Rental Furniture",
                link: "/src/product/event-rental-furniture.html",
            },
            {
                menu: "Outdoor Furniture",
                link: "/src/product/outdoor-furniture.html",
            },
            { menu: "Games Room", link: "/src/product/games-room.html" },
        ],
    },
    {
        menu: "RESIDENTIAL",

        submenu: [
            {
                menu: "Living Room",
                link: "/src/product/living-room.html",
            },
            { menu: "Dining Room", link: "/src/product/dining-room.html" },
            { menu: "Kitchen", link: "/src/product/kitchen.html" },
            { menu: "Bedrooms", link: "/src/product/bedroom.html" },
            { menu: "Bathrooms", link: "/src/pages/bathroom.html" },
            {
                menu: "Laundary Rooms",
                link: "/src/product/laudary-room.html",
            },
            { menu: "Drawer", link: "/src/product/drawer.html" },
            { menu: "Wardrobe", link: "/src/product/wardrobe.html" },
        ],
    },
    {
        menu: "Interiors",

        submenu: [
            { menu: "Coffee table", link: "/src/product/coffee-table.html" },
            { menu: "Console", link: "/src/product/console.html" },
            { menu: "Lights", link: "/src/pages/lights.html" },
            { menu: "Flooring", link: "/src/product/flooring.html" },
            { menu: "Carpets", link: "/src/product/carpet.html" },
            { menu: "Panels", link: "/src/product/panel.html" },
            { menu: "Faucets", link: "/src/product/faucet.html" },
            { menu: "Bathroom", link: "/src/product/bathroom.html" },
            { menu: "Wellness luxe", link: "/src/pages/wellness-lux.html" },
            { menu: "Chairs", link: "/src/product/chair.html" },
            { menu: "Accessories", link: "/src/product/accessories.html" },
        ],
    },
    {
        menu: "artifacts",

        submenu: [
            { menu: "Home decor", link: "/src/product/home-decor.html" },
            { menu: "Sculpture", link: "/src/product/sculpture.html" },
            {
                menu: "Experiential design",
                link: "/src/product/experiential-art.html",
            },
            { menu: "Artwork", link: "/src/product/artwork.html" },
        ],
    },
    {
        menu: "About us",
        link: "/src/pages/about.html",
        submenu: [
            { menu: "Why us ?", link: "/src/pages/why.html" },
            { menu: "Who we are ?", link: "/src/pages/who.html" },
            { menu: "What we do ?", link: "/src/pages/what.html" },
            { menu: "How we do ?", link: "/src/pages/how.html" },
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
                                .filter(
                                    (item) =>
                                        item.menu !== "About us"
                                )
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
