<template>
  <v-app-bar flat density="comfortable" class="text-center border-b">
    <v-app-bar-title>Vuetify cart</v-app-bar-title>

    <template #append>
      <v-btn icon @click="open()">
          <v-icon
            v-if="isEmpty"
            icon="mdi-cart"
          />

        <v-badge
          v-else
          color="info"
          dot
        >
          <v-icon icon="mdi-cart" />
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useCart } from '@/composables/useCart';
const { open, isEmpty } = useCart()
</script>
