export function getToken() {
  return localStorage.getItem("access_token");
}

export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
  window.location.href = "/login";
}

export function isLoggedIn() {
  return !!getToken();
}