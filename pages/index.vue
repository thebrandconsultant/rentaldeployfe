<template>
<div class="h-screen bg-gray-100">
  <NavigationMain></NavigationMain>
  <BannersFeatureOne></BannersFeatureOne>
  <SlidersDevelopment></SlidersDevelopment>
  <div class="px-8 bg-gray-800 p-4">
  <div class="z-10 relative mb-4 sm:w-full w-full p-4 shadow rounded-lg bg-gray-50">
  <div class="relative">
<div class="flex items-center justify-between gap-2 px-4">
    <div class="flex-grow">
       <div class="text-md font-medium text-skin-dark bg-skin-accent px-3 py-1 inline-block"> Search</div>
     <h1 class="text-black sm:text-xl font-semibold pb-4">
<span class="text-3xl font-medium  sm:block text-black">Apartments to Rent</span>
      </h1>
    </div>
 <button  class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
		Reset Filter
	  </button>
	  <button class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" v-if="mobileView" @click="mobileView = !mobileView">View Filters</button>
<button class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" v-if="!mobileView" @click="mobileView = !mobileView">Hide Filters</button>
	
</div>
	  </div>

	
	<div v-if="!mobileView">
	  <div class="grid grid-cols-2 md:grid-cols-8 xl:grid-cols-8 gap-2 mt-4">
		<select value="Development" class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">All Developments</option>
		  <option value="1">The Westwood</option>
		  <option value="2">8 Molteno</option>
		  <option value="3">Rondebosch Oval</option>
		  <option value="4">The Winchester</option>
		  <option value="5">The Paragon</option>
		  <option value="6">The Premier</option>
		  <option value="6">Madison Place</option>
		  <option value="6">82 on Harfield</option>
      
		</select>
	<select value="status"  class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Status</option>
		  <option value="Available">Available</option>
		  <option value="Pending">Unvailable</option>
		</select>
	

		<select  class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="0">Min Rental Price</option>
		 <option value="8000">R8,000</option>
		  <option value="9000">R9,000</option>
		  <option value="10000">10,000</option>
		  <option value="11000">R11,000</option>
		  <option value="12000">R12,000</option>
		  <option value="13000">R13,000</option>
		  <option value="14000">R14,000</option>
		  <option value="15000">R15,000</option>
		</select>
		<select  class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="0">Max Rental Price</option>
		 <option value="8000">R8,000</option>
		  <option value="9000">R9,000</option>
		  <option value="10000">10,000</option>
		  <option value="11000">R11,000</option>
		  <option value="12000">R12,000</option>
		  <option value="13000">R13,000</option>
		  <option value="14000">R14,000</option>
		  <option value="15000">R15,000</option>
		</select>

		<select  class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Any Direction</option>
		  <option value="North">North</option>
		  <option value="East">East</option>
		  <option value="South sq.ft">South</option>
		  <option value="West sq.ft">West</option>
		</select>

		<select   class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Bedrooms</option>
		  <option value="1">1 bedroom</option>
		  <option value="2">2 bedrooms</option>
		  <option value="3">3 bedrooms</option>
		  <option value="4">4 bedrooms</option>
		  <option value="5">5 bedrooms</option>
		</select>

		<select  class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Bathrooms</option>
		  <option value="1">1 bathroom</option>
		  <option value="2">2 bathrooms</option>
		  <option value="3">3 bathrooms</option>
		  <option value="4">4 bathrooms</option>
		  <option value="5">5 bathrooms</option>
		</select>
		<select   class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Balcony</option>
		  <option value="1">Yes</option>
		  <option value="0">No</option>
		</select>
	  </div>
<UnitsList></UnitsList>
	</div>
  </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
h2 {
  font-weight: bold;
  font-weight: 700;
font-family: 'Montserrat', sans-serif;
}
p {
font-family: 'Hind', sans-serif;
}
</style>
