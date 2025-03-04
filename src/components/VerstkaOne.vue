<template>

    <div class="verstka">
        <h1>{{prod.name}}</h1>
        <h2>{{prod.discription}}</h2>
        <h2>{{prod.price}}</h2>
        <img :src="require('@/assets/images/'+prod.image)">
        <BattonOne @click="$emit('viev', prod)"></BattonOne>       
       
    </div>


</template>

<script>

import BattonOne from '../components/BattonOne.vue'


export default{

    name:'VerstkaOne',
    props:['prod'],
    components:{BattonOne} 
}
</script>


<style>
.verstka{
   
    width: 270px;
    border: 1px solid rgb(27, 29, 13);       
    margin-top: 50px;   
}
</style>