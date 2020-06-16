<template>
    <b-container class="bv-example-row">
        <b-row align-v="center" class="justify-content-md-center">
            <b-form >
                <b-form-group
                    id="input-group-1"
                    label="Email"
                    label-for="input-1"                    
                >
                    <b-form-input
                        id="input-1"
                        v-model="user.email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>      

                <b-form-group
                    id="input-group-1"
                    label="Senha"
                    label-for="input-1"                    
                >
                    <b-form-input
                        id="input-1"
                        v-model="user.password"
                        type="password"
                        required
                        placeholder="Senha"
                    ></b-form-input>
                </b-form-group>                  

                <b-button block variant="success" @click="login">Login</b-button>
                <b-button block variant="primary" href="/registrar">Cadastre-se</b-button>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            user:{                
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){    
            this.$http.post('/authenticate', this.user)
                .then( res => {
                    console.log(res)
                    this.$session.start()
                    this.$session.set('jwt', res.data.token)                                                            
                    this.$router.replace("home")
                })
                .catch(error => {
                    alert('Usuário ou senha incorretos')
                    console.log(error)
                })            
        }
    }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>