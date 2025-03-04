import { createStore } from 'vuex'

export default createStore({
  state: {
    basket:[]
  
  },
  getters: {
    basketitems:state=>{
      return state.basket;
    },

    Podshen:state=>nul=>{
      let item = state.basket.find(it=>it.id==nul.id);
      if(item){
        return item.guantuty;
      }
    }
  },
  mutations: {
    addToBasket(state, nul){
      let item = state.basket.find(i=>i.id==nul.id);
      if(item){
        item.guantuty++;
      }
        else{
          state.basket.push({...nul, guantuty:1})
      }
    },
    
    deData(state, nul){
      let item = state.basket.find(i=>i.id==nul.id);
      if(item){

        if(item.guantuty>1){
          item.guantuty--;
        }
        else{
         state.basket = state.basket.filter(i=>i.id!==nul.id)
        }
      }      
    }    
  },
})
