import { useSelector } from "react-redux";
import { getDailyLoading } from "redux/daily/daily-selectors";

function useDailyLoading() {
    const dailyLoading = useSelector(getDailyLoading);
    return dailyLoading;
}

export default useDailyLoading;