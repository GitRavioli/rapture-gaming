<template>
    <div class="border p-4 rounded mb-4 shadow-lg">
        <div class="flex justify-between items-center mb-4">
            <input v-model="localContest.idea" type="text" class="text-xl font-bold border-none w-full bg-transparent"
                placeholder="Enter contest idea" />
            <button @click="deleteContest" class="text-red-500 hover:text-red-700 ml-4">
                Delete
            </button>
        </div>
        <ul class="list-disc pl-5 mt-2">
            <li v-for="(rule, index) in localRules" :key="index" class="flex items-center mb-2">
                <input v-model="localRules[index]" type="text" class="border p-2 rounded w-full"
                    placeholder="Enter rule" />
                <button @click="removeRule(index)" class="text-red-500 hover:text-red-700 ml-2">
                    Remove
                </button>
            </li>
        </ul>
        <div class="mt-2">
            <input v-model="newRule" type="text" class="border p-2 rounded w-full" placeholder="Add new rule" />
            <button @click="addRule" class="bg-blue-950 text-white px-4 py-2 rounded mt-2">
                Add Rule
            </button>
        </div>
        <button @click="saveChanges" class="bg-blue-950 text-white px-4 py-2 rounded mt-2">
            Save Changes
        </button>
    </div>
</template>

<script>
export default {
    props: {
        contest: Object
    },
    data() {
        return {
            localContest: { ...this.contest },
            localRules: [...this.contest.rules],
            newRule: ''
        };
    },
    methods: {
        deleteContest() {
            this.$emit('delete');
        },
        saveChanges() {
            this.$emit('update', { idea: this.localContest.idea, rules: this.localRules });
        },
        addRule() {
            if (this.newRule.trim() !== '') {
                this.localRules.push(this.newRule);
                this.newRule = '';
            }
        },
        removeRule(index) {
            this.localRules.splice(index, 1);
        }
    }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>