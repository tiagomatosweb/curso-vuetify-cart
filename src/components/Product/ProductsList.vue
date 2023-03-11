<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="12" sm="6" md="4" lg="3"
    >
      <v-card flat class="border">
        <div class="bg-white px-6 py-2">
          <v-img :src="product.image" />
        </div>

        <v-card-text>
          <h4>{{ product.name }}</h4>

          <div class="my-4">
            <template v-if="product.promotion">
              <div class="font-weight-light text-decoration-line-through mb-n2">R$ {{ product.price }}</div>
              <div class="text-h5 font-weight-bold">{{ formatPrice(product.promotion) }}</div>
            </template>

            <template v-else>
              <div class="text-h5 font-weight-bold">{{ formatPrice(product.price) }}</div>
            </template>

            <div v-if="product.conditions" class="font-weight-light">{{ product.conditions }}</div>
          </div>

          <v-btn flat block color="primary" @click="add(product)">
            Adicionar

            <template #prepend>
              <v-badge
                v-if="inCart(product.id)"
                color="success"
                dot
              >
                <v-icon icon="mdi-cart" />
              </v-badge>

              <v-icon v-else icon="mdi-cart" />
            </template>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { formatPrice } from '@/helpers/helpers'
import { useCart } from '@/composables/useCart';

defineProps({
  products: Array
})

const { add, inCart } = useCart()
</script>
