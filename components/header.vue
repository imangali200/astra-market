<template  class="tw-flex tw-flex-col tw-justify-center tw-items-center">
  <header v-if="route.path !== '/oferta'"
    class="tw-flex tw-items-center tw-flex-col tw-sticky tw-top-0 tw-bg-white tw-z-50 tw-border-none md:tw-border-b"
  >
    <div
      class="head tw-bg-[#34398B] tw-w-full tw-h-[40px] tw-flex tw-justify-between tw-items-center tw-px-[16px] lg:tw-px-[70px]"
    >
      <div class="tw-hidden md:tw-flex left tw-items-center tw-gap-[32px]">
        <div class="tw-flex tw-gap-[4px]">
          <p class="tw-font-normal tw-text-[13px] tw-text-white">KZ</p>
          <p class="tw-font-normal tw-text-[13px] tw-text-white">/</p>
          <p class="tw-font-normal tw-text-[13px] tw-text-white">RU</p>
        </div>
        <div class="tw-flex tw-items-center tw-gap-[8px]">

            <img
              @click="toOferta"
              width="24px"
              height="14.18px"
              src="/public/imgs/logo.png"
              alt=""
              >
    

          <p class="tw-font-medium tw-text-sm tw-text-white">Астра-ломабард</p>
        </div>
        <div class="tw-flex tw-items-center tw-gap-[8px]">
          <img

            width="20px"
            height="20px"
            src="/public/imgs/phone logo.png"
            alt=""
          />
          <p class="tw-font-normal tw-text-[13px] tw-text-white">
            8 800 070 05 40
          </p>
        </div>
        <p class="tw-font-normal tw-text-[13px] tw-text-white">Акции</p>
      </div>
      <div @click="toggle" class="tw-flex md:tw-hidden tw-gap-[8px]">
        <button
          :class="[
            'tw-font-normal tw-text-[13px]',
            showMenu ? 'tw-text-[#FF8A00]' : 'tw-text-white',
          ]"
        >
          Меню
        </button>
        <img
          width="16px"
          height="16px"
          :src="showMenu ? '/imgs/top icon.png' : '/imgs/bottom icon.png'"
          alt=""
        />
      </div>
      <div
        v-if="showMenu"
        class="tw-absolute tw-top-[40px] tw-flex tw-flex-col tw-bg-white tw-w-[164px] tw-h-[168px] tw-gap-[12px] tw-pl-[12px] tw-py-2 tw-rounded-bl-lg tw-rounded-br-lg tw-border-2 tw-border-[#EBEBEB]"
      >
        <span class="tw-font-normal tw-text-[13px] tw-text-black">Акции</span>
        <span class="tw-font-normal tw-text-[13px] tw-text-black">Оплата</span>
        <span class="tw-font-normal tw-text-[13px] tw-text-black"
          >Доставка</span
        >
        <span class="tw-font-normal tw-text-[13px] tw-text-black"
          >Пункт выдачи</span
        >
        <div class="tw-flex tw-items-center tw-gap-[8px]">
          <img
          @click="toOferta"
            width="24px"
            height="14.18px"
            src="/public/imgs/logo.png"
            alt=""
          />
          <p class="tw-font-medium tw-text-sm tw-text-[#34398B]">
            Астра-ломабард
          </p>
        </div>
      </div>
      <div class="right tw-hidden md:tw-flex tw-items-center tw-gap-[20px]">
        <h3 class="tw-font-normal tw-text-[13px] tw-text-white">Оплата</h3>
        <h3 class="tw-font-normal tw-text-[13px] tw-text-white">Доставка</h3>
        <div class="tw-flex tw-items-center tw-gap-[8px]">
          <h3 class="tw-font-normal tw-text-[13px] tw-text-white">
            Пункт выдачи
          </h3>
          <img width="13." src="/public/imgs/location.png" alt="" />
        </div>
      </div>
      <div class="tw-flex md:tw-hidden tw-gap-[24px]">
        <img
          height="20px"
          width="20px"
          src="/public/imgs/phone logo.png"
          alt=""
        />
        <div class="tw-flex tw-items-center tw-gap-[8px]">
          <span class="tw-font-normal tw-text-[13px] tw-text-white">KZ</span>
          <img
            width="16px"
            height="16px"
            src="/public/imgs/bottom icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div 
      class="tw-flex tw-max-w-[1300px] tw-w-full tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-items-center tw-py-[20px] tw-px-[16px] lg:tw-px-auto"
    >
      <div
        class="bottom-left tw-w-full md:tw-w-auto tw-flex tw-items-center tw-justify-between"
      >
        <NuxtLink to="/"
          ><img
            width="220px"
            height="40px"
            src="/public/imgs/main logo.png"
            alt=""
        /></NuxtLink>
        <img
          @click="toggleMenu2"
          class="tw-flex tw-w-[32px] tw-h-[32px] md:tw-hidden"
          src="/public/imgs/menu 2.png"
          alt=""
        />
      </div>
      <div class="bottom-right tw-flex tw-gap-[16px] tw-py-3">
        <div
          class="tw-flex tw-items-center tw-bg-white tw-rounded-[14px] tw-border-[1px] tw-gap-4 tw-border-[#EBEBEB] tw-py-2 tw-px-4 tw-cursor-pointer"
        >
          <img
            class="tw-w-[18px] tw-h-[18px]"
            src="/public/imgs/search icon.png"
            alt=""
          />
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Поиск товаров..."
            class="tw-w-full md:tw-w-[175px] tw-border-none tw-text-sm tw-outline-none tw-text-[#909090]"
            @keyup.enter="
              $router.push({
                path: '/products/product-list',
                query: { search: searchTerm },
              });
              searchTerm = '';
            "
          />
        </div>
        <div @click="toLogin">
          <img
            class="tw-w-[40px] tw-h-[40px] sm:tw-w-[48px] sm:tw-h-[48px] tw-object-cover tw-mx-5 tw-mr-8 sm:tw-m-0"
            src="/public/imgs/user logo.png"
            alt=""
          />
        </div>
        <img
          @click="navigateToFavorite"
          class="tw-w-[40px] tw-h-[40px] sm:tw-w-[48px] sm:tw-h-[48px] tw-object-cover"
          src="/public/imgs/like logo.png"
          alt=""
        />
        <img
          @click="openKorzina = true"
          class="tw-w-[40px] tw-h-[40px] sm:tw-w-[48px] sm:tw-h-[48px] tw-object-cover"
          src="/public/imgs/korzinka.png"
          alt=""
        />
      </div>
    </div>
    <v-dialog v-model="openKorzina" fullscreen>
      <div
        class="tw-max-w-[600px] tw-w-full tw-h-full tw-bg-white tw-ml-auto tw-px-4 tw-py-[60px] sm:tw-px-[40px] tw-overflow-y-auto"
      >
        <div
          class="top tw-border-b-[1px] tw-border-gray-300 tw-flex tw-justify-between tw-items-center tw-pb-3"
        >
          <h1 class="tw-text-[32px] tw-font-semibold">Корзина</h1>
          <img
            @click="openKorzina = false"
            class="tw-w-[32px] tw-h-[32px]"
            src="/public/imgs/close2.png"
            alt=""
          />
        </div>
        <div
          v-if="korzinaData.length === 0"
          class="tw-flex tw-items-center tw-flex-col tw-my-auto tw-gap-4 tw-mt-20"
        >
          <img
            class="tw-w-[44px] tw-h-[44px]"
            src="/public/imgs/korzina.png"
            alt=""
          />
          <h1 class="tw-text-[24px] tw-font-semibold">Ваша корзина пуста</h1>
          <p class="tw-text-[#909090] tw-text-center">
            Желаете приобрести ювелирные изделия? Посмотрите наши хиты продаж,
            загляните в товары со скидкой.
          </p>
          <button
            style="border: solid 1px"
            @click="openKorzina = false"
            class="tw-text-[#FF8A00] tw-border-[#FF8A00] tw-rounded-[8px] tw-h-[48px] tw-w-full tw-py-2"
          >
            Вернуться к покупкам
          </button>
        </div>
        <div v-else class="tw-overflow-y-auto tw-w-full tw-h-[460px]">
          <div
            class="tw-flex tw-items-center tw-bg-[#F8F8F8] tw-w-full tw-rounded-[14px] tw-gap-[15px] tw-p-[15px] tw-mt-4 tw-relative"
            v-for="(dataKor, index) in korzinaData"
            :key="index"
          >
            <img
              class="tw-w-[80px] tw-h-[80px] sm:tw-w-[110px] sm:tw-h-[110px] tw-rounded-[14px]"
              :src="dataKor.product.imagePath"
              alt=""
            />
            <div class="tw-flex tw-flex-col tw-gap-1">
              <p class="tw-text-sm">{{ dataKor.product.name }}</p>
              <div class="tw-flex tw-gap-3">
                <p class="tw-text-[#34398B] tw-font-semibold tw-text-[16px]">
                  {{ dataKor.product.basePrice }} ₸
                </p>
                <p
                  class="tw-text-[#909090] tw-text-[14px]"
                  v-if="dataKor.product.priceWithDiscount"
                >
                  {{ dataKor.product.priceWithDiscount }} ₸
                </p>
              </div>
              <p class="tw-text-[#909090]">
                Вес изделия:
                <span class="tw-text-black"
                  >{{ dataKor.product.weight }} г</span
                >
              </p>
              <img
                @click="removeInKorzino(dataKor.product.id)"
                class="tw-absolute tw-right-2 tw-top-2 tw-w-[24px] tw-h-[24px]"
                src="/public/imgs/removeBtn.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div v-if="korzinaData.length > 0">
          <div
            class="tw-border-t-[1px] tw-border-[#EBEBEB] tw-mt-5 tw-pt-[20px] tw-flex tw-flex-col tw-gap-3"
          >
            <div class="tw-flex tw-justify-between">
              <p>Скидки</p>
              <p>{{ prices?.discountPrice }} ₸</p>
            </div>
            <div class="tw-flex tw-justify-between">
              <h1 class="tw-text-[24px] tw-font-semibold">ИТОГО:</h1>
              <h1 class="tw-text-[24px] tw-font-semibold">
                {{ prices?.totalPrice }} ₸
              </h1>
            </div>
            <div class="tw-flex tw-gap-4">
              <button
                class="tw-bg-[#FF8A00] tw-text-white tw-rounded-[8px] tw-max-w-[260px] tw-w-full tw-h-[48px]"
              >
                Оформить заказ
              </button>
              <button
                style="border: solid 1px"
                class="tw-border-[#FF8A00] tw-text-[#FF8A00] tw-max-w-[260px] tw-w-full tw-h-[48px] tw-rounded-[8px] tw-px-1"
              >
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </header>
  <div
    v-if="
      route.path !== '/login' &&
      route.path !== '/register' &&
      route.path !== '/user/profile' &&
      route.path !== '/oferta'
    "
    :class="[
      openMenu
        ? 'tw-fixed tw-left-0 tw-top-0 tw-right-0 tw-bottom-[-20px] tw-z-50 tw-bg-white tw-flex tw-flex-col tw-overflow-auto tw-px-4 tw-py-8'
        : 'tw-hidden',
      'md:tw-flex',
      'lg:tw-flex-row',
      'tw-flex-col',
      'tw-gap-[10px]',
      'tw-max-w-[1300px]',
      'tw-w-full',
      'tw-px-auto',
      'tw-mx-auto',
      'tw-px-4',
      'tw-mb-5',
    ]"
  >
    <div
      class="left tw-w-full tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-[10px]"
    >
      <div
        class="tw-flex md:tw-hidden tw-justify-between tw-items-center tw-py-2"
      >
        <h1 class="tw-text-2xl tw-font-semibold">Каталог</h1>
        <img
          @click="openMenu = false"
          src="/public/imgs/close.png"
          class="tw-w-[24px] tw-h-[24px]"
          alt=""
        />
      </div>

      <div
        @click="
          $router.push({
            path: '/products/product-list',
            query: { categoryId: item.id },
          });
          openMenu = false;
        "
        v-for="item in items"
        :key="item.id"
        class="md:tw-w-full lg:tw-max-w-[252px] tw-flex tw-flex-row-reverse md:tw-flex-row tw-justify-between md:tw-justify-normal md:tw-flex tw-px-4 tw-items-center tw-gap-4 tw-bg-[#F8F8F8] md:tw-p-[4px] tw-rounded-[12px] tw-h-[64px]"
      >
        <img class="tw-w-[56px] tw-h-[56px]" :src="item.imagePath" alt="" />
        <p class="tw-text-sm tw-font-semibold">{{ item.name }}</p>
      </div>
    </div>
    <div class="md:tw-w-full lg:tw-w-[252px]">
      <div
        @click="
          $router.push({
            path: '/products/product-list',
            query: { categoryId: bottomItem.id },
          });
          openMenu = false;
        "
        v-for="(bottomItem, index) in bottomItems"
        :key="index"
        class="md:tw-w-full lg:tw-w-[252px] tw-h-[64px] lg:tw-h-[138px] tw-justify-between tw-flex md:tw-justify-center tw-items-center tw-pl-5 tw-bg-[#F8F8F8] tw-rounded-[12px]"
      >
        <p class="tw-text-sm tw-w-[155px] tw-font-semibold">
          {{ bottomItem.name }}
        </p>
        <img
          class="tw-w-[56px] tw-h-[56px]"
          :src="bottomItem.imagePath"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const showMenu = ref(false);
