import { defineStore } from 'pinia';


export const useUserStore = defineStore('user', {
  state: () => ({
    loginStatus: false,
  }),

  actions: {
    loginUser(username, password) {
      if(username === '1' && password === '0'){
        this.loginStatus = true
        return 'Login successful'
      }
      else{
        this.loginStatus = false
        return 'Invalid credentials'
      }
    },
    logout(){
      this.loginStatus = false;
    }

  }

})