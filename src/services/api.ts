import { mockAdverts } from "@/lib/mock-data";

export interface APIAdvert {
  id: number;
  user: {
    nickname: string;
    id: number;
    is_favourite: boolean;
    created_at: number;
  };
  account_currency: string;
  actual_maximum_order_amount: number;
  available_amount: number;
  created_at: number;
  description: string;
  exchange_rate: number;
  exchange_rate_type: string;
  is_active: boolean;
  maximum_order_amount: number;
  minimum_order_amount: number;
  order_expiry_period: number;
  payment_currency: string;
  payment_method_names: string[];
  type: string;
}

export interface Advert {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  orders: number;
  completion: number;
  following?: boolean;
  online?: boolean;
  rate: number;
  limits: string;
  minAmount: number;
  maxAmount: number;
  time: string;
  methods: string[];
  currency: string;
  type: "buy" | "sell";
}

export interface AdvertFilters {
  currency?: string;
  paymentMethod?: string;
  nickname?: string;
  status?: string;
  sortBy?: string;
}

const BASE_URL = "https://x6pr-kqwm-lfqn.n7d.xano.io/api:iD2pm9AZ:development";
const AUTH_TOKEN =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.z6oVRfqY4z3dnr78avC1mMnJCCSPxa6EdUqWMLK1ejjptbKi4Ax-m5ceatnOLTdT3CACjGAXyeRZKk1Sa-ObPP-vsltPifx4.-XX5i1-7VKhLIfSlT9joTg.8NJUj93HGOHlc5o2V9BRmX0i60lRqAYf6pTMZvJjbP3d7LxVsZK_kdUWNy7mUmAQ7fJgw05IQA0kKaKWcaHW6EEd4UfxwVSWRSN8F7mwGJSRsMNIz0_6-Vh3axc5j_zzA15wOsWitnXKnnQUvYSn-A.5ooG4D1mUNgoPgVcf0GvTLd09nepqFCrSgR3cHZkuEk";

export const advertsApi = {
  getAdverts: async (filters: AdvertFilters): Promise<Advert[]> => {
    try {
      const response = await fetch(`${BASE_URL}/adverts`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "X-Data-Source": "test",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch adverts");
      const apiData = await response.json();
      console.log("API Response:", apiData);

      if (!apiData || !apiData.data || !Array.isArray(apiData.data)) {
        console.log("Invalid API response format, using mock data");
        return mockAdverts;
      }

      // Transform API data to match our Advert interface
      return apiData.data.map((advert: APIAdvert) => ({
        id: String(advert.id),
        name: advert.user?.nickname || "Unknown User",
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${advert.id}`,
        rating: 0, // We'll add this from API when available
        orders: 0, // We'll add this from API when available
        completion: 0, // We'll add this from API when available
        following: advert.user?.is_favourite || false,
        online: true, // We'll add this from API when available
        rate: advert.exchange_rate,
        limits: `${advert.payment_currency} ${advert.minimum_order_amount.toFixed(2)} - ${advert.maximum_order_amount.toFixed(2)}`,
        minAmount: advert.minimum_order_amount,
        maxAmount: advert.maximum_order_amount,
        time: "15 min", // We'll add this from API when available
        methods: advert.payment_method_names || [],
        currency: advert.payment_currency,
        type: advert.type as "buy" | "sell",
      }));
    } catch (error) {
      console.error("Error fetching adverts:", error);
      return mockAdverts; // Fallback to mock data
    }
  },

  followAdvertiser: async (advertiserId: string): Promise<void> => {
    if (!BASE_URL) return;

    try {
      const response = await fetch(
        `${BASE_URL}/advertisers/${advertiserId}/follow`,
        {
          method: "POST",
        },
      );
      if (!response.ok) throw new Error("Failed to follow advertiser");
    } catch (error) {
      console.error("Error following advertiser:", error);
    }
  },

  unfollowAdvertiser: async (advertiserId: string): Promise<void> => {
    if (!BASE_URL) return;

    try {
      const response = await fetch(
        `${BASE_URL}/advertisers/${advertiserId}/unfollow`,
        {
          method: "POST",
        },
      );
      if (!response.ok) throw new Error("Failed to unfollow advertiser");
    } catch (error) {
      console.error("Error unfollowing advertiser:", error);
    }
  },

  initiateTransaction: async (
    advertId: string,
    type: "buy" | "sell",
    amount: number,
  ): Promise<{ transactionId: string }> => {
    if (!BASE_URL) {
      return Promise.resolve({ transactionId: "mock-transaction-id" });
    }

    try {
      const response = await fetch(`${BASE_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          advertId,
          type,
          amount,
        }),
      });
      if (!response.ok) throw new Error("Failed to initiate transaction");
      return response.json();
    } catch (error) {
      console.error("Error initiating transaction:", error);
      throw error;
    }
  },
};
