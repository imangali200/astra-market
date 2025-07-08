<template class="tw-flex tw-flex-col tw-justify-center tw-items-center">
    <header class="tw-flex tw-items-center tw-flex-col tw-sticky tw-top-0 tw-bg-white tw-z-50 tw-border-none md:tw-border-b">
        <div class="head tw-bg-[#34398B] tw-w-full tw-h-[40px] tw-flex tw-justify-between tw-items-center tw-px-[16px] lg:tw-px-[70px]">
            <div class="tw-hidden md:tw-flex left tw-items-center tw-gap-[32px]">
                <div class="tw-flex tw-gap-[4px]">
                    <p class="tw-font-normal tw-text-[13px] tw-text-white">KZ</p>
                    <p class="tw-font-normal tw-text-[13px] tw-text-white">/</p>
                    <p class="tw-font-normal tw-text-[13px] tw-text-white">RU</p>
                </div>
                <div class="tw-flex tw-items-center tw-gap-[8px]">
                    <img width="24px" height="14.18px" src="/public/imgs/logo.png" alt="">
                    <p class="tw-font-medium tw-text-sm tw-text-white">Астра-ломабард</p>
                </div>
                <div class="tw-flex tw-items-center tw-gap-[8px]">
                    <img width="20px" height="20px" src="/public/imgs/phone logo.png" alt="">
                    <p class="tw-font-normal tw-text-[13px] tw-text-white">8 800 070 05 40</p>
                </div>
                <p class="tw-font-normal tw-text-[13px] tw-text-white">Акции</p>
            </div>
            <div @click="toggle" class="tw-flex md:tw-hidden tw-gap-[8px]">
                <button :class="['tw-font-normal tw-text-[13px]', showMenu ? 'tw-text-[#FF8A00]' : 'tw-text-white']">Меню</button>
                <img width="16px" height="16px" :src="showMenu ? '/imgs/top icon.png' : '/imgs/bottom icon.png'" alt="">
            </div>
            <div v-if="showMenu" class="tw-absolute tw-top-[40px] tw-flex tw-flex-col tw-bg-white tw-w-[164px] tw-h-[168px] tw-gap-[12px] tw-pl-[12px] tw-py-2 tw-rounded-bl-lg tw-rounded-br-lg tw-border-2 tw-border-[#EBEBEB]">
                <span class="tw-font-normal tw-text-[13px] tw-text-black">Акции</span>
                <span class="tw-font-normal tw-text-[13px] tw-text-black">Оплата</span>
                <span class="tw-font-normal tw-text-[13px] tw-text-black">Доставка</span>
                <span class="tw-font-normal tw-text-[13px] tw-text-black">Пункт выдачи</span>
                <div class="tw-flex tw-items-center tw-gap-[8px]">
                    <img width="24px" height="14.18px" src="/public/imgs/logo.png" alt="">
                    <p class="tw-font-medium tw-text-sm tw-text-[#34398B]">Астра-ломабард</p>
                </div>
            </div>
            <div class="right tw-hidden md:tw-flex tw-items-center tw-gap-[20px]">
                <h3 class="tw-font-normal tw-text-[13px] tw-text-white">Оплата</h3>
                <h3 class="tw-font-normal tw-text-[13px] tw-text-white">Доставка</h3>
                <div class="tw-flex tw-items-center tw-gap-[8px]">
                    <h3 class="tw-font-normal tw-text-[13px] tw-text-white">Пункт выдачи</h3>
                    <img width="13." src="/public/imgs/location.png" alt="">
                </div>            
            </div>
            <div class="tw-flex md:tw-hidden tw-gap-[24px] ">
                <img height="20px" width="20px" src="/public/imgs/phone logo.png" alt="">
                <div class="tw-flex tw-items-center tw-gap-[8px]">
                    <span class="tw-font-normal tw-text-[13px] tw-text-white">KZ</span>
                    <img width="16px" height="16px" src="/public/imgs/bottom icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="tw-flex tw-max-w-[1300px] tw-w-full tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-items-center tw-py-[20px] tw-px-[16px] lg:tw-px-auto">
            <div class="bottom-left tw-w-full md:tw-w-auto tw-flex tw-items-center tw-justify-between">
                <NuxtLink to="/"><img width="220px" height="40px" src="/public/imgs/main logo.png" alt=""></NuxtLink>
                <img @click="toggleMenu2" class="tw-flex tw-w-[32px] tw-h-[32px] md:tw-hidden" src="/public/imgs/menu 2.png" alt="">
            </div>
            <div class="bottom-right tw-flex tw-gap-[16px] tw-py-3">
                <div class="tw-flex tw-items-center tw-bg-white tw-rounded-[14px] tw-border-[1px] tw-gap-4 tw-border-[#EBEBEB] tw-py-2 tw-px-4 tw-cursor-pointer">
                    <img class="tw-w-[18px] tw-h-[18px]" src="/public/imgs/search icon.png" alt="">
                    <input type="text" placeholder="Поиск товаров..." class="tw-w-full md:tw-w-[175px] tw-border-none tw-text-sm tw-outline-none tw-text-[#909090]">
                </div>
                <NuxtLink to="/login"><img width="48px" height="48px" src="/public/imgs/user logo.png" alt=""></NuxtLink>
                <img width="48px" height="48px" src="/public/imgs/like logo.png" alt="">
                <img width="48px" height="48px" src="/public/imgs/korzinka.png" alt="">
            </div>
        </div>
    </header>
    <div v-if="route.path !== '/login' && route.path !== '/register'" :class="[openMenu ? 'tw-fixed tw-left-0 tw-top-0 tw-right-0 tw-bottom-0 tw-z-50 tw-bg-white tw-flex tw-flex-col tw-overflow-auto tw-px-4 tw-py-8' : 'tw-hidden','md:tw-flex' ,'lg:tw-flex-row', 'tw-flex-col','tw-gap-[10px]','tw-max-w-[1300px]','tw-w-full','tw-px-auto','tw-mx-auto' ,'tw-px-4','tw-mb-5']">
        <div class="left tw-w-full tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-[10px]">
                <div class="tw-flex md:tw-hidden tw-justify-between tw-items-center tw-py-2">
                    <h1 class="tw-text-2xl tw-font-semibold">Каталог</h1>
                    <img @click="openMenu = false" src="/public/imgs/close.png" class="tw-w-[24px] tw-h-[24px]" alt="">
                </div>
           

            <NuxtLink :to="`/allproduct/${item.name}`" v-for="item in items" :key="item" class="md:tw-w-full lg:tw-max-w-[252px] tw-flex tw-flex-row-reverse md:tw-flex-row tw-justify-between md:tw-justify-normal  md:tw-flex tw-px-4 tw-items-center tw-gap-4 tw-bg-[#F8F8F8] md:tw-p-[4px] tw-rounded-[12px] tw-h-[64px]">
                <img class="tw-w-[56px] tw-h-[56px]" :src="item.imagePath" alt="">
                <p class="tw-text-sm tw-font-semibold">{{item.name}}</p>
            </NuxtLink>
        </div>
        <div class="md:tw-w-full lg:tw-w-[252px]">
            <div v-for="bottomItem in bottomItems" :key="bottomItem" class="md:tw-w-full lg:tw-w-[252px] tw-h-[64px] lg:tw-h-[138px] tw-justify-between  tw-flex md:tw-justify-start tw-items-center tw-pl-5 tw-bg-[#F8F8F8] tw-rounded-[12px]">
                <p class="tw-text-sm tw-w-[155px] tw-font-semibold">{{bottomItem.name}}</p>
                <img class="tw-w-[56px] tw-h-[56px]" :src="bottomItem.imagePath" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { NuxtLink } from '#components';
import { ref , onMounted } from 'vue';
    const showMenu = ref(false)
    const openMenu = ref(false)
    const items = ref([])
    const bottomItems = ref([])
    import { useRoute } from 'vue-router'
    const route = useRoute()
    function toggle(){
        showMenu.value = !showMenu.value
    }
    function toggleMenu2(){
        openMenu.value = true
    }
    onMounted(async()=>{
        const datas = await $fetch('https://api.store.astra-lombard.kz/api/v1/categories/search',{
            method:"POST",
            body:JSON.stringify({
            pageSize: 1000, 
            orderBy: ["name"]
        })
        })
        items.value = datas.data.slice(0,8)
        bottomItems.value = datas.data.slice(8,9)
  
    })


</script>