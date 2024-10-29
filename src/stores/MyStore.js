import { defineStore } from "pinia";    
import { ref, reactive } from "vue";

export const useMyStore = defineStore('MyStore', () => {
     const users = reactive([{name: 'Marina'}, {name: "Dasha"}])

     // управление warning
     const isShowWarning = ref(false)

     const showWarning = () => {
          isShowWarning.value = true;
     
          setTimeout(() => {
               isShowWarning.value = false;
          }, 3000)
     }
     // управление warning конец

     return {
          users,
          isShowWarning,
          showWarning,

     }
})