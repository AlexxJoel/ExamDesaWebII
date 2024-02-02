<script setup lang="ts">
</script>

<template>
  <main>
    <header class="text-center">
      <img  alt="Vue logo" class="logo " src="@/assets/cute-pug-dog-cartoon-illustration-vector.jpg" width="125" height="125" />

      <div class="wrapper ">
        <h1 class="green mb-5">{{ "Hola tu estas en el sitio prinicpal!" }}</h1>

        <b-button variant="success" :to="{name:'form'}"> Comenzar </b-button>
      </div>

    </header>
  </main>
</template>
