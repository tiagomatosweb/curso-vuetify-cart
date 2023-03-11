<template>
  <v-app theme="dark">
    <v-navigation-drawer
      v-model="isOpen"
      width="500"
      temporary
      location="right"
    >
      <Cart />
    </v-navigation-drawer>

    <v-layout>
      <TheHeader />

      <v-main class="mt-6">
        <v-container>
          <ProductHome />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { useCart } from '@/composables/useCart';
import Cart from '@/components/Cart/Cart.vue';
import TheHeader from '@/components/TheHeader.vue';
import ProductHome from '@/components/Product/ProductHome.vue';
const { isOpen } = useCart()
</script>
