let Product = (title, desc, img) => `

<div class="h-[100vh] pb-[10vh] pt-[35vh] bg-black text-white   flex flex-col justify-between items-center ">
    <div class="flex flex-col justify-center items-center">

        <div id="product-title"
            class="font-PlayfairDisplay px-5 text-center  md:leading-[90px] text-3xl sm:text-4xl md:text-5xl lg:text-7xl  ">
            ${title}
        </div>
        <p id="product-desc" class="my-3 font-Raleway  text-base sm:text-lg lg:text-xl px-5 text-center "> ${desc} </p>

    </div>
    <div id="product-scroll-down" class="w-32 flex flex-col justify-center items-center  ">
        <img class="w-1/2" src="/src/media/ig/scrolldown.gif" alt="">
        <p class="w-full text-center font-Raleway text-sm  ">Scroll Down </p>
    </div>
</div>

<div class="racesWrapper overflow-hidden ">
    <div class="races  flex sm:w-fit flex-nowrap h-[40vh] sm:h-[80vh]    ">

        ${img.map(
        (i) => `
        <img class="w-full h-full object-cover sm:object-contain " src=${i} alt="">

        `
        ).join("")}
    </div>
</div>

<div class="h-[20vh] "></div>

`;