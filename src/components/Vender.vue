<template>
  <div>
    <b-form  @reset="onReset" v-if="show">
        <br>
      <b-form-group id="input-group-6" label="Produto:" label-for="input-6">
      <b-form-select
          id="input-6"
          v-model="form.Produto"
          :options="produto"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-7" label="Loja:" label-for="input-7">
      <b-form-select
          id="input-7"
          v-model="form.Loja"
          :options="lojas"
          required
        ></b-form-select>
      </b-form-group>
      <b-input-group 
        id="input-group-2" 
        label="Preço do Produto:" 
        label-for="input-2" 
        description="Informe em reais (R$), o preço do produto por unidade."   
        ><money class="form-control" v-model="form.Reais" v-bind="money"></money>
      </b-input-group>    
      <b-form-group 
        id="input-group-3" 
        label=" Foto do Produto:" 
        label-for="input-3" 
        description=" Adicione uma Foto do produto"   
        >
        <b-form-input
          id="input-4"
          v-model="form.Imagem"
          required
          placeholder="www.example.com/image.jpg"     
        ></b-form-input>
        <br>
        <b-img  v-bind="imagemProps" :src="form.Imagem" fluid alt="Responsive image"></b-img>
      </b-form-group>

      <b-button variant="primary" @click="submit()">Cadastrar</b-button>
      <b-button type="reset" variant="danger">Reiniciar Cadastro</b-button>

    </b-form>
    <br>
  </div>
</template>

<script>
  import {Money} from "v-money"
  export default {
    components: {Money},
    data() {
      return {
        lojas: [],

        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
          },
        form: {
          Reais: '',
          Imagem: '',
          Produto: '',
          Loja: null
          
        },
        produto: ['Máscara', 'Alcool em gél', 'Luvas descartáveis'],
        show: true,
        imagemProps: { width: 400, height: 400, class: 'm1' }
      }
    },
    created() {
        this.getStore()
    },
    methods: {
      submit(){ 
               
            this.$http.post('/product', {
                preco: (this.form.Reais*100),
                url_img: this.form.Imagem, 
                name: this.form.Produto,
                store_id: this.form.Loja  
            })
                .then( () => {
                    alert('Produto cadastrado com sucesso!')
                })
                .catch(error => {
                    alert('Erro ao cadastrar produto!')
                    console.log(error)
                })            
        },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values

        this.form.Nome = ''
        this.form.Reais = ''
        this.form.Imagem = 
        this.form.Produto = ''   
      },
      getStore(){
          this.$http.get('/stores')
                .then( (res) => {
                    res.data.map(item => {
                        this.lojas.push({ text:item.name, value:item.id })
                    })
                    
                    console.log(this.lojas)
                })
                .catch(error => {
                    console.log(error)
                })
      }
    }
  }
</script>
