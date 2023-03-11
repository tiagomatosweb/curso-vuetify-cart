<template>
  <div class="d-flex flex-column h-100">
    <div class="d-flex align-center justify-space-between pa-4">
      <h3>Carrinho de compras</h3>

      <v-btn icon="mdi-close" @click="close()" />
    </div>

    <div class="h-100 overflow-y-auto">
      <v-list>
        <div
          v-for="product in cart"
          :key="product.id"
        >
          <v-list-item>
            <div class="d-flex">
              <div class="bg-white px-2 mr-4">
                <img
                  :src="product.image"
                  alt=""
                  style="width: 120px"
                >
              </div>

              <div class="d-flex flex-column justify-space-between">
                <div>
                  <h5 class="font-weight-regular">{{ product.name }}</h5>
                  <div>
                    <strong>R$ {{ product.price }}</strong>
                  </div>
                </div>

                <div class="d-flex align-center justify-space-between mt-4">
                  <div class="w-25">
                    <v-text-field
                      type="number"
                      variant="outlined"
                      label="Qty"
                      min="0"
                      density="compact"
                      hide-details
                    />
                  </div>

                  <div>
                    <a href="">Remover</a>
                  </div>
                </div>
              </div>
            </div>
          </v-list-item>

          <v-divider class="my-4" />
        </div>
      </v-list>
    </div>

    <div class="mt-auto">
      <v-divider class="mt-4" />

      <div class="pa-4">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            Total
          </div>

          <div>
            <strong>R$ 500,00</strong>
          </div>
        </div>

        <v-btn color="primary" block size="large">Finalizar compra</v-btn>

        <div class="text-center mt-2">
          ou
          <a href="" @click.stop.prevent="close()">Continue comprando</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart';
const { cart, close } = useCart()
</script>
