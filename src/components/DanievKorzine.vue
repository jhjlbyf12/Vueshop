<template>
    <div class="container-bascet">
        <h1>{{prod.name}}</h1>
        <h2>{{prod.discription}}</h2>
        <h2>{{prod.price}}</h2>
        <h4>{{prod.guantuty}}</h4>
        <img :src="require('@/assets/images/'+prod.image)">
    </div>
</template>

<script>
export default{
    name:"DanievKorzine",
    props:['prod']
}
</script>


<style>
.container-bascet{
   border: 1px solid;
}
</style>