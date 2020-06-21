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
          icon: 'fa fa-user'
        },
        {
          title: 'Shoping',
          icon: 'fa fa-chart-area',
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
        }
      ]
    }
  },
}
</script>

<style>

</style>