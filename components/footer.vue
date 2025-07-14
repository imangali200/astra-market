<template>
    <footer v-if="route.path !== '/oferta'" class="tw-flex tw-justify-center tw-mt-8">
        <div class="footer tw-max-w-[1300px] tw-w-full  tw-border-t tw-mx-auto px-4">
            <div class="top tw-w-full  tw-flex tw-flex-col tw-items-center lg:tw-flex-row tw-justify-between lg:tw-items-start tw-py-[30px]">
                <div class="tw-flex tw-w-full lg:tw-w-auto tw-flex-col tw-justify-start tw-gap-[15px]">
                    <div class="tw-flex tw-items-center tw-justify-between">
                        <img class="tw-w-[200px] tw-h-[35.56px]" src="/public/imgs/main logo.png" alt="">
                        <img class="tw-w-[32px] tw-h-[32px] tw-block lg:tw-hidden" src="/public/imgs/instagram.png" alt="">
                    </div>
                    
                    <div class="tw-flex tw-justify-between tw-items-center lg:tw-flex-col lg:tw-items-start">
                        <h3 class="number tw-text-lg tw-font-semibold tw-mb-[15px]">8 800 070 05 40</h3>
                        <div>
                            <p class="tw-text-sm">Пн-Пт 09:00 - 18:00</p>
                            <p class="tw-text-sm">Сб-Вс Выходной</p>
                        </div>
                    </div>
                    <h3 class="number tw-text-lg tw-font-semibold tw-hidden lg:tw-block">Мы в соцсетях</h3>
                    
                </div>
                <div class="tw-flex tw-w-full lg:tw-w-auto tw-flex-col tw-gap-5">
                    <span class="tw-text-[16px] tw-font-semibold tw-text-[#34398B]">Информация</span>
                    <ul class="tw-list-disc tw-pl-4 tw-flex tw-flex-col tw-gap-[15px]">
                        <li>Акции</li>
                        <li>Новости</li>
                    </ul>
                </div>
                <div class="tw-flex tw-w-full lg:tw-w-auto tw-flex-col tw-gap-5 tw-mt-3 lg:tw-md-0">
                    <span class="tw-text-[16px] tw-font-semibold tw-text-[#34398B]">Помощь</span>
                    <ul class="tw-list-disc tw-pl-4 tw-flex tw-flex-col tw-gap-[15px]">
                        <li>Конфиденциальность информации</li>
                        <li>Публичная оферта</li>
                    </ul>
                </div>
                <div class="tw-bg-[#F8F8F8] tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full md:tw-w-[310px] tw-h-[228px] tw-rounded-[16px] tw-gap-5 tw-mt-4 lg:tw-m-0">
                    <h2 class="tw-text-[16px] tw-font-semibold tw-text-[#34398B]">Мобильное приложение</h2>
                    <div class="tw-flex tw-flex-col tw-gap-[15px]">
                        <img class="tw-w-[135px] tw-h-[40px]" src="/public/imgs/appStore.png" alt="">
                        <img class="tw-w-[135px] tw-h-[40px]" src="/public/imgs/playMarket.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bottom tw-border-t-[1px] tw-border-[#9D9D9D] lg:tw-py-[30px] tw-py-[20px] tw-flex tw-justify-start lg:tw-justify-center tw-items-center tw-relative">
                <p class="tw-text-sm tw-text-[#393838]">© АСТРА-ЛОМБАРД — 2023</p>
                <img class="tw-w-[113px] tw-h-[27px] tw-absolute tw-right-0" src="/public/imgs/visa.png" alt="">
            </div>
        </div>
    </footer>

</template>

<script setup>
</script>
