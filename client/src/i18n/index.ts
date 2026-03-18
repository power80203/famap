export const translations = {
  zh: {
    common: {
      searchPlaceholder: '搜尋地點...',
      findMe: '我的位置',
      loading: '載入中...',
      all: '全部',
    },
    categories: {
      park: '公園',
      nursing_room: '哺乳室',
      restaurant: '餐廳',
      medical: '醫療設施',
    },
    facilities: {
      changing_table: '尿布台',
      high_chair: '兒童餐椅',
      stroller_accessible: '無障礙/嬰兒車可',
      public_toilet: '公共廁所',
    },
    locationDetail: {
      address: '地址',
      rating: '評分',
      facilities: '設施',
    }
  },
  en: {
    common: {
      searchPlaceholder: 'Search locations...',
      findMe: 'Find Me',
      loading: 'Loading...',
      all: 'All',
    },
    categories: {
      park: 'Park',
      nursing_room: 'Nursing Room',
      restaurant: 'Restaurant',
      medical: 'Medical Facility',
    },
    facilities: {
      changing_table: 'Changing Table',
      high_chair: 'High Chair',
      stroller_accessible: 'Stroller Accessible',
      public_toilet: 'Public Toilet',
    },
    locationDetail: {
      address: 'Address',
      rating: 'Rating',
      facilities: 'Facilities',
    }
  }
};

export type TranslationKeys = typeof translations.en;
