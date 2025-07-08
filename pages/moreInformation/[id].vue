<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
const findDatas = ref({});
const recomend = ref([])
const mainImg = ref("");
const dialog = ref(false);

async function findwithid() {
  const res = await $fetch(`https://api.store.astra-lombard.kz/api/v1/products/${productId}`);
  findDatas.value = res
  console.log(findDatas.value)
  mainImg.value = findDatas.value.imagePath;
}

onMounted(() => {
  findwithid();
});
</script>

<template>
  <div class="tw-max-w-[1300px] tw-w-full tw-mx-auto">
    <div class="tw-flex tw-mb-10 lg:tw-ml-5 tw-gap-4">
      <p>Главная</p>
      <p>/</p>
      <p>Каталог</p>
    </div>
    <div
      class="tw-max-w-[1300px] tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-[55px] tw-mx-auto tw-px-4"
    >
      <div
        class="left  tw-flex tw-flex-col-reverse md:tw-flex-row  tw-items-center tw-border-[1px] tw-h-[540px] tw-max-w-[604px] tw-w-full tw-relative tw-rounded-[14px] tw-px-2 tw-gap-5"
      >
        <div
          class="tw-flex tw-w-full tw-top-3 tw-absolute md:tw-left-2 md:tw-top-2 tw-pl-2 md:tw-pl-0"
        >
          <img
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/discout2.png"
            alt=""
          />
          <img
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/star2.png"
            alt=""
          />
          <img
            class=" tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/crown2.png"
            alt=""
          />
        </div>
        <div class="tw-flex tw-flex-row md:tw-flex-col tw-gap-2">
          <img
            v-for="eachimg in findDatas.imageFolder"
            :key="eachimg"
            @click="mainImg = eachimg"
            class="tw-w-[60px] tw-h-[60px] tw-rounded-[14px] tw-object-cover"
            :src="eachimg"
            alt=""
          />
        </div>
        <div>
          <img
          @click="dialog = true"
            class="tw-max-w-[498px] tw-w-full tw-h-full"
            :src="mainImg"
            alt=""
          />
        </div>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <img :src="mainImg" alt="">
            <v-card-actions>
              <v-btn color="green" @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="right tw-w-full tw-max-w-[604px]">
        <div class="tw-flex tw-flex-col tw-gap-[30px]">
          <div class="tw-flex tw-flex-col tw-gap-4">
            <h1 class="tw-text-[32px] tw-font-semibold">
              {{ findDatas.name }}
            </h1>
            <div class="tw-flex tw-gap-2 tw-items-center">
              <img
                class="lg:tw-w-[32px] lg:tw-h-[32px] tw-w-[24px] tw-h-[24px]"
                src="/public/imgs/like3.png"
                alt=""
              />
              <p>258 добавили в список желаний</p>
            </div>
            <p class="tw-text-[#909090]">
              Код товара: <span>{{ findDatas.article }}</span>
            </p>
            <div class="tw-flex tw-gap-2 tw-items-center">
              <img
                class="tw-w-[24px] tw-h-[24px]"
                src="/public/imgs/cash.png"
                alt=""
              />
              <p class="tw-text-[#097944]">В наличии</p>
            </div>

            <p class="tw-text-[#909090]">
              Вес изделия:
              <span class="tw-text-black">{{ findDatas.weight }} г</span>
            </p>
          </div>
          <div
            class="tw-flex tw-items-center tw-gap-4 tw-bg-[#F8F8F8] tw-rounded-[14px] tw-py-[21px] tw-pl-3 tw-h-[67px]"
          >
            <span class="tw-text-[#34398B] tw-font-semibold tw-text-[32px]">
              {{ findDatas.basePrice }} ₸
            </span>
            <span class="tw-line-through tw-text-[#909090] tw-text-[24px]">
              {{ findDatas.priceWithDiscount }} ₸
            </span>
          </div>
          <button
            class="tw-bg-[#FF8A00] tw-text-white tw-max-w-[320px] tw-w-full tw-h-[48px] tw-rounded-[8px]"
          >
            ДОБАВИТЬ В КОРЗИНУ
          </button>
        </div>
        <div class="tw-w-full tw-flex tw-flex-col tw-gap-5 tw-mt-5">
          <v-expansion-panels>
            <v-expansion-panel title="Описание">
              <v-expansion-panel-text>
                <p class="tw-text-[18px] tw-font-semibold">
                  {{ findDatas.name }}
                </p>
                <p class="tw-mt-5">{{ findDatas.description }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels class="tw-w-full">
            <v-expansion-panel title="Характеристики">
              <v-expansion-panel-text>
                <table class="tw-w-full tw-text-left tw-border-collapse">
                  <tbody>
                    <tr>
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">Проба:</td>
                      <td class="tw-py-2 tw-text-end">{{ findDatas.proof }}</td>
                    </tr>
                    <tr>
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">Вставка:</td>
                      <td class="tw-py-2 tw-text-end">{{ findDatas.inlay }}</td>
                    </tr>
                    <tr>
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">
                        Цвет металла:
                      </td>
                      <td class="tw-py-2 tw-text-end">
                        {{ findDatas.metalColor }}
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">
                        Застежка:
                      </td>
                      <td class="tw-py-2 tw-text-end">{{ findDatas.clasp }}</td>
                    </tr>
                    <tr>
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">
                        Для кого:
                      </td>
                      <td class="tw-py-2 tw-text-end">
                        {{ findDatas.forWhom }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
    
  </div>
  <productSlider bgClass="tw-bg-white" :products="recomend"></productSlider>
</template>
