footerData1 = [
// { menu: "Portfolio", link: "/src/pages/portfolio.html" },
{ menu: "commercials", link: "/src/pages/commercial.html" },
// { menu: "ARCHITECTURAL DESIGN", link: "/src/pages/architectural.html" },
{ menu: "RESIDENTIAL", link: "/src/pages/residential.html" },
// { menu: "Rooms", link: "/src/pages/resi2.html" },
{ menu: "Interiors", link: "/src/pages/interior.html" },
{ menu: "artifacts", link: "/src/pages/artifacts.html" },
];
footerData2 = [
{ menu: "About us", link: "/src/pages/about.html" },
{ menu: "contacts", link: "/src/pages/contact.html" },
{ menu: "services", link: "/src/pages/services.html" },
// { menu: "career", link: "#" },
// { menu: "blog", link: "#" },
// { menu: "privacy policy", link: "#" },
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
                    <!-- <button
                        class="footer-icons bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://wa.me/+918802955060" taget="_blank">
                            <i class="fa-brands fa-x-twitter text-black text-lg "></i>
                        </a>
                    </button> -->


                </div>
                <div id="footer-copyright" class="text-white my-5 font-FigtreeMedium">
                    Copyright 2024 - Urbanface
                </div>
            </div>
        </div>
    </div>
</footer>
`;