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

      <b-form-group 
        id="input-group-4" 
        label="Endereço :" 
        label-for="input-4" 
        description=" Informe o endereço da loja ou local onde realiza a venda. "   
        >
        <b-form-input
          id="input-4"
          v-model="form.Endereco"
          required
          placeholder="Informe o endereço da Loja ou local de venda do produto cadastrado."     
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-4" 
        label="Telefone :" 
        label-for="input-4" 
        description=" Informe um telefone para os clientes entrar em contato. "   
        >
        <b-form-input
          id="input-4"
          v-model="form.Telefone"
          required
          placeholder="Adicione um telefone fixo ou celular."     
        ></b-form-input>
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
          money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
          },
        form: {
          Nome: '',
          Reais: '',
          Centavos: '',
          Imagem: '',
          Endereco: '',
          Telefone: '',
          Produto: '',
          
        },
        produto: ['Máscara', 'Alcool em gél', 'Luvas descartáveis'],
        show: true,
        imagemProps: { width: 400, height: 400, class: 'm1' }
      }
    },
    methods: {
      submit(){    
            this.$http.post('/product', {
                preco: (this.form.Reais*100),
                url_img: this.form.Imagem, 
                address: this.form.Endereco, 
                phone: this.form.Telefone, 
                name: this.form.Produto,
                store_id: 1   
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
        this.form.Centavos = ''
        this.form.Imagem = 
        this.form.Endereco = ''
        this.form.Telefone = ''
        this.form.Produto = ''   
      }
    }
  }
</script>
