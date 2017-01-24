import cookie from 'react-cookie'

export function setCookie(key, val) {
    cookie.save(key, val)
}

export function getCookie(key) {
    return cookie.load(key)
}

export function delCookie(key) {
    cookie.remove(key)
}
// import cookie from 'react-cookie'
// import { CookieDomain } from '../../config.js'
// let cookieConfig = {}
// if(CookieDomain !== ''){
//   cookieConfig = { domain: CookieDomain }
// }

// export function saveCookie(name,value) {
//   cookie.save(name, value, cookieConfig)
// }

// export function getCookie(name) {
//   return cookie.load(name)
// }

// export function removeCookie(name) {
//   cookie.remove(name, cookieConfig)
// }

// export function signOut() {
//   cookie.remove('token', cookieConfig)
// }

// export function isLogin() {
//   return !!cookie.load('token')
// }
