export const getLocalStorage = (name: string) => localStorage.getItem(name);
export const setLocalStorage = (name: string, value: any) => {
  localStorage.setItem(name, value);
};

export const removeUserInfo = () => localStorage.removeItem("user");
export const setUserInfo = (userInfo: any) =>
  setLocalStorage("user", JSON.stringify(userInfo));
export const getUserInfo = () => {
  const userString = getLocalStorage("user");
  try {
    return JSON.parse(userString!);
  } catch (e) {
    console.error("Error parsing user info from local storage", e);
    return null;
  }
};

export const removeAppToken = (token: string) =>
  localStorage.removeItem("accessToken");
export const setAppToken = (token: any) =>
  setLocalStorage("accessToken", token);
export const getAppToken = () => getLocalStorage("accessToken");
