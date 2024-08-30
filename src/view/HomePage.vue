<template>
    <!-- NavBar -->
    <div class="2xl:container mx-auto">
        <div>
            <NavBar />
        </div>
        <!-- body -->
        <div class="grid grid-cols-12 md:gap-2 m-0  bg-white">

            <!-- col-1 -->
            <div class="col-span-12 md:col-span-4 ">

                <!-- filter Section -->
                <div class="m-[1px] h-[300px] relative">
                    <div class="bg-gray-400 text-gray-100 font-bold text-center py-3 text-lg w-full ">BRANDS</div>

                    <!-- brands col -->
                    <div>1</div>

                    <div class="bg-gray-400 text-gray-100 font-bold text-lg w-full absolute bottom-0 flex">
                        <button class="w-full py-3 hover:bg-[#d50000] hover:text-white">
                            ALL BRANDS
                        </button>
                        <button class="w-full py-3 hover:bg-[#d50000] hover:text-white">
                            RUMOR MILL
                        </button>
                    </div>
                </div>
            </div>

            <!-- col-2  -->
            <div class="col-span-12 md:col-span-8 border border-l">
                <!-- Hero img -->
                <div class="flex justify-center">
                    <img class="h-[300px]" src="/src/assets/hero img.jpg" alt="">
                </div>
                <!-- items container -->
                <div>
                    <div class="grid grid-cols-5 box-border">

                        <!-- item -->
                        <!-- <div class="mb-2 flex flex-col items-center ">
                            <img class=" w-[120px] mb-2 h-[167px]" src="/src/assets/items/item2.png" alt="/">
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div> -->
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item2.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item3.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item2.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item3.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item2.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>
                        <div class="mb-2 flex flex-col items-center group">
                            <img class="w-[120px] h-[167px] mb-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src="/src/assets/items/item3.png" alt="Samsung M35" />
                            <button
                                class="bg-[#fbfbfb] w-full px-4 py-4 font-bold text-gray-700 hover:bg-[#d50000] hover:text-white">
                                Samsung M35
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<!-- script section -->
<script>
import NavBar from '../components/NavBar.vue';
export default {
    name: "HomePage",
    components: {
        NavBar,
    }
}
</script>

<!-- style section -->
<style></style>