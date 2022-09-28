<template>
 <a href="#" class="block relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all">
    <div class="absolute top-0 right-0 bg-skin-accent text-skin-dark rounded-bl-xl text-sm px-3 py-2 shadow-md font-bold">Available</div>
   <div class="absolute top-0 left-0 bg-skin-accent text-skin-dark rounded-br-xl text-sm px-3 py-2 shadow-md font-bold">R16,000/Month</div>
  
  <img
    alt="Office"
    src="/WestWood.jpg"
    class="object-cover w-full h-56"
  />

  <div class="px-4 py-2 bg-white">
     <h5 class="text-md font-bold text-black">
     The Westwood Unit 002
    </h5>
    <p class="text-xs text-skin-black">William Street, Observatory</p>
       <dl class="grid grid-cols-5  gap-2 text-xs py-2 rounded-full">
              <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Bedrooms</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/beds.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium text-black">
          2
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Bathrooms</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/baths.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium text-black">
           2
          </dd>
        </div>
             <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Internal Area</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/area.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium text-black">
           90m<sup>2</sup>
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Balcony Area</span>
          <dt class="text-gray-500 text-center">
               <img src="/svg/outsideArea.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium text-black">
            8m<sup>2</sup>
          </dd>
        </div>
           <div class="tooltip mt-1.5 sm:mt-0 text-center">
           <span class="tooltiptext">Parking</span>
              <dt class="text-gray-500 text-center">
               <img src="/svg/car.svg"
          class="w-5 h-5 mb-1 text-gray-700 mx-auto" />
          </dt>

          <dd class="font-medium text-black">
           2
          </dd>
        </div>
    </dl>
  </div>
</a>

</template>

<script>
export default {

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