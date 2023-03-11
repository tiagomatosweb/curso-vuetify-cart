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
          <div
            v-if="isLoading"
            class="text-center"
          >
            <v-progress-circular indeterminate size="small" width="3" />
            <br>
            Carregando produtos ...
          </div>

          <div
            v-else-if="!products.length"
            class="text-center"
          >
            Nenhum produto disponível. Volte mais tarde :)
          </div>

          <v-row v-else>
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
                      <div class="text-h5 font-weight-bold">R$ {{ product.promotion }}</div>
                    </template>

                    <template v-else>
                      <div class="text-h5 font-weight-bold">R$ {{ product.price }}</div>
                    </template>

                    <div v-if="product.conditions" class="font-weight-light">{{ product.conditions }}</div>
                  </div>

                  <v-btn flat block color="primary" @click="add(product)">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'
import { useCart } from '@/composables/useCart';
import Cart from '@/components/Cart/Cart.vue';
import TheHeader from '@/components/TheHeader.vue';
const { isOpen, add } = useCart()

const { state: products, isLoading } = useAsyncState(
  axios
    .get('http://localhost:8000/products')
    .then(t => t.data),
  [],
)
</script>
