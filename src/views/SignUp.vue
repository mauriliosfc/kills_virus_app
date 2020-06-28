<template>
    <b-container class="bv-example-row">
        <b-row align-v="center" class="justify-content-md-center">
            <b-form >
                <img src="/logo.png" alt="" style="width: 250px;">
                <b-form-group
                    id="input-group-1"
                    label="Nome"
                    label-for="input-1"                    
                >
                    <b-form-input
                        id="input-1"
                        v-model="user.username"
                        type="text"
                        required
                        placeholder="Nome"
                    ></b-form-input>
                </b-form-group>      
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

                <b-button block variant="success" @click="registrar()">Registrar</b-button>                
            </b-form>
        </b-row>
    </b-container>   
</template>

<script>
export default {
    data(){
        return{
            user:{
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        registrar(){                        
            this.$http.post('/register', this.user)
                .then( () => {
                    alert("Usuário criado com sucesso!");
                    this.$router.replace("/")
                })
                .catch(error => {
                    alert("Falha ao cadastrar usuário!");
                    console.log(error)
                })            
        }
    }
}
</script>

<style>

</style>