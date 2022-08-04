export const isLogin = ({ auth }) => auth.isLogin;
export const auth = ({ auth }) => auth;
export const userId = ({ auth }) => auth.user.id;
export const eatenProductsUser = ({ auth }) => auth.user.days;