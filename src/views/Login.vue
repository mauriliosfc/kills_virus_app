<template>

    <div class="login">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Login</div>
            </md-card-header>
            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field >
                            <label for="last-name">Email</label>
                            <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="user.email"/>
                        </md-field>
                        <md-field >
                            <label for="last-name">Senha</label>
                            <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="user.password"/>
                        </md-field>
                        <md-field >
                            <md-button class="md-primary" @click="login">Login</md-button>
                        </md-field>
                    </div>          
                </div>
            </md-card-content>
        </md-card>                
    </div>
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