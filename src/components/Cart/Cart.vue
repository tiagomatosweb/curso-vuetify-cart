<template>
  <CartEmpty v-if="isEmpty" />
  <CartProducts v-else />
</template>

<script setup>
import { useCart } from '@/composables/useCart';
import CartEmpty from '@/components/Cart/CartEmpty.vue';
import CartProducts from '@/components/Cart/CartProducts.vue';

const { isEmpty } = useCart()

</script>
