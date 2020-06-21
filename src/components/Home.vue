<template>
    <div class="container-fluid">
        <b-navbar toggleable="lg" type="dark" style="background: #2a2a2e;">
            <b-navbar-brand tag="h1" class="mb-0" >Kills Virus</b-navbar-brand>
        </b-navbar>
        <b-card title="Kills Virus" sub-title="A luta não pode parar">
            <b-card-text>
                Kills Virus é plataforma desenvolvida para ajudar no combate a pandemia do COVID-19 em Minas Gerais
            </b-card-text>            
        </b-card>
        <div>            
            <div class="mt-4">
                <h4>Informações de Minas Gerais</h4>
                <b-card img-src="https://1.bp.blogspot.com/-Fo8lrjG0dOU/VNpPsVjs5JI/AAAAAAAAKtw/09EWcJiQMmw/s1600/IMAGEM%2B1116%2B-%2BBANDEIRA%2BDE%2BMINAS%2BGERAIS%2B-%2BO%2BBLOG%2BDO%2BMESTRE.jpg" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        Os numeros de casos oficiáis de MG nesse momento é de {{dados_estado.cases}}, o de mortes {{dados_estado.deaths}} 
                        e o de casos suspeitos {{dados_estado.suspects}}.                     
                    </b-card-text>
                    <b-card-text>
                        Estes dados são atualizados dinamicamente através de uma API publica para consula de informações, <a href="https://covid19-brazil-api-docs.now.sh/"> Visite Covid19 Brazil API </a>
                    </b-card-text> 
                </b-card>               
            </div>
        </div>
    </div>        
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            dados_estado: {}
        }
    },
    created(){
        this.getDataByEstado('mg')
    },
    methods: {
        getDataByEstado(estd){
            axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estd}`)
                .then(res => {
                    console.log(res.data)
                    this.dados_estado = res.data;
                })
        }
    }
}
</script>

<style>

</style>
