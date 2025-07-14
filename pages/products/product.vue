<template>
  <div
    class="tw-max-w-[1300px] tw-w-full ttw-gap-[40px] tw-mt-2 tw-p-4 tw-mx-auto md:tw-py-[70px]"
  >
    <div
      class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-w-full tw-gap-[20px]"
    >
      <div></div>
      <div
        class="tw-flex tw-flex-col tw-col-start-1 md:tw-col-start-2 tw-col-end-5"
      >
        <div class="tw-flex tw-justify-between">
          <p class="tw-text-[20px] tw-mb-3">
            Подобрано {{ datas.length }} товара
          </p>
          <p
            class="tw-flex tw-gap-1 md:tw-hidden"
            @click="showMobileFilter = true"
          >
            <img
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/filter.png"
              alt=""
            />
            Фильтр
          </p>
        </div>
        <div
          class="tw-flex tw-gap-[10px]"
          v-for="(values, name) in selectedFilters"
          :key="name"
        >
          <div
            class="tw-bg-[#F8F8F8] tw-text-[#414141] tw-text-sm tw-flex tw-px-[20px] tw-py-[7px] tw-rounded-2xl tw-gap-3"
            v-for="val in values"
            :key="val"
          >
            <img
              class="tw-w-[20px] tw-h-[20px]"
              src="/public/imgs/close2.png"
              alt=""
            />
            <div class="tw-flex tw-gap-2">
              <p>{{ name }}:</p>
              <p>{{ val }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-w-full tw-gap-[20px]"
    >
      <div class="left tw-hidden md:tw-block md:tw-col-span-1 tw-p-4">
        <div
          class="tw-rounded-[14px] tw-border-[1px] tw-border-gray-[#EBEBEB] tw-overflow-hidden"
        >
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title>ЦЕНА</v-expansion-panel-title>
              <v-expansion-panel-text>
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
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div>
          <v-expansion-panels class="tw-my-1" v-model="expandedPanels">
            <v-expansion-panel
              v-for="(filter, index) in filterdata"
              :key="index"
            >
              <v-expansion-panel-title>{{
                filter.name
              }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <div v-for="(option, index) in filter.options" :key="index">
                  <div class="tw-flex tw-gap-[8px] tw-my-2">
                    <input
                      :value="option.value"
                      :checked="
                        selectedFilters[filter.name]?.includes(option.value)
                      "
                      @change="toggleFilter(filter.name, option.value)"
                      class="tw-w-[20px] tw-h-[20px] tw-accent-orange-500 tw-text-white"
                      type="checkbox"
                    />
                    <p>{{ option.value }}</p>
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <v-dialog
        v-model="showMobileFilter"
        fullscreen
        transition="dialog-bottom-transition"
        class="md:tw-hidden tw-bg-white tw-relative"
        scrollable
      >
        <img
          @click="showMobileFilter = false"
          class="tw-absolute tw-top-2 tw-right-2 tw-z-50 tw-w-[20px] tw-h-[20px]"
          src="/public/imgs/close2.png"
          alt=""
        />
        <div class="tw-overflow-y-auto tw-bg-white tw-pt-13">
          <div
            class="tw-rounded-[14px] tw-border-[1px] tw-border-gray-[#EBEBEB] tw-overflow-hidden"
          >
            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-title>ЦЕНА</v-expansion-panel-title>
                <v-expansion-panel-text>
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
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div>
            <v-expansion-panels class="tw-my-1" v-model="expandedPanels">
              <v-expansion-panel
                v-for="(filter, index) in filterdata"
                :key="index"
              >
                <v-expansion-panel-title>{{
                  filter.name
                }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div v-for="(option, index) in filter.options" :key="index">
                    <div class="tw-flex tw-gap-[8px] tw-my-2">
                      <input
                        :value="option.value"
                        :checked="
                          selectedFilters[filter.name]?.includes(option.value)
                        "
                        @change="toggleFilter(filter.name, option.value)"
                        class="tw-w-[20px] tw-h-[20px] tw-accent-orange-500 tw-text-white"
                        type="checkbox"
                      />
                      <p>{{ option.value }}</p>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </v-dialog>
      <div
        class="md:tw-col-span-3 tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-5"
      >
        <div
          class="right tw-flex tw-justify-between tw-flex-col tw-bg-white tw-relative tw-rounded-[14px] tw-border-[1px] tw-gap-2 tw-pb-2 tw-px-4 tw-flex-shrink-0 tw-h-[253px] sm:tw-h-[300px] md:tw-h-[360px] tw-w-full"
          v-for="product in pagecount"
          :key="product.id"
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
              class="tw-block tw-w-[32px] tw-h-[32px] md:tw-hidden tw-absolute tw-right-6"
              src="/public/imgs/orrange like.png"
              alt=""
            />
          </div>
          <!-- <div class="tw-h-[139px] sm:tw-h-[160px] md:tw-h-[180px]  tw-w-full"> -->
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
          <!-- </div> -->

          <p class="tw-text-sm sm:tw-text-base tw-break-words">
            {{ product.name }}
          </p>
          <div class="tw-flex tw-justify-between tw-items-center">
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
                {{ product.priceWithDiscount }}
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
              @click="tokorzina(product.id)"
              class="tw-text-[#FF8A00] tw-bg-[#FFEEDB] tw-w-[211px] tw-h-[40px] tw-rounded-[12px]"
            >
              В КОРЗИНУ
            </button>
            <img
              @click="favorite(product.id)"
              class="tw-w-[24px] tw-h-[24px]"
              src="/public/imgs/orrange like.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <v-pagination
      v-model="currentPage"
      :length="pageCount"
      class="tw-mt-6 tw-flex tw-justify-center"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  path: "/products/product-list",
});
import { getdata } from "~/composable/useKorzina";
const route = useRoute();
import axios from "axios";
let datas = ref<Category[]>([]);
const panel = ref(0);
const expandedPanels = ref(0);
const priceRange = ref([290637, 493350]);
const filterdata = ref<filter[]>([]);
const showMobileFilter = ref(false);
const token = useCookie("token");
const router = useRouter();
import { useToast } from "vue-toastification";
const toast = useToast();

interface Category {
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
interface CategoryResponse {
  data: Category[];
}
interface Option {
  value: string;
  localizedValue: string;
}
interface filter {
  id: string;
  name: string;
  localizedName: string;
  options: Option[];
  createdOn: string;
}
interface filterAll {
  data: filter[];
}

onMounted(async () => {
  try {
    const filterdatas = await axios.post<filterAll>(
      "https://api.store.astra-lombard.kz/api/v1/productfilters/search",
      {
        pageSize: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    filterdata.value = filterdatas.data.data;
    console.log(filterdata.value);
  } catch (error) {}
});

async function withSearchFun(id: string) {
  try {
    const withSearch = await axios.post<CategoryResponse>(
      "https://api.store.astra-lombard.kz/api/v1/products/search",
      {
        advancedSearch: {
          fields: ["name"],
          keyword: id,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    datas.value = withSearch.data.data || [];
  } catch (error) {}
}
async function withCategorytype(id: string) {
  try {
    const withcat = await axios.post<CategoryResponse>(
      "https://api.store.astra-lombard.kz/api/v1/products/search",
      {
        pageSize: 30,
        pageNumber: 1,
        orderBy: [`${id} desc`],
        advancedFilter: {
          logic: "and",
          filters: [
            {
              field: id,
              operator: "gte",
              value: 1,
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
    datas.value = withcat.data.data || [];
    console.log(datas.value);
  } catch (error) {}
}

async function withCategoies(id: string) {
  try {
    const categoryRes = await axios.post<CategoryResponse>(
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
                  value: id,
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
    datas.value = categoryRes.data.data || [];
  } catch (error) {
    console.log(error);
  }
}

//filter
const selectedFilters = ref<Record<string, string[]>>({});

function toggleFilter(filterName: string, value: string) {
  if (!selectedFilters.value[filterName]) {
    selectedFilters.value[filterName] = [];
  }
  const index = selectedFilters.value[filterName].indexOf(value);
  if (index === -1) {
    selectedFilters.value[filterName].push(value);
  } else {
    selectedFilters.value[filterName].splice(index, 1);
  }
  applyFilters();
}
function buildFilterQuery() {
  const filter: any[] = [];
  for (const [key, values] of Object.entries(selectedFilters.value)) {
    if (values.length > 0) {
      filter.push({
        logic: "or",
        filters: values.map((val) => ({
          field: "metadata.filters",
          operator: "contains",
          value: `{${key}:${val}}`,
        })),
      });
    }
  }
  filter.push({
    field: "priceWithDiscount",
    operator: "gte",
    value: priceRange.value[0],
  });
  filter.push({
    field: "priceWithDiscount",
    operator: "lte",
    value: priceRange.value[1],
  });
  return filter;
}
async function applyFilters() {
  const filterwithbox = await axios.post(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      pageNumber: 1,
      pageSize: 30,
      advancedFilter: {
        logic: "and",
        filters: buildFilterQuery(),
      },
    }
  );
  datas.value = filterwithbox.data.data || "";
}

const itemsPerPage = 12;
const currentPage = ref(1);

const pageCount = computed(() => {
  return Math.ceil(datas.value.length / itemsPerPage);
});

const pagecount = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return datas.value.slice(start, end);
});

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
    await getdata();
  } catch (error) {
    toast.error("товар уже добавлен в корзину", {});
  }
}

onMounted(() => {
  if (route.query.categoryId) {
    withCategoies(route.query.categoryId as string);
  } else if (route.query.search) {
    withSearchFun(route.query.search as string);
  } else if (route.query.categoryType) {
    withCategorytype(route.query.categoryType as string);
  }
});
watch(
  () => route.query.categoryId,
  (newid, oldid) => {
    if (newid !== oldid) {
      withCategoies(newid as string);
    }
  }
);
watch(
  () => route.query.search,
  (newid, oldid) => {
    if (newid !== oldid) {
      withSearchFun(newid as string);
    }
  }
);
watch(priceRange, () => {
  applyFilters();
});
</script>
