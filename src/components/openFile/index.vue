<template>
  <div>
    <button @click="showFile">
      testFile
    </button>
  </div>
</template>

<script>
    export default {
      name: "index",
      methods:{
        showFile(){
          window.openFile.openFile("http://58.221.196.5:11001/image/word/demo.docx","fileName");
        }
      }
    }
</script>

<style scoped>

</style>
