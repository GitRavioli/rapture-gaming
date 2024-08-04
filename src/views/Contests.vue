<script>
import ContestCard from '@/components/ContestCard.vue';

export default {
  components: {
    ContestCard
  },
  data() {
    return {
      newContestIdea: '',
      contests: this.loadContests() // Load contests from local storage
    };
  },
  methods: {
    loadContests() {
      const savedContests = localStorage.getItem('contestIdeas');
      if (savedContests) {
        return JSON.parse(savedContests);
      }
      return [];
    },
    saveContests() {
      localStorage.setItem('contestIdeas', JSON.stringify(this.contests));
    },
    addContestIdea() {
      if (this.newContestIdea.trim() !== '') {
        this.contests.push({ idea: this.newContestIdea, rules: [] });
        this.newContestIdea = '';
        this.saveContests(); // Save to local storage after adding
      }
    },
    removeContest(index) {
      this.contests.splice(index, 1);
      this.saveContests(); // Save to local storage after removing
    },
    updateContest(index, updatedContest) {
      this.contests[index] = updatedContest; // Directly modify the array
      this.saveContests(); // Save to local storage after updating
    }
  },
  watch: {
    contests: {
      handler: 'saveContests',
      deep: true
    }
  }
};
</script>

<template>
  <div class="p-10 mx-10">
    <h1 class="text-2xl font-bold mb-4">Contest Ideas</h1>
    <div class="mb-4">
      <input v-model="newContestIdea" type="text" name="newContestIdea" class="border p-2 rounded w-full"
        placeholder="Enter your contest idea" />
      <button @click="addContestIdea" name="addContestIdea" class="mt-2 bg-blue-950 text-white px-4 py-2 rounded">
        Add Contest Idea
      </button>
    </div>
    <ContestCard v-for="(contest, index) in contests" :key="index" :contest="contest" @delete="removeContest(index)"
      @update="updateContest(index, $event)" />
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
