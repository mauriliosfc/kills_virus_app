<template>
    <b-container class="bv-example-row">
        <b-row align-v="center">
            <b-form >
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
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
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-1"
                        v-model="user.password"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>                  

                <b-button type="submit" variant="success" @click="login">Login</b-button>
                <b-button type="reset" variant="primary" >Cadastre-se</b-button>
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