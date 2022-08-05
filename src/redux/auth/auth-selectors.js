export const isLogin = ({ auth }) => auth.isLogin;
export const auth = ({ auth }) => auth;
export const userId = ({ auth }) => auth.user.id;
export const eatenProductsUser = ({ auth, }) => {
    if (auth.user.days) {
        return auth.user.days
    }
    return false
};

export const getNotAllowedProducts = ({ auth }) => auth.userInfo.notAllowedProducts;