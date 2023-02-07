const setToken = (token: any) => {
  localStorage.setItem(
    "access_token",token
  )
}

const getToken = () => {
    let token = localStorage.getItem("access_token");
    return token
}

const removeToken = () => {
  localStorage.removeItem("access_token");
}

export {
  setToken,
  getToken,
  removeToken
}