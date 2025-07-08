<template>
  <div
    class="tw-max-w-[1300px] tw-w-full ttw-gap-[40px] tw-mt-2 tw-p-4 tw-mx-auto md:tw-py-[70px]"
  >
    <div
      class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-w-full tw-gap-[20px]"
    >
      <div class="left md:tw-col-span-1 tw-bg-gray-100 tw-p-4">
        <div
          class="tw-rounded-[14px] tw-border-[1px] tw-border-gray-[#EBEBEB] tw-overflow-hidden"
        >
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title>ЦЕНА</v-expansion-panel-title>
              <v-expanstion-panel-text>
                <div class="tw-flex tw-flex-col tw-px-5 tw-gap-2">
                  <div class="tw-flex tw-gap-2">
                    <v-text-field
                      label="0т"
                      v-model="priceRange[0]"
                      type="number"
                      density="compact"
                      variant="outlined"
                      hide-details
                    />
                    <v-text-field
                      label="0т"
                      v-model="priceRange[1]"
                      type="number"
                      density="compact"
                      variant="outlined"
                      hide-details
                    />
                  </div>
                  <v-range-slider
                    v-model="priceRange"
                    :min="100000"
                    :max="1000000"
                    :step="1000"
                    color="orange"
                    track-color="gray"
                  />
                </div>
              </v-expanstion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>ПРОБА</v-expansion-panel-title>
              <v-expanstion-panel-text>
                <div>
                  <div></div>
                  <input type="checkbox" />
                </div>
              </v-expanstion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div
        class="md:tw-col-span-3 tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-5"
      >
        <NuxtLink
          class="right tw-flex tw-justify-between tw-flex-col tw-bg-white tw-relative tw-rounded-[14px] tw-border-[1px] tw-gap-2 tw-pb-2 tw-px-2 tw-flex-shrink-0 tw-h-[253px] sm:tw-h-[300px] md:tw-h-[360px] tw-w-full"
          v-for="product in datas"
          :key="product.id"
          :to="`/moreInformation/${product.id}`"
        >
          <div
            class="tw-flex tw-w-full tw-top-3 tw-absolute md:tw-left-2 md:tw-top-2"
          >
            <img
              class="tw-hidden md:tw-block tw-w-[32px] tw-h-[32px]"
              src="/public/imgs/discout2.png"
              alt=""
            />
            <img
              class="tw-w-[32px] tw-h-[32px]"
              src="/public/imgs/star2.png"
              alt=""
            />
            <img
              class="tw-hidden md:tw-block tw-w-[32px] tw-h-[32px]"
              src="/public/imgs/crown2.png"
              alt=""
            />
            <img
              class="tw-block tw-w-[32px] tw-h-[32px] md:tw-hidden tw-absolute tw-right-3"
              src="/public/imgs/like2.png"
              alt=""
            />
          </div>
          <img
            class="tw-h-[139px] sm:tw-h-[160px] md:tw-h-[180px] tw-w-full tw-object-cover"
            :src="product.image"
            alt=""
          />
          <p>{{ useshortdescription(product.description) }}</p>
          <div class="tw-flex tw-justify-between tw-items-center">
            <div
              class="tw-flex tw-flex-col sm:tw-flex-row sm:tw-gap-[16px] tw-text-[#909090] tw-text-base"
            >
              <span class="tw-text-[#34398B] tw-text-base tw-font-semibold">
                {{ product.price }}
              </span>
              <span class="tw-line-through">
                {{ product.oldPrice }}
              </span>
            </div>
            <img
              class="tw-w-[32px] tw-h-[32px] sm:tw-hidden tw-object-cover tw-rounded-xl"
              src="/public/imgs/right arrow.png"
              alt=""
            />
          </div>
          <div
            class="tw-hidden sm:tw-flex tw-justify-between tw-items-center sm:tw-mb-[10px]"
          >
            <button
              class="tw-text-[#FF8A00] tw-bg-[#FFEEDB] tw-w-[211px] tw-h-[40px] tw-rounded-[12px]"
            >
              Купить
            </button>
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/orrange like.png"
              alt=""
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<!-- <v-pagination
        v-model="currentPage"
        :length="pageCount"
        class="tw-mt-6 tw-flex tw-justify-center"
      /> -->

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const datas = ref([]);
const panel = ref(0);
const priceRange = ref([290637, 493350]);
onMounted(async () => {
  const allProduct = await $fetch("/products.json");
  datas.value = allProduct[route.params.name];
  console.log(datas.value);
});
function useshortdescription(words) {
  const divide = words.split(" ");
  if (divide.length > 3) {
    return divide.slice(0, 3).join(" ") + "...";
  }
  return words;
}
// function limitLength(num){
//   if(num.length > 5){
//     price.value = SubmitEvent.slice(0,5)
//   }
// }

// const itemsPerPage = 20;
// const currentPage = ref(1);

// // Example: 400 fake products
// const allItems = Array.from({ length: 400 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
// }));

// const pageCount = computed(() => {
//   return Math.ceil(allItems.length / itemsPerPage);
// });

// const paginatedItems = computed(() => {
//   const start = (currentPage.value - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   return allItems.slice(start, end);
// });
</script>
