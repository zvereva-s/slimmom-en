import { useSelector } from "react-redux";
import { userAte } from "redux/userAte/userAte-selectors";

function useUserAteState() {
    const userAteState = useSelector(userAte);
    return userAteState;
}

export default useUserAteState;