<template>
<section class="relative h-2/3">
  <img
    class="brightness-50 absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100"
    src="/cover.jpg"
    alt="Southern Suburbs"
  />

 <div class="block top-0 h-2/3 inset-0 absolute bg-gradient-to-b opacity-90 from-black to-transparent"></div>
  <div class="block inset-0 absolute bg-gradient-to-r from-black opacity-50 to-transparent"></div>

  <div class="relative px-16 py-24 mx-auto lg:items-center lg:flex text-white">
    <div class="max-w-xl text-center sm:text-left sm:pt-8 pt-32 mx-auto">
      <h1 class="text-white sm:text-5xl font-semibold text-center">
{{apartment}}

<span class="text-2xl font-medium  sm:block text-skin-accent">Find your future home </span>

       
      </h1>
    
    </div>
  </div>
</section>  
</template>

<script>
export default {
props: ['apartment']

}
</script>

<style>
</style>