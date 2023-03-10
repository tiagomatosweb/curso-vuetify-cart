<template>
  <v-app theme="dark">
    <v-navigation-drawer
      v-model="isOpen"
      width="500"
      temporary
      location="right"
    >
      <div class="d-flex flex-column align-center justify-center h-100">
        <div class="text-center">
          O seu está carrinho vazio. <br>
          <v-btn color="primary" class="mt-2" @click="close()">Continuar comprando</v-btn>
        </div>
      </div>

      <div class="d-flex flex-column h-100">
        <div class="d-flex align-center justify-space-between pa-4">
          <h3>Carrinho de compras</h3>

          <v-btn icon="mdi-close" @click="close()" />
        </div>

        <div class="h-100 overflow-y-auto">
          <v-list>
            <v-list-item>
              <div class="d-flex">
                <div class="bg-white px-2 mr-4">
                  <img
                    src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg"
                    alt=""
                    style="width: 120px"
                  >
                </div>

                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <h5 class="font-weight-regular">Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h5>
                    <div>
                      <strong>R$ 699,99</strong>
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

            <v-list-item>
              <div class="d-flex">
                <div class="bg-white px-2 mr-4">
                  <img
                    src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg"
                    alt=""
                    style="width: 120px"
                  >
                </div>

                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <h5 class="font-weight-regular">Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h5>
                    <div>
                      <strong>R$ 699,99</strong>
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

            <v-list-item>
              <div class="d-flex">
                <div class="bg-white px-2 mr-4">
                  <img
                    src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg"
                    alt=""
                    style="width: 120px"
                  >
                </div>

                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <h5 class="font-weight-regular">Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h5>
                    <div>
                      <strong>R$ 699,99</strong>
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
    </v-navigation-drawer>

    <v-layout>
      <v-app-bar flat density="comfortable" class="text-center border-b">
        <v-app-bar-title>Vuetify cart</v-app-bar-title>

        <template #append>
          <v-btn icon @click="open()">
            <v-badge color="info" dot>
              <v-icon icon="mdi-cart" />
            </v-badge>
          </v-btn>
        </template>
      </v-app-bar>

      <v-main class="mt-6">
        <v-container>
          <div class="text-center">
            Nenhum produto disponível. Volte mais tarde :)
          </div>

          <div class="text-center">
            <v-progress-circular indeterminate size="small" width="3" />
            <br>
            Carregando produtos ...
          </div>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border">
                <div class="bg-white px-6 py-2">
                  <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg" />
                </div>

                <v-card-text>
                  <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

                  <div class="my-4">
                    <div class="font-weight-light text-decoration-line-through mb-n2">R$ 965,90</div>
                    <div class="text-h5 font-weight-bold">R$ 699,99</div>
                    <div class="font-weight-light">À vista no PIX</div>
                  </div>

                  <v-btn flat block color="primary">Adicionar</v-btn>
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
import { useCart } from '@/composables/useCart';
const { isOpen, open, close } = useCart()
</script>
