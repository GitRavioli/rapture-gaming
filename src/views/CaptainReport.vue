<template>
    <div class="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-4">Phoenix Captain Report</h1>

        <div class="mb-4">
            <label for="date" class="block text-lg font-semibold mb-1">__**Date:**__</label>
            <input v-model="report.date" id="date" type="date" class="border p-2 rounded w-full" />
        </div>

        <div class="mb-4">
            <label for="captainsName" class="block text-lg font-semibold mb-1">**Captain's Name:**</label>
            <input v-model="report.captainsName" id="captainsName" type="text" class="border p-2 rounded w-full" />
        </div>

        <div class="mb-4">
            <label for="platoonMembers" class="block text-lg font-semibold mb-1">**Platoon Total Members:**</label>
            <input v-model="report.platoonMembers" id="platoonMembers" type="number"
                class="border p-2 rounded w-full" />
        </div>

        <div class="mb-4">
            <label for="ltsExpectations" class="block text-lg font-semibold mb-1">**Are your LTs meeting expectations?
                Any improvement needed?**</label>
            <textarea v-model="report.ltsExpectations" id="ltsExpectations" class="border p-2 rounded w-full"
                rows="4"></textarea>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-bold">__Name:__ KOZY</h2>
            <label for="kozyOpportunities" class="block text-lg font-semibold mb-1">-Opportunities:</label>
            <textarea v-model="report.kozyOpportunities" id="kozyOpportunities" class="border p-2 rounded w-full"
                rows="3"></textarea>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-bold">__Name:__ TBD</h2>
            <label for="tbdOpportunities" class="block text-lg font-semibold mb-1">-Opportunities:</label>
            <textarea v-model="report.tbdOpportunities" id="tbdOpportunities" class="border p-2 rounded w-full"
                rows="3"></textarea>
        </div>

        <div class="mb-4">
            <label for="sergeantsExpectations" class="block text-lg font-semibold mb-1">**Are Sergeants meeting
                expectations? If the platoon has 0 Sergeants, anyone interested in joining leadership?**</label>
            <textarea v-model="report.sergeantsExpectations" id="sergeantsExpectations"
                class="border p-2 rounded w-full" rows="4"></textarea>
        </div>

        <div class="mb-4">
            <label for="promotionsDemotions" class="block text-lg font-semibold mb-1">**Any members ready to be promoted
                or demoted?**</label>
            <textarea v-model="report.promotionsDemotions" id="promotionsDemotions" class="border p-2 rounded w-full"
                rows="4"></textarea>
        </div>

        <div class="mb-4">
            <label for="inactiveMembers" class="block text-lg font-semibold mb-1">**List members who are inactive and
                may lose their Phoenix role:**</label>
            <textarea v-model="report.inactiveMembers" id="inactiveMembers" class="border p-2 rounded w-full"
                rows="4"></textarea>
        </div>

        <div class="mb-4">
            <label for="recruitmentStatus" class="block text-lg font-semibold mb-1">**Recruitment status:**</label>
            <textarea v-model="report.recruitmentStatus" id="recruitmentStatus" class="border p-2 rounded w-full"
                rows="4"></textarea>
        </div>

        <div class="mb-4">
            <label for="suggestions" class="block text-lg font-semibold mb-1">**Suggestions for Phoenix?**</label>
            <textarea v-model="report.suggestions" id="suggestions" class="border p-2 rounded w-full"
                rows="4"></textarea>
        </div>

        <button @click="saveReport" class="bg-blue-500 text-white px-4 py-2 mr-5 rounded mt-4">
            Save Report
        </button>
        <router-link :to="{ name: 'reportoutput', params: { report: savedReport } }"
            class="bg-green-500 text-white px-4 py-2 rounded mt-4">
            View Markdown
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            report: {
                date: '',
                captainsName: 'Nitch',
                platoonMembers: '',
                ltsExpectations: '',
                kozyOpportunities: '',
                tbdOpportunities: '',
                sergeantsExpectations: '',
                promotionsDemotions: '',
                inactiveMembers: '',
                recruitmentStatus: '',
                suggestions: ''
            }
        };
    },
    methods: {
        saveReport() {
            localStorage.setItem('phoenixCaptainReport', JSON.stringify(this.report));
            alert('Report saved!');
        }
    },
    mounted() {
        const savedReport = localStorage.getItem('phoenixCaptainReport');
        if (savedReport) {
            this.report = JSON.parse(savedReport);
        }
    }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>