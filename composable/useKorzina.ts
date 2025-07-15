
interface Product {
  id: string;
  name: string;
  imagePath: string;
  basePrice: number;
  priceWithDiscount?: number;
  weight: number;
}

interface CartItem {
  product: Product;
}

interface CartResponse {
  items: CartItem[];
  totalPrice: number;
  discountPrice: number;
}

export const useKorzinaData = () => useState<CartItem[]>("korzina", () => []);
export const usePrices = () =>
  useState<{ totalPrice: number; discountPrice: number }>("prices", () => ({
    totalPrice: 0,
    discountPrice: 0,
  }));

export async function getdata() {
  const token = useCookie("token");
  const korzinaData = useKorzinaData();
  const prices = usePrices();

  try {
    const res: CartResponse = await $fetch(
      "https://api.store.astra-lombard.kz/api/v1/cart",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    korzinaData.value = res.items;
    prices.value = {
      totalPrice: res.totalPrice,
      discountPrice: res.discountPrice,
    };
  } catch (err) {
    console.error("getdata error:", err);
  }
}
