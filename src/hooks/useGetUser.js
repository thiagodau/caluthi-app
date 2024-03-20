export const getUser = () => {
  let email = localStorage.getItem('@user-email')
  let username = email.split('@')[0]
  username = username.charAt(0).toUpperCase() + username.slice(1);
  return { username, email }
}