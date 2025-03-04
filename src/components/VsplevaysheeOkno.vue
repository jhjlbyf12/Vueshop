<template>
    <div class="okno" :class="{show:vsokno}">
        <H1 @click="$emit('close')">X</H1>
        <h1>{{nul.name}}</h1>
        <h2>{{nul.price}}</h2>
        <!-- <img :src= "require('@/assets/images' + nul.image)"> -->
        
        <h2>{{nul.discription}}</h2>
        <h1>Количество в корзине : {{dobavleniecounter}}</h1>
        
        <div>
            <button @click="addToBasket()">Добавить в корзину</button>
            <button @click="deData()">Удалить из корзины</button>
        </div>
      

    </div>
</template>

<script>
export default{
    name: 'VsplevaysheeOkno',
    props:['vsokno', 'nul'],
    computed:{
        dobavleniecounter(){
            return this.$store.getters.Podshen(this.nul)
        }
    },

    methods:{
        addToBasket(){
            this.$store.commit('addToBasket', this.nul)
        },
        deData(){
            this.$store.commit('deData', this.nul)
        }
    }
  
    }

</script>


<style>
.okno{
    width: 240px;
    /* height: 240px; */
    background-color: aquamarine;  
    position: absolute;
    display: none;     
}

.okno.show{
    display: block;
}

</style>