<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome</h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your One Stop
        Shop
        for all of your Captain Needs.</p>
    </div>
  </section>

  <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <div class="w-full">
      <div class="flex flex-col w-full mb-10 sm:flex-row">
        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Contest Ideas</h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
              <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                decentralized network that combines a smart contract and a frontend user interface.</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2">
          <div class="relative h-full ml-0 md:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Responsive Tournament Bracket</h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
              <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                focus on understanding and analyzing data to provide a semantic web.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mb-5 sm:flex-row">
        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Captain Report Template</h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
              <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                to assess the extent up to which project management standards are being upheld.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  <footer class="bg-white rounded-lg shadow m-4 dark:bg-blue-950">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/"
          class="hover:underline">rG Nitch</a>. All Rights Reserved.
      </span>
      <ul
        class="space-x-4 flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <RouterLink class="text-white hover:text-gray-200" to="/contests">Contest Ideas</RouterLink>
        </li>
        <li>
          <RouterLink class="text-white hover:text-gray-200" to="/bracket">Tournament Bracket</RouterLink>
        </li>
        <li>
          <RouterLink class="text-white hover:text-gray-200" to="/report">Captain Report</RouterLink>
        </li>
        <li>
          <RouterLink class="text-white hover:text-gray-200" to="/report-output">Captain Report Output</RouterLink>
        </li>
      </ul>
    </div>
  </footer>

</template>

<script>

</script>
