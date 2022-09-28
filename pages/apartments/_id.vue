<template>
<div>
    <NavigationMain></NavigationMain>
  <BannersApartmentBanner v-bind:apartment="
     'The Westwood Unit 002'"></BannersApartmentBanner>
<div class="sm:px-6 px-2">
   <div class="rounded-lg -mt-10 bg-white w-full block mx-auto relative">
<section>
  <div class="relative max-w-screen-xl sm:px-4 sm:py-8 p-2 mx-auto">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
        <div class="sm:aspect-w-1 sm:aspect-h-1 aspect-w-2 aspect-h-1">
          <img
            alt="Mobile Phone Stand"
            class="object-cover rounded-xl"
            src="/cover.jpg"
          />
        </div>

        <div class="hidden sm:grid grid-cols-2 gap-4 lg:mt-4">
          <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
             <div class="aspect-w-1 aspect-h-1">
            <img 
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="/cover.jpg"
            />
          </div>
      
        </div>
      </div>

      <div class="sticky top-2 pt-2">
        <div class="flex justify-between mt-8">
          <div class="max-w-[50ch]">
            <p class="mt-0.5 text-3xl">
              R15,000/Month
            </p>
            <h1 class="text-2xl font-bold py-2">
             2 Bedroom, 2 Bathroom Executive Unit
            </h1>

            
          </div>
        </div>
   <dl>
    </dl>
        <details class="relative mt-4 group">
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  The Merlot offers a superior lifestyle proposition that encompasses the full residential spectrum, from iconic design and comprehensive amenities, to idyllic scenery and state-of-the-art security.</p>
              </div>
            </div>
          </summary>
        </details>
            <dl class="grid mt-6 grid-cols-5  gap-2 text-xs py-2 rounded-full">
              <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Bedrooms</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/beds.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium">
           2
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Bathrooms</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/baths.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium">
           2
          </dd>
        </div>
             <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Internal Area</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/area.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium">
           112m<sup>2</sup>
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Balcony Area</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/outsideArea.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium">
           12m<sup>2</sup>
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Parking</span>
              <dt class="text-gray-500 text-center">
               <img src="/svg/car.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium">
            2
          </dd>
        </div>
    </dl>
            <div class="grid mt-2 grid-cols-2  gap-2">
             <nuxt-link :to="'/apartments'"
          class="inline-flex items-center sm:sm:px-14 px-5 py-5 mt-4 text-black bg-white border rounded hover:bg-transparent hover:bg-gray-800 active:text-white hover:text-white focus:outline-none focus:ring"
         
        >
         <svg
            class="w-5 h-5 mr-3 rotate-180 transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span class="text-sm font-medium">Back to All Units </span>

         
        </nuxt-link>
        <nuxt-link :to="'/apartments'"
          class="block items-center sm:sm:px-14 px-5 py-5 mt-4 text-black font-bold text-center bg-skin-accent border rounded hover:bg-transparent hover:bg-gray-800 active:text-white hover:text-white focus:outline-none focus:ring"
         
        >
     
          <span class="text-medium font-bold">Enquire</span>

         
        </nuxt-link>
       
    
      </div>
      </div>
    </div>
  </div>
</section>
   </div>
</div>
	<FooterTwoCol></FooterTwoCol>
</div>
</template>


<script>
export default {
  
  data() {
    return {
      index: null,
      statusChange: false,
      outdoor: '',
      siteID: 1,
      unitID: this.$route.params.unit,
      status: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      direction: '',
      unitCode: null,
      bedrooms: 1,
      starred: '',
      beds: '',
      baths: '',
      url: 'https://api-staging.propdeploy.co.za/unit/',
      unit: [],
      currentUser: null,
      statusChanged: 'false',
      countdowntimer: null,
      endTime: null,
      waitingListSize: 0,
      reservation: [],
      currentUsers: '',
      unitImages: {}
    }
  },
  methods: {

  },
  mounted() {
  
  },
  created() {
  
  },
  computed: {
  },
}
</script>

<style>
.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img { 
  border-radius: 20px;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px 10px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -50px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>