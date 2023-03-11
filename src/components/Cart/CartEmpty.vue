<template>
  <div class="d-flex flex-column align-center justify-center h-100">
    <div class="text-center">
      O seu está carrinho vazio. <br>
      <v-btn color="primary" class="mt-2" @click="close()">Continuar comprando</v-btn>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart';

const { close } = useCart()
</script>
