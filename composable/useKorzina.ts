import axios from "axios";

export const useKorzinaData = () => useState("korzina", () => []);
export const usePrices = () => useState("prices", () => ({}));

export async function getdata() {
  const token = useCookie("token");
  const korzinaData = useKorzinaData();
  const prices = usePrices();

  try {
    const response = await axios.get(
      "https://api.store.astra-lombard.kz/api/v1/cart",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    korzinaData.value = response.data.items;
    prices.value = response.data;
  } catch (error) {
    console.error("Failed to load cart", error);
  }
}
