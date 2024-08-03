<template>
    <div class="w-full max-w-lg">
        <h2 class="text-2xl font-semibold mb-4">Changelog</h2>
        <form @submit.prevent="addEntry" class="flex mb-4">
            <input v-model="newEntry" placeholder="Add new changelog entry"
                class="flex-1 p-2 border border-gray-300 rounded-l-md" />
            <button type="submit" class="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Add</button>
        </form>
        <ul class="space-y-2">
            <li v-for="(entry, index) in changelogEntries" :key="index"
                class="flex justify-between items-center bg-white p-2 border border-gray-300 rounded-md">
                <span>{{ entry }}</span>
                <button @click="removeEntry(index)" class="text-red-500 hover:underline">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newEntry: '',
            changelogEntries: JSON.parse(localStorage.getItem('changelogEntries')) || []
        };
    },
    methods: {
        addEntry() {
            if (this.newEntry.trim()) {
                this.changelogEntries.push(this.newEntry.trim());
                this.newEntry = '';
                this.saveEntries();
            }
        },
        removeEntry(index) {
            this.changelogEntries.splice(index, 1);
            this.saveEntries();
        },
        saveEntries() {
            localStorage.setItem('changelogEntries', JSON.stringify(this.changelogEntries));
        }
    }
};
</script>

<style scoped>
/* Add your styles here if necessary */
</style>