export const daysOfEatenProducts = ({ userAte }) => {
    if (userAte.days.length) {
        return userAte.days;
    }
    return false;
};

export const dateUserAte = ({ userAte }) => userAte.date;
export const userAte = (store) => store.userAte;