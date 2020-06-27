<template>
  <div>
    <b-form  @reset="onReset" v-if="show">
        <br>
      <b-form-group id="input-group-6" label="Loja:" label-for="input-6">
      <b-form-input
          id="input-6"
          v-model="form.Loja"
          placeholder="Informe o nome da loja."
          required
        ></b-form-input>
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
  export default {
    data() {
      return {
        form: {
          Loja: '',
          Endereco: '',
          Telefone: ''         
        },
        produto: ['Máscara', 'Alcool em gél', 'Luvas descartáveis'],
        show: true,
      }
    },
    methods: {
      submit(){    
            this.$http.post('/store', {
                name: (this.form.Loja),
                address: this.form.Endereco, 
                phone: this.form.Telefone,
                user_id:1 
                
            })
                .then( () => {
                    alert('Loja cadastrado com sucesso!')
                })
                .catch(error => {
                    alert('Erro ao cadastrar loja!')
                    console.log(error)
                })            
        },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values

        this.form.Loja = ''
        this.form.Endereco = ''
        this.form.telefone = ''
          
      }
    }
  }
</script>
