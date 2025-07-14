<template>
  <div class="tw-max-w-[1300px] tw-mx-auto tw-py-4 md:tw-py-[100px]">
    <div
      class="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-4 tw-gap-4 tw-px-4"
    >
      <div
        class="left md:tw-max-w-[244px] tw-w-full tw-col-start-1 tw-col-end-2 tw-flex tw-flex-col tw-gap-[40px] tw-bg-[#F8F8F8] tw-rounded-[14px] tw-p-[30px]"
      >
        <div class="tw-flex tw-flex-col tw-gap-4">
          <div
            @click="selectedSection = 'account'"
            class="tw-flex tw-items-center tw-gap-[15px]"
          >
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/userlogo.png"
              alt=""
            />
            <p class="tw-text-sm">Аккаунт</p>
          </div>
          <div
            @click="selectedSection = 'orders'"
            class="tw-flex tw-items-center tw-gap-[15px]"
          >
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/myorder.png"
              alt=""
            />
            <p class="tw-text-sm">Мои заказы</p>
          </div>
          <div
            @click="selectedSection = 'bonuses'"
            class="tw-flex tw-items-center tw-gap-[15px]"
          >
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/gift.png"
              alt=""
            />
            <p class="tw-text-sm">Мои бонусы</p>
          </div>
          <div
            @click="selectedSection = 'wishes'"
            class="tw-flex tw-items-center tw-gap-[15px]"
          >
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/blacklike.png"
              alt=""
            />
            <p class="tw-text-sm">Список желаний</p>
          </div>
        </div>
        <div>
          <div @click="logOut" class="tw-flex tw-items-center tw-gap-[15px]">
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/logout.png"
              alt=""
            />
            <p class="tw-text-sm">Выход</p>
          </div>
        </div>
      </div>
      <div class="right tw-col-start-2 tw-col-end-5 tw-mt-4 md:tw-mt-[0]">
        <div v-if="selectedSection === 'account'">
          <h1 class="tw-text-[20px] md:tw-text-[32px] tw-font-semibold tw-mb-5">
            Профиль
          </h1>
          <div
            class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 md:tw-grid-rows-2 tw-gap-3"
          >
            <div class="tw-border-[1px] tw-rounded-[12px] tw-h-[54px]">
              <v-text-field
                variant="solo"
                flat
                class="tw-h-[48px]"
                :label="`Имя`"
                :model-value="userData?.firstName"
                density="compact"
              >
              </v-text-field>
            </div>

            <div class="tw-border-[1px] tw-rounded-[12px] tw-h-[54px]">
              <v-text-field
                variant="solo"
                flat
                class="tw-h-[48px]"
                :label="`Фамилия`"
                :model-value="userData?.lastName"
                density="compact"
              ></v-text-field>
            </div>

            <div class="tw-border-[1px] tw-rounded-[12px] tw-h-[54px]">
              <v-text-field
                variant="solo"
                flat
                class="tw-mt-1"
                :label="`Номер телефона`"
                :model-value="userData?.phoneNumber"
                density="compact"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div v-if="selectedSection === 'wishes'">
          <h1 class="tw-text-[20px] md:tw-text-[32px] tw-font-semibold tw-mb-5">
            Список желаний
          </h1>
          <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3">
            <div
              class="right tw-flex tw-justify-between tw-flex-col tw-bg-white tw-relative tw-rounded-[14px] tw-border-[1px] tw-gap-2 tw-pb-2 tw-px-4 tw-flex-shrink-0 tw-h-[253px] sm:tw-h-[300px] md:tw-h-[360px] tw-w-full"
              v-for="product in favorites"
              :key="product.product.id"
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
                  @click="deleteFavorite(product.product.id)"
                  class="tw-block tw-w-[32px] tw-h-[32px] md:tw-hidden tw-absolute tw-right-6"
                  src="/public/imgs/favorite.png"
                  alt=""
                />
              </div>
              <!-- <div class="tw-h-[139px] sm:tw-h-[160px] md:tw-h-[180px]  tw-w-full"> -->
              <img
                @click="
                  $router.push({
                    path: '/products/detail',
                    query: { categoryId: product.product.id },
                  })
                "
                class="tw-h-[139px] sm:tw-h-[160px] md:tw-h-[180px] lg:tw-w-[250px] tw-w-full tw-object-cover"
                :src="product.product.imagePath"
                alt=""
              />
              <!-- </div> -->

              <p class="tw-text-sm sm:tw-text-base tw-break-words">
                {{ product.product.name }}
              </p>
              <div class="tw-flex tw-justify-between tw-items-center">
                <div
                  class="tw-flex tw-flex-col sm:tw-flex-row sm:tw-gap-[16px] tw-text-[#909090] tw-text-base"
                >
                  <span
                    class="tw-text-[#34398B] tw-text-sm md:tw-text-[17px] lg:tw-text-[24px] tw-font-medium"
                  >
                    {{ product.product.basePrice }} ₸
                  </span>
                  <span
                    v-if="
                      product.product.priceWithDiscount !==
                      product.product.basePrice
                        ? product.product.priceWithDiscount
                        : ''
                    "
                    class="tw-line-through tw-text-[10px] lg:tw-text-[12px] md:tw-text-base"
                  >
                    {{ product.product.priceWithDiscount }}
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
                  @click="deleteFavorite(product.product.id)"
                  class="tw-w-[40px] tw-h-[40px]"
                  src="/public/imgs/favorite.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedSection === 'bonuses'">
          <h1 class="tw-text-[20px] md:tw-text-[32px] tw-font-semibold tw-mb-5">
            Список желаний
          </h1>
          <div class="tw-bg-[#34398B] tw-h-[235px] tw-max-w-[400px] tw-w-full tw-rounded-[14px] tw-text-white tw-pt-[30px] tw-pl-[30px]">
            <div class="tw-flex tw-gap-2">
              <img class="tw-w-[24px] tw-h-[24px]" src="/public/imgs/whitegift.png" alt="" />
              <p>Мои бонусы</p>
            </div>
            <p class="tw-text-[24px] tw-font-semibold tw-mt-3">{{ bonusValue }} ₸</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  middleware: "auth",
});
const router = useRouter();
import axios from "axios";
const selectedSection = ref("account");
const token = useCookie("token");
const userData = ref<profile | null>(null);
const favorites = ref<FavoriteItem[]>([]);
const route = useRoute();
const bonusValue = ref<number>(0)

if (typeof route.query.selectedSection === "string") {
  selectedSection.value = route.query.selectedSection; 
}

function logOut() {
  token.value = null;
  router.push({
    path: "/",
  });
}
interface profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  language: number;
}
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

interface FavoriteItem {
  product: Product;
  createdOn: string;
}

async function getPersonalData() {
  const getDatas = await axios.get<profile>(
    "https://api.store.astra-lombard.kz/api/personal/profile",
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  userData.value = getDatas.data;
}
async function getFavorites() {
  const getFavorite = await axios.post(
    "https://api.store.astra-lombard.kz/api/v1/favourites/search",
    {
      pageSize: 1000,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  favorites.value = getFavorite.data.data;
  console.log(favorites.value);
}
async function deleteFavorite(id: string) {
  console.log(id);
  const res = await axios.delete(
    `https://api.store.astra-lombard.kz/api/v1/favourites/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  getFavorites();
}
async function getBonuses() {
  const bonusRes = await axios.get(
    "https://api.store.astra-lombard.kz/api/v1/bonuses",
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  bonusValue.value = bonusRes.data.bonuses

}
onMounted(() => {
  getPersonalData();
  getFavorites();
  getBonuses();
});
</script>
