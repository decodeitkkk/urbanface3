let Product = (title, desc, img) => {

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('grayscale-0');
                entry.target.classList.add('scale-110');
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Adjust threshold as needed
    });

    // Function to observe each image
    const observeImages = () => {
        const images = document.querySelectorAll('.product-image');
        images.forEach(image => {
            observer.observe(image);
        });
    };

    // Run observeImages when the component is mounted
    setTimeout(observeImages, 10); // Delay to ensure images are rendered

    return `
        <div class="h-[100vh] pb-[10vh] pt-[35vh] bg-black text-white flex flex-col justify-between items-center">
            <div class="flex flex-col justify-center items-center">
                <div id="product-title" class="font-PlayfairDisplay px-5 text-center md:leading-[90px] text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                    ${title}
                </div>
                <p id="product-desc" class="my-3 font-Raleway text-base sm:text-lg lg:text-xl px-5 text-center">${desc}</p>
            </div>
            <div id="product-scroll-down" class="w-32 flex flex-col justify-center items-center">
                <img class="w-1/2" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719851978/URBANFACE/scrolldown_xzqd4p.gif" alt="">
                <p class="w-full text-center font-Raleway text-sm">Scroll Down</p>
            </div>
        </div>

        <div class="racesWrapper overflow-hidden">
            <div class="races flex sm:w-fit flex-nowrap h-[40vh] sm:h-[80vh]">
                ${img.map(i => `
                    <img class="product-image w-full h-full grayscale delay-500  duration-700 ease-in-out object-cover sm:object-contain" src="${i}" alt="">
                `).join('')}
            </div>
        </div>

        <div class="h-[20vh]"></div>
    `;
};
