import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useWarningStore = defineStore('WarningStore', () => {
    const isShowWarning = ref(false)
     const warningText = ref('')
     const warningType = ref('')

     const showWarning = (text, type = 'warning') => {
          warningText.value = text
          warningType.value = type

          isShowWarning.value = true;
          
          setTimeout(() => {
               isShowWarning.value = false;
          }, 3000)
     }

    return {
        isShowWarning,
        showWarning,
        warningText,
        warningType,
    }  
})