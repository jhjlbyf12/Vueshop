<template>
    <h1>Корзина</h1>

    <div class="container-basket">
        <DanievKorzine
        v-for="i in vozvrashaemitems"
        :key="i.id"
        :prod="i"
        />

    </div>

</template>

<script>

import DanievKorzine from'../components/DanievKorzine.vue'

export default {
    name: 'BasketView',
    components:{DanievKorzine},
    computed:{
        vozvrashaemitems(){
            return this.$store.getters.basketitems  //
        }

    }
    
}

</script>

<style>

.container-basket{
    display: flex;
    justify-content: space-around;
}

</style>