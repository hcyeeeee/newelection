// src/stores/news.js
import { defineStore } from "pinia"; // 👉 從 Pinia 匯入 defineStore，用來「定義一個 Store（資料倉庫）」的工廠函式
import axios from "axios"; // 👉 匯入 axios，負責發送 HTTP 請求（抓新聞 API 用）

export const useNewsStore = defineStore("news", {
  // news為此store的ID
  state: () => ({
    //用來定義資料的初始值
    marquee: [], // 跑馬燈
    president: [], // 總統大選新聞
    legislator: [], // 立委選戰新聞a
    loading: false, // 正在載入
    error: null, // 錯誤訊息字串，無錯誤為 null
  }),

  actions: {
    // 👉 actions 是「可以改變 state、也可以做非同步」的方法集合
    async fetchAll() {
      // 👉 定義一個非同步方法：一次把三種新聞都抓回來
      this.loading = true; // 👉 設定載入中（this 指向當前 Store 實例）
      this.error = null; // 👉 先清空錯誤（避免殘留上次的錯誤狀態）
      try {
        const [marqueeRes, presRes, legisRes] = await Promise.all([
          // 👉 同時發出三個請求，全部完成後再往下（節省時間）
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=10&Cate=政治",
            {
              headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY }, // 👉 這裡把 TokenKey 放在 header（⚠️ 建議改用 .env 或後端代理）
            }
          ),
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=總統大選",
            {
              headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY },
            }
          ),
          axios.get(
            "https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=立委選戰",
            {
              headers: { TokenKey: import.meta.env.VITE_TOKEN_KEY },
            }
          ),
        ]);
        // 👉 以上結束後，三個回應物件（Response）會依序放進陣列並解構為 marqueeRes / presRes / legisRes

        this.marquee = marqueeRes.data.ITEM; // 👉 把第一個回應的資料（data.ITEM 陣列）存進 store 的 marquee 狀態
        this.president = presRes.data.ITEM; // 👉 第二個回應 → 存進 president
        this.legislator = legisRes.data.ITEM; // 👉 第三個回應 → 存進 legislator
      } catch (err) {
        // 👉 任一請求丟出錯誤就會進到這裡
        this.error = "資料讀取失敗"; // 👉 設定錯誤訊息，給 UI 顯示
        console.error(err); // 👉 開發時在主控台看到詳細錯誤（方便除錯）
      } finally {
        this.loading = false; // 👉 無論成功或失敗都會執行：把 loading 關掉
      }
    },
  },
});
