<script setup>
definePageMeta({
  path: "/products/detail",
});
import { useToast } from "vue-toastification";
const toast = useToast()
import { getdata } from "~/composable/useKorzina";
import axios from "axios";
const route = useRoute();
const router = useRouter();
const token = useCookie("token");

const productId = ref(route.query.categoryId);
watch(
  () => route.query.categoryId,
  (newId, oldId) => {
    if (newId !== oldId) {
      productId.value = newId;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      findwithid();
    }
  }
);

const findDatas = ref({});
const mainImg = ref("");
const dialog = ref(false);
const similarProduct = ref([]);
let panel = ref(0);

async function findwithid() {
  if (!productId.value) return;
  const res = await axios.get(
    `https://api.store.astra-lombard.kz/api/v1/products/${productId.value}`
  );
  findDatas.value = res.data;
  mainImg.value = findDatas.value.imagePath;

  const similarRes = await axios.post(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      pageSize: 30,
      pageNumber: 1,
      orderBy: [],
      advancedFilter: {
        logic: "and",
        filters: [
          {
            logic: "or",
            filters: [
              {
                field: "category.id",
                operator: "eq",
                value: findDatas.value.category.id,
              },
            ],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  similarProduct.value = similarRes.data.data;
}
async function tokorzina(id) {
  try {
    if (!token) {
      router.push({
        path: "/login",
      });
    }
    const tokorzinaRes = await axios.post(
      "https://api.store.astra-lombard.kz/api/v1/cart",
      {
        productId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    toast.success('товар успешно добавлен в корзину',{
    })
    
    
    await getdata();
  } catch (error) {
    toast.error('товар уже добавлен в корзину',{
    })
  }
}

onMounted(() => {
  findwithid();
});
</script>

<template>
  <div class="tw-max-w-[1300px] tw-w-full tw-mx-auto">
    <div class="tw-flex tw-mb-10 lg:tw-ml-5 tw-pl-5 md:tw-pl-0 tw-gap-4">
      <p>Главная</p>
      <p>/</p>
      <p>Каталог</p>
      <p>/</p>
      <template v-if="findDatas.category?.name">
        {{ findDatas.category.name }}
      </template>
    </div>
    <div
      class="tw-max-w-[1300px] tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-[55px] tw-mx-auto tw-px-4"
    >
      <div
        class="left tw-flex tw-flex-col-reverse md:tw-flex-row tw-items-center tw-border-[1px] tw-h-[540px] tw-max-w-[604px] tw-w-full tw-relative tw-rounded-[14px] tw-px-2 tw-gap-5"
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
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/crown2.png"
            alt=""
          />
        </div>
        <div
          v-if="findDatas.metadata?.attachmentsArray"
          class="tw-flex tw-flex-row md:tw-flex-col tw-gap-2"
        >
          <img
            v-for="(eachimg, index) in findDatas.metadata.attachmentsArray"
            :key="index"
            @click="mainImg = eachimg.path"
            class="tw-w-[60px] tw-h-[60px] tw-rounded-[14px] tw-object-cover"
            :src="eachimg.path"
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
            <img :src="mainImg" alt="" />
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
            @click="tokorzina(findDatas.id)"
            class="tw-bg-[#FF8A00] tw-text-white tw-max-w-[320px] tw-w-full tw-h-[48px] tw-rounded-[8px]"
          >
            ДОБАВИТЬ В КОРЗИНУ
          </button>
        </div>
        <div class="tw-w-full tw-flex tw-flex-col tw-gap-5 tw-mt-5">
          <v-expansion-panels v-model="panel">
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
                    <tr
                      v-for="filter in findDatas.metadata.filtersArray"
                      :key="filter"
                    >
                      <td class="tw-font-semibold tw-py-2 tw-pr-4">
                        {{ filter.name }}:
                      </td>
                      <td class="tw-py-2 tw-text-end">{{ filter.value }}</td>
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
  <div>
    <productSlider
      bgClass="tw-bg-white"
      :products="similarProduct"
    ></productSlider>
  </div>
</template>
