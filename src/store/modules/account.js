import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore(
  'account', // store id
  () => {
    // store state
    const role = ref('admin')
    const token = ref('token-string')

    // store actions
    const changeRole = (payload) => {
      role.value = payload
      location.reload()
    }

    // return store state and actions
    return {
      role,
      token,
      changeRole,
    }
  },
  {
    // 持久化存储 role 和 token
    persist: {
      paths: ['role', 'token'],
      storage: sessionStorage,
    },
  },
)
