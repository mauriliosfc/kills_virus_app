<template>
  <div>
      <b-card>
          <div v-for="(item, index) in produtos" :key="index">
              <br>
              <b-card no-body md="12" class="overflow-hidden" >
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="item.url_img" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    
                        <b-card-body class="size" >
                            <b-card-text class="lojastyle"> {{item.name}} </b-card-text>
                            <b-card-text> Preco: R$ {{item.preco/100}} </b-card-text>
                            <b-card-text> Telefone: <a :href="item.phone">{{item.phone}}</a> </b-card-text>
                            <b-card-text> Endereço: {{item.address}} </b-card-text>
                        </b-card-body>
                    
                </b-col>
                </b-row>
            </b-card>
          </div>
      </b-card>         
  </div>
</template>

<script>
  export default {
    data() {
      return {
          produtos:[]

      }
    },
    created(){
        this.getProdutos()
    },
    methods: {
      getProdutos(){
          this.$http.get('/products')
                .then( (res) => {
                    this.produtos = res.data
                    console.log(this.produtos)                                    
                    
                })
                .catch(error => {
                    console.log(error)
                })
      }
    }
  }
</script>

<style>
.size {
  display: inline-block;
  margin: 0 10px;
  color: #1ab159;
  font-size: 50px;
}
.lojastyle {
    color: rgb(2, 100, 59);
    font-weight: bold;
}
</style>