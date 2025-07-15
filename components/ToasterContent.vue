<template>
  <div class="tw-flex tw-items-center tw-bg-white tw-gap-4 tw-p-0 tw-m-0">
    <img class="tw-w-[80px] tw-h-[80px]" :src="dataKorzina.imagePath" alt="" />
    <div>
      <p class="tw-text-black">{{ dataKorzina.name }}</p>
      <p class="tw-text-[#909090]">
        Вес изделия:
        <span class="tw-text-black">{{ dataKorzina.weight }} г</span>
      </p>
      <div class="tw-flex tw-gap-3">
        <p class="tw-text-[#909090]">
          ЦЕНА: <span class="tw-text-black">{{ dataKorzina.basePrice }} ₸</span>
        </p>
        <p
          v-if="dataKorzina?.priceWithDiscount"
          class="price tw-line-through tw-text-[#909090]"
        >
          {{ dataKorzina.priceWithDiscount }} ₸
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKorzinaStore } from "~/store/korzinaStore";
const korzinaStoreData = useKorzinaStore();
const lastId = korzinaStoreData.lastAddedProduct;
import axios from "axios";
const dataKorzina = ref<any>([]);

onMounted(async () => {
  if (lastId) {
    const getMoreInfo = await axios.get(
      `https://api.store.astra-lombard.kz/api/v1/products/${lastId}`
    );
    dataKorzina.value = getMoreInfo.data;
  }
});
</script>
