import { co } from '@fullcalendar/core/internal-common';
import {defineStore} from 'pinia'
import { computed } from 'vue';

export const useLoginInfoStore = defineStore("LoginInfo",()=>{
    const userId = ref(0); //로그인 안 한 상태

    const logIn = ((id)=>{
        userId.value = id
        console.log(id+"로 로그인 성공")
    })

    const getLoginId =computed(()=>userId.value)

    const logOut = ((id)=>{
        userId.value = 0
        console.log("로그아웃 성공")
    })

    return{logIn,getLoginId,logOut}


})