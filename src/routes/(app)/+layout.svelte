<script lang="ts">
     import logo from '$lib/images/logo1.png'
    import "../app.css";
</script>
<div class="isolate bg-white">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
    </div>
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="/home" class="-m-1.5 p-1.5">
                <span class="sr-only">Japanese training</span>
                <img class="h-20" src={logo} alt="japanese_training">
            </a>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
        </div>
        <form class="flex items-center">   
          <label for="simple-search" class="sr-only">Хайх</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Хайх" required>
          </div>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Хайх</span>
          </button>
      </form>
      &nbsp;&nbsp;&nbsp;
        <div class="hidden lg:flex lg:gap-x-12">
            
            <a href="/lesson" class="text-sm font-semibold leading-6 text-gray-900">Багц хичээл</a>

            <a href="/material" class="text-sm font-semibold leading-6 text-gray-900">JLPT материал</a>

            <a href="/information" class="text-sm font-semibold leading-6 text-gray-900">Мэдээ мэдээлэл</a>

            <a href="/video" class="text-sm font-semibold leading-6 text-gray-900">Аудио, видео</a>

            <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Нэвтрэх</a>
            
        </div>
      
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="dialog" aria-modal="true">
        <div class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex items-center justify-between">
                <a href="/home" class="-m-1.5 p-1.5">
                    <span class="sr-only">Japanese training</span>
                    <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                  </a>
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        
                        <a href="/lesson" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Багц хичээл</a>
          
                        <a href="/material" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">JLPT материал</a>

                        <a href="/information" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Мэдээ мэдээлэл</a>

                        <a href="/video" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Аудио, видео</a>
                    </div>
                    <div class="py-6">
                        <a href="/login" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Нэвтрэх</a>
                      </div>
                      
                      
                </div>
            </div>
        </div>
      </div>
    </div>
    <slot></slot>
</div>
<div class="bg-white">
  <div class="max-w-2xl mx-auto text-white py-10">
      <div class="text-center">
          <!-- <h3 class="text-3xl mb-3 text-gray-900"> Download our japanese training app </h3>
          <p>Өдөр бүр суралцах хэрэгтэй </p> -->
          <div class="flex justify-center my-5">
              <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" alt="">
                  <div class="text-left ml-3">
                      <p class='text-xs text-gray-900'>Татах линк </p>
                      <p class="text-sm md:text-base text-gray-900"> Google Play Store </p>
                  </div>
              </div>
              <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" alt="">
                  <div class="text-left ml-3">
                      <p class='text-xs text-gray-900'>Татах линк</p>
                      <p class="text-sm md:text-base text-gray-900"> Apple Store </p>
                  </div>
              </div>
          </div>
      </div>
      <div class="mt-2 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
          <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; 2023 Япон хэлний сургалт </p>
          <div class="order-1 md:order-2">
              <span class="px-2">Хөгжүүлэгч</span>
              <span class="px-2">Холбоо барих</span>
          </div>
      </div>
  </div>
</div>