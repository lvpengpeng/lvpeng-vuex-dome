<template>
    <div>
                <product/>
        <Cart></Cart>
        <info/>
    </div>
</template>
<script>
import Cart from "../components/cart"
import info from "../components/info"
import product from "../components/product"
    export default{
        components:{
            Cart,
            info,
            product
        }
    }
</script>
<style>

</style>
