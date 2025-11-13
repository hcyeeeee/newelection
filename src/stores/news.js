// src/stores/news.js
import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  state: () => ({
    marquee: [],
    president: [],
    legislator: [],
    policy: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAll() {
      this.loading = true;
      this.error = null;

      try {
        const [marqueeRes, presRes, legisRes] = await Promise.all([
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=10&Cate=政治",
            { headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY } }
          ),
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=總統大選",
            { headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY } }
          ),
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=立委選戰",
            { headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY } }
          ),
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?Cate=2024誰當家&Page=1&sp=3",
            { headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY } }
          ),
        ]);

        // 成功才更新資料
        this.marquee = marqueeRes.data.ITEM ?? [];
        this.president = presRes.data.ITEM ?? [];
        this.legislator = legisRes.data.ITEM ?? [];
        this.policy = legisRes.data.ITEM ?? [];
      } catch (err) {
        this.error = "資料讀取失敗";
        console.error(" fetchAll error:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
