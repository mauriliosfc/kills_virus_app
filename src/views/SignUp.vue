<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Nome" v-model="user.username">
        <br>
        <input type="text" placeholder="Email" v-model="user.email">
        <br>
        <input type="text" placeholder="Senha" v-model="user.password">
        <br>
        <div class="btn-login">
            <button @click="registrar">Registrar</button>
        </div>        
    </div>
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