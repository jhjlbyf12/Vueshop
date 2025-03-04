<template>

  <div class="home">

    <!-- <BasketView></BasketView> -->

    <VsplevaysheeOkno
    :vsokno="active.drawer"
     v-on:close="zakritie($event)"
     :nul="tre"
    />


    <VerstkaOne v-for="rex in item"
    :key="rex.id"
    :prod="rex"
    v-on:viev="najatieKnopki($event)"
    ></VerstkaOne>

    

  </div>
</template>

<script>
// @ is an alias to /src
import item from '@/data/items.js';
// import BasketView from './BasketView.vue';
import VerstkaOne from '@/components/VerstkaOne.vue'
import VsplevaysheeOkno from '@/components/VsplevaysheeOkno.vue';

export default {
  name: 'HomeView',
  components: { VerstkaOne, VsplevaysheeOkno},

  data() {
    return {
      item:item,
      active:{drawer:false},
      tre:0
    }
      
  },

  methods:{
    najatieKnopki(item){
      this.active.drawer = true
      this.tre = item
    }
    ,

    zakritie(){
      this.active.drawer = false
    }
   
  }
}
</script>

<style>

.home{
  display: flex;
  justify-content: space-around;
}

</style>
