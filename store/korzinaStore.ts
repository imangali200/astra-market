import { defineStore } from "pinia";
export const useKorzinaStore = defineStore('korzina',{
    state:() => ({
      lastAddedProduct: null as string | null,
    }),
    actions:{
        setLastAddedId(id: string){
            this.lastAddedProduct = id
        }
    }
})