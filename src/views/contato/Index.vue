<template>
  <v-container
    id="contato"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    <iframe
      allowfullscreen
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d233980.45301736542!2d-46.79612052685254!3d-23.606320494244137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x94cef93f7765c5eb%3A0x6c22a375c481aeda!2sBorracharia%20jk%2C%20loja%20de%20pneus%20SP%2C%20vulcaniza%C3%A7%C3%A3o%20de%20pneus%2C%20conserto%20de%20pneus%20runflat%20e%20blindados%2C%20aberta%20aos%20domingos%20-%20R.%20Carlos%20Vicari%2C%20235%20-%20%C3%81gua%20Branca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005033-070!3m2!1d-23.5243404!2d-46.683973099999996!5e0!3m2!1sen!2sbr!4v1642188135807!5m2!1sen!2sbr"
      style="border:0"
      width="100%"
    />

    <v-row
      class="ma-0"
      justify="center"
    >
      <v-col
        cols="12"
        md="4"
      >
        <h1 class="display-1 mb-8 font-weight-bold">
          Informações de contato
        </h1>

        <div class="mb-8">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.
        </div>

        <div class="mb-4">
          <strong>Endereço</strong> Rua Carlos Vicari, 235 - Água Branca/ Pompéia | SP
        </div>

        <div class="mb-4">
          <strong>telefone</strong> (11) 3862-4428 
        </div>

        <div class="mb-4">
          <strong>Email</strong> atendimento@atendimento.com
        </div>

      </v-col>

      <v-col
        cols="12"
        md="5"
      >
        <v-form>
          <v-row class="mb-6">
            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Seu nome"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Seu Email"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Assunto"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-textarea
                  flat
                  hide-details
                  label="Mensagem"
                  solo
                />
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="white--text"
            color="black"
            x-large
          >
            Enviar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'contato',
  }
</script>
