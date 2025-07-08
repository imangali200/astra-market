<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-flex tw-flex-col tw-items-center tw-relative">
      <img
        class="tw-block tw-object-cover tw-max-w-[769px] tw-w-full tw-max-h-[130px] tw-h-full md:tw-hidden"
        src="/public/imgs/heroMobile.png"
        alt=""
      />
      <img
        class="tw-hidden md:tw-block tw-max-w-[1300px] tw-w-full tw-max-h-[434px] tw-h-full"
        src="/public/imgs/hero.png"
        alt=""
      />
      <h1
        class="heroWord tw-text-24px tw-font-semibold md:tw-font-medium md:tw-text-[50px] lg:tw-text-[70px] tw-text-white tw-absolute lg:tw-right-[8%] md:tw-right-[3%] tw-right-[15px] tw-top-[10%]"
      >
        МАРКЕТ
        <br />
        ЮВЕЛИРНЫХ
        <br />
        ЦЕННОСТЕЙ
      </h1>
    </div>

    <!-- buttons -->
    <div
      class="tw-grid tw-max-w-[1300px] tw-w-full px-4 tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-my-6 tw-mx-auto"
    >
      <NuxtLink
        to="/allproduct/discounts"
        class="tw-flex tw-justify-center tw-w-full"
      >
        <button
          class="tw-bg-[#E31E25] tw-flex tw-justify-center tw-w-full md:tw-w-[420px] tw-h-[48px] md:tw-h-[70px] tw-items-center tw-rounded-[10px] tw-transition tw-duration-700 tw-transform hover:tw-scale-105"
        >
          <img
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/discount.png"
            alt=""
          />
          <span class="tw-text-white tw-font-semibold tw-text-xl tw-pl-[12px]"
            >Скидки</span
          >
        </button>
      </NuxtLink>
      <NuxtLink
        to="/allproduct/newproduct"
        class="tw-flex tw-justify-center tw-w-full"
      >
        <button
          class="tw-bg-[#097944] tw-flex tw-justify-center tw-w-full md:tw-w-[420px] md:tw-h-[70px] tw-h-[48px] tw-items-center tw-rounded-[10px] tw-transition tw-duration-700 tw-transform hover:tw-scale-105"
        >
          <img
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/star icon.png"
            alt=""
          />
          <span class="tw-text-white tw-font-semibold tw-text-xl tw-pl-[12px]"
            >Новинки</span
          >
        </button>
      </NuxtLink>
      <NuxtLink
        to="/allproduct/popular"
        class="tw-flex tw-justify-center tw-w-full"
      >
        <button
          class="tw-bg-[#34398B] tw-flex tw-justify-center tw-w-full md:tw-w-[420px] md:tw-h-[70px] tw-h-[48px] tw-items-center tw-rounded-[10px] tw-transition tw-duration-700 tw-transform hover:tw-scale-105"
        >
          <img
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/crown.png"
            alt=""
          />
          <span class="tw-text-white tw-font-semibold tw-text-xl tw-pl-[12px]"
            >Популярные</span
          >
        </button>
      </NuxtLink>
    </div>

    <!-- main -->
    <productSlider
      title="Скидки"
      bgClass="tw-bg-[#F8CBCD]"
      :products="discount"
    ></productSlider>
    <productSlider
      title="Новинки"
      bgClass="tw-bg-[#C5E7D4]"
      :products="newProduct"
    ></productSlider>
    <productSlider title="Популярные товары" bgClass="tw-bg-[#D0D1E4]" :products="popular"></productSlider>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const discount = ref([]);
const newProduct = ref([]);
const popular = ref([]);

onMounted(async () => {
  const discountRes = await $fetch(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      method: "POST",
      body: JSON.stringify({
        pageSize: 15,
        advancedFilter: {
          field: "discountPercent",
          operator: "gt",
          value: 0,
        },
      }),
    }
  );
  discount.value = discountRes.data;

  const newRes = await $fetch(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      method: "POST",
      body: JSON.stringify({
        pageSize: 15,
        advancedFilter: {
          filters: [
            {
              field: "category.id",
              operator: "eq",
              value: "74facc22-a6e8-4af1-e2e7-08dba71ef022",
            },
          ],
          logic: "and",
        },
      }),
    }
  );
  newProduct.value = newRes.data;

  const popularRes = await $fetch(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      method: "POST",
      body: JSON.stringify({
        pageSize: 15,
        orderBy: ["viewCount desc"]
      }),
    }
  );
  popular.value = popularRes.data
  console.log(popular.value)


});
</script>

<style lang="scss" scoped></style>
