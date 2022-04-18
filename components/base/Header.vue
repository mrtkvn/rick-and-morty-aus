<template>
  <div>
    <header class="page-header">
      <img src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/250px-Rick_and_Morty.svg.png" />
      <BaseSearch />
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page-header {
  overflow: hidden;  
}

.page-header img {
  float: left;
}

.page-header a:hover {
  background-color: #ddd;
  color: black;
}


::v-deep {
  .page-header input[type=text] {
    float: right;
    padding: 6px;
    border: 0.15em solid black;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 14px;

  }

  .page-header button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
}

@media screen and (max-width: 600px) {

  .page-header a,
  .page-header input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }

  .page-header input[type=text] {
    border: 1px solid #ccc;
  }
}
</style>