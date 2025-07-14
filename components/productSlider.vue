<template>
  <div class="tw-w-full tw-mt-3" :class="bgClass">
    <div
      class="tw-max-w-[1300px] tw-mx-auto tw-px-[16px] tw-py-[40px] md:tw-p-[70px] tw-flex tw-flex-col tw-gap-[20px] md:tw-gap-[40px]"
    >
      <h1
        class="tw-text-2xl md:tw-text-[39px] lg:tw-text-[50px] tw-text-white tw-mb-4 tw-flex tw-items-center tw-justify-between"
      >
        {{ title }}
        <p class="tw-text-[#34398B] tw-text-xs tw-block md:tw-hidden">Все</p>
      </h1>

      <Splide
        :options="{
          type: 'slide',
          perPage: getVisibleCount(),
          perMove: 1,
          gap: '20px',
          focus: 'center',
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: false,
          breakpoints: {
            768: { perPage: 2, gap: '40px' },
            1024: { perPage: 3, gap: '20px' },
          },
        }"
        ref="splideRef"
      >
        <SplideSlide v-for="product in products" :key="product.id">
          <div
            class="tw-bg-white tw-rounded-[14px] tw-border tw-p-4 tw-h-[270px] md:tw-h-[360px] tw-w-[175px] md:tw-w-auto tw-flex tw-flex-col tw-justify-between tw-relative"
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
                @click="favorite(product.id)"
                class="tw-block tw-w-[32px] tw-h-[32px] md:tw-hidden tw-absolute tw-right-5"
                src="/public/imgs/like2.png"
                alt=""
              />
            </div>
            <img
              @click="
                $router.push({
                  path: '/products/detail',
                  query: { categoryId: product.id },
                })
              "
              class="tw-h-[139px] sm:tw-h-[160px] md:tw-h-[180px] lg:tw-w-[250px] tw-w-full tw-object-cover"
              :src="product.imagePath"
              alt=""
            />
            <p class="desc tw-tracking-tighter tw-text-sm md:tw-text-base">
              {{ useshortdescription(product.name) }}
            </p>
            <div class="tw-flex tw-justify-between items-center">
              <div
                class="tw-flex tw-flex-col sm:tw-flex-row sm:tw-gap-[16px] tw-text-[#909090] tw-text-base"
              >
                <span
                  class="tw-text-[#34398B] tw-text-sm md:tw-text-[24px] tw-font-medium"
                >
                  {{ product.basePrice }} ₸
                </span>
                <span
                  v-if="
                    product.priceWithDiscount !== product.basePrice
                      ? product.priceWithDiscount
                      : ''
                  "
                  class="tw-line-through tw-text-[12px] md:tw-text-base"
                >
                  {{ product.priceWithDiscount }} ₸
                </span>
              </div>
              <img
                class="tw-w-[32px] tw--h-[32px] sm:tw-hidden tw-object-cover tw-rounded-xl"
                src="/public/imgs/right arrow.png"
                alt=""
              />
            </div>
            <div
              class="tw-hidden sm:tw-flex tw-justify-between tw-items-center sm:tw-mb-[10px]"
            >
              <button
                @click="tokorzina(product.id)"
                class="tw-text-[#FF8A00] tw-bg-[#FFEEDB] tw-w-[211px] tw-h-[40px] tw-rounded-[12px]"
              >
                В корзину
              </button>

              <img
                @click="favorite(product.id)"
                class="tw-w-[24px] tw-h-[24px]"
                src="/public/imgs/orrange like.png"
                alt=""
              />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { getdata } from "~/composable/useKorzina";
const token = useCookie("token");
const router = useRouter();
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

interface Product {
  id: string;
  name: string;
  localizedName: string;
  isLatest: boolean;
  article: number;
  uniqueIdentificator: string | null;
  inStock: boolean;
  description: string;
  localizedDescription: string;
  imagePath: string;
  basePrice: number;
  priceWithDiscount: number;
  individualPrice: number;
  discountPercent: number;
  category: {
    id: string;
    productsCount: number;
    name: string;
    localizedName: string | null;
    imagePath: string;
    bannerImagePath: string | null;
  };
  source: number;
  weight: number;
  isFavourite: boolean;
  viewCount: number;
  classification: string | null;
  createdOn: string;
  updatedOn: string;
}

const props = defineProps<{
  title: String;
  products: Product[];
  bgClass: String;
}>();

const screenWidth = ref<number>(0);
onMounted(() => {
  screenWidth.value = window.innerWidth;
});
function useshortdescription(text: string): string {
  if (screenWidth.value < 650) {
    const divide = text.split("");
    if (divide.length > 10) {
      return divide.slice(0, 10).join(" ") + "...";
    }
  }
  return text;
}

function getVisibleCount(): number {
  const width = screenWidth.value;
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
}
async function favorite(id: string) {
  const postFavorites = await axios.post(
    "https://api.store.astra-lombard.kz/api/v1/favourites",
    {
      productId: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    }
  );
}
async function tokorzina(id: string) {
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
    toast.success("товар успешно добавлен в корзину", {});
    getdata();
  } catch (error) {
    toast.error("товар уже добавлен в корзину", {});
  }
}
</script>