const openMenu = ref(false);
const searchTerm = ref("");
const router = useRouter();
const openKorzina = ref(false);

import { useKorzinaData, usePrices, getdata } from "~/composable/useKorzina";

interface Category {
  id: string;
  name: string;
  productsCount: number;
  imagePath: string;
  bannerImagePath: string;
}
interface CategoryResponse {
  data: Category[];
}
interface Korzinka {
  id: string;
  name: string;
  localizedName: string;
  isLatest: boolean;
  article: number;
  inStock: boolean;
  imagePath: string;
  basePrice: number;
  priceWithDiscount: number;
  individualPrice: number;
  discountPercent: number;
  weight: number;
}
interface CartItem {
  product: Korzinka;
}

interface CartResponse {
  items: CartItem[];
  totalPrice: number;
  discountPrice: number;
}

const items = ref<Category[]>([]);
const bottomItems = ref<Category[]>([]);

const route = useRoute();

function toggle() {
  showMenu.value = !showMenu.value;
}
function toggleMenu2() {
  openMenu.value = true;
}

function toLogin() {
  const token = useCookie("token");
  console.log(token);
  if (token.value) {
    router.push("/user/profile");
  } else {
    router.push("/login");
  }
}

function navigateToFavorite() {
  const token = useCookie("token");

  if (!token.value) {
    router.push({
      path: "/login",
    });
  } else {
    router.push({
      path: "/user/profile",
      query: { selectedSection: "wishes" },
    });
  }
}

onMounted(async () => {
  const response = await axios.post<CategoryResponse>(
    "https://api.store.astra-lombard.kz/api/v1/categories/search",
    {
      pageSize: 1000,
      orderBy: ["name"],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  items.value = response.data.data.slice(0, 8);
  bottomItems.value = response.data.data.slice(8, 9);
});

const korzinaData = useKorzinaData();
const prices = usePrices();

onMounted(() => {
  getdata();
});
async function removeInKorzino(id: string) {
  try {
    const token = useCookie("token");
    await axios.delete(`https://api.store.astra-lombard.kz/api/v1/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    getdata();
  } catch (error) {
    console.log(error);
  }
}
function toOferta(){
  router.push({
    path:"/oferta",
    query:{mobile:'true'}
  })
}
</script>
