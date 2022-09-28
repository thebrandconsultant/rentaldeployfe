<template>
  <div class="bg-white rounded-xl relative mx-8 -mt-8 mb-4 shadow-md px-8 py-4 z-50 block">
     <div class="text-md font-medium text-skin-dark bg-skin-accent px-3 py-1 inline-block"> Our Developments</div>
     <h1 class="text-black sm:text-xl font-semibold pb-4">
<span class="text-3xl font-medium  sm:block text-skin-dark">Current Rental Availability</span>
      </h1>
    <client-only>
  <ssr-carousel class="w-full mx-auto"  :slides-per-page='1' :gutter='20' :responsive='[
      {
      minWidth: 640,
      slidesPerPage: 1
    },
        {
      minWidth: 768,
      slidesPerPage: 1
    },
       {
      minWidth: 1024,
      slidesPerPage: 3
    },
      {
      minWidth: 1280,
      slidesPerPage: 4,
    },
        {
      minWidth: 1536,
      slidesPerPage: 4,
    }
  ]' center peek='50px' loop>
<CardsDevelopment></CardsDevelopment>
<CardsDevelopment></CardsDevelopment>
<CardsDevelopment></CardsDevelopment>
<CardsDevelopment></CardsDevelopment>
<CardsDevelopment></CardsDevelopment>
<CardsDevelopment></CardsDevelopment>
  </ssr-carousel>
    </client-only>
  </div>
</template>

<script>
export default {

}
</script>

