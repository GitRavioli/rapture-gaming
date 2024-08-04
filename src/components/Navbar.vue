<script setup>

</script>

<template>


  <nav class="flex items-center justify-between flex-wrap bg-blue-950 p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">

        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">
            <RouterLink to="/">rG Nitch</RouterLink>
          </span>
        </div>
      </div>
      <div class="space-x-4">
        <RouterLink class="text-white hover:text-gray-200" to="/contests">Contest Ideas</RouterLink>
        <RouterLink class="text-white hover:text-gray-200" to="/bracket">Tournament Bracket</RouterLink>
        <RouterLink class="text-white hover:text-gray-200" to="/report">Captain Report</RouterLink>
        <RouterLink class="text-white hover:text-gray-200" to="/report-output">Captain Report Output</RouterLink>
        <RouterLink class="text-white hover:text-gray-200" to="/captain-notes">Captain Notes</RouterLink>
      </div>
    </div>
  </nav>

</template>
