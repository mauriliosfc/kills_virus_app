<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background: #2a2a2e;">
        <b-navbar-brand tag="h1" class="mb-0" >Kills Virus</b-navbar-brand>
    </b-navbar>
    <b-card title="Testes para COVID-19">
        <b-card-text>
            Abaixo você pode encontrar alguns estabelecimentos realizam os teste para COVID-19 em Belo Horizonte
        </b-card-text>            
    </b-card>
    <br>
    <b-table :fields="fields" :items="items">
      <template v-slot:cell(name)="data">
        <a target="_blank" :href="`https://www.google.com/search?q=${data.value.replace(/[^a-z]+/i,'+').toLowerCase()}&npsic=0&rflfq=1&rlha=0&rllag=-19920503,-43938735,275&tbm=lcl&ved=2ahUKEwiw8Jze1qXqAhXeJ7kGHQrZDpUQtgN6BAgKEAQ&rldoc=1#rlfi=hd:;si:;mv:[[-19.8721416,-43.9089981],[-19.9432735,-43.994229499999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4`">
            Ver no Mapa
        </a>
        <!-- <b-button variant="success" @click="verNoMapa(data.value.replace(/[^a-z]+/i,'+').toLowerCase())">Ver no Mapa</b-button>         -->
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            fields: [                
                // A regular column
                'Estabelecimento',
                'Telefone',
                {                  
                    key: 'name',
                    label: 'Full Name',
                },
            ],
             items: [
                { name: "Drogaria Araujo", Telefone: '(31) 3270-5004', Estabelecimento: "Drogaria Araujo" },
                { name: "Drogaria Pacheco", Telefone: '(31) 3213-9444', Estabelecimento: "Drogaria Pacheco" },
                { name: "Unimed BH", Telefone: '0800 030 3003', Estabelecimento: "Unimed BH" },
                { name: "Hermes Pardini", Telefone: '(31) 3228-6200', Estabelecimento: "Hermes Pardini" }
            ],
            
        }
    },
    methods: {
        fullName(value) {
            return `${value.first} ${value.last}`
        },
        verNoMapa(item){
            console.log(item)
        }
    }
}
</script>
    
<style>

</style>