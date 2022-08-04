export const getDiaryState = store => store.diary;

export const diaryDay = ({ diary }) => {
  if (Object.keys(diary.product).length !== 0) {
    return diary.product.day;
  }
  return false;
};
export const diaryDayLast = ({ diary }) => {
  if (Object.keys(diary.product).length !== 0) {
    const date = diary.product.day?.date || diary.product.newDay?.date;
    return date;
  }
  if (diary.dateInfo) {
    return diary.dateInfo.date;
  }
  return false;
};

export const startDay = ({ diary }) => {
  return diary.dateInfo.date;
};

export const diaryDayEatenProducts = ({ diary }) => {
  if (Object.keys(diary.product).length !== 0) {
    const eatenProducts =
      diary.product.day?.eatenProducts || diary.product.newDay?.eatenProducts;
    return eatenProducts;
  }
  if (diary.dateInfo) {
    return diary.dateInfo.response?.eatenProducts;
  }
  return false;
};
