<template>
  <div class="hello">
      <input type="file" id="upload">
      <img id="img" />
  </div>   
</template>

<script>
export default {
    name: 'HelloWorld',
    data(){
        return {
            selectedFile: null
        }
    }
}
</script>