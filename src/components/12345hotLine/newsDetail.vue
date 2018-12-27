<template>
  <div>
    <div class="title">
      {{content.title}}
    </div>
    <pre >
      {{content.context}}
    </pre>
  </div>
</template>

<script>
    export default {
      name: "newsDetail",
      data(){
        return{
          content:{}
        }
      },
      mounted(){
        this.content = this.$route.params.content;
      }
    }
</script>

<style scoped>
  .title{
    text-align: center;
    font-size: 34px;
    padding: 16px 32px;
  }
  pre{
    width: 750px;
    padding: 16px;
    white-space: pre-wrap;           /* css-3 */
    white-space: -moz-pre-wrap;      /* Mozilla, since 1999 */
    word-wrap: break-word;
    overflow: hidden;
    font-size: 30px;
  }
</style>
