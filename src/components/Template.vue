<template>
    <div id='template'>
        <sidebar-menu :menu="menu" />
        <router-view name="content" class="container"></router-view>
    </div>  
</template>

<script>
export default {
    data(){
    return {
      menu: [
        {
          header: true,
          title: 'Menu',
          hiddenOnCollapse: true
        },
        {
          href: '/app',
          title: 'Home',
          icon: 'fa fa-home'
        },
        {
          title: 'Shoping',
          icon: 'fa fa-shopping-cart',
          child: [
            {
              href: '/comprar',
              title: 'Comprar'
            },
            {
              href: '/vender',
              title: 'Vender'
            }
          ]
        },
        {
          href: '/testes',
          title: 'Testes COVID-19',
          icon: 'fa fa-syringe'
        },
        {
          href: '/consulta',
          title: 'Consulta Médica',
          icon: 'fa fa-briefcase-medical'
        },
      ]
    }
  },
}
</script>

<style>

</style>