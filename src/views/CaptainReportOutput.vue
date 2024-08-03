<template>
    <div class="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-4">Phoenix Captain Report - Markdown View</h1>

        <pre class="bg-gray-100 p-4 rounded border">
        <code>
          **Phoenix Captain Report**
  
          **Date:** {{ report.date }}
  
          **Captain's Name:** {{ report.captainsName }}
  
          **Platoon Total Members:** {{ report.platoonMembers }}
  
          **Are your LTs meeting expectations? Any improvement needed?**
          {{ report.ltsExpectations }}
  
          **Name:** KOZY
          -Opportunities:
          {{ report.kozyOpportunities }}
  
          **Name:** TBD
          -Opportunities:
          {{ report.tbdOpportunities }}
  
          **Are Sergeants meeting expectations? If the platoon has 0 Sergeants, anyone interested in joining leadership?**
          {{ report.sergeantsExpectations }}
  
          **Any members ready to be promoted or demoted?**
          {{ report.promotionsDemotions }}
  
          **List members who are inactive and may lose their Phoenix role:**
          {{ report.inactiveMembers }}
  
          **Recruitment status:**
          {{ report.recruitmentStatus }}
  
          **Suggestions for Phoenix?**
          {{ report.suggestions }}
        </code>
      </pre>

        <button @click="copyToClipboard" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Copy to Clipboard
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            report: {}
        };
    },
    methods: {
        copyToClipboard() {
            const text = `
  **Phoenix Captain Report**
  
  **Date:** ${this.report.date || ''}
  
  **Captain's Name:** ${this.report.captainsName || ''}
  
  **Platoon Total Members:** ${this.report.platoonMembers || ''}
  
  **Are your LTs meeting expectations? Any improvement needed?**
  ${this.report.ltsExpectations || ''}
  
  **Name:** KOZY
  -Opportunities:
  ${this.report.kozyOpportunities || ''}
  
  **Name:** TBD
  -Opportunities:
  ${this.report.tbdOpportunities || ''}
  
  **Are Sergeants meeting expectations? If the platoon has 0 Sergeants, anyone interested in joining leadership?**
  ${this.report.sergeantsExpectations || ''}
  
  **Any members ready to be promoted or demoted?**
  ${this.report.promotionsDemotions || ''}
  
  **List members who are inactive and may lose their Phoenix role:**
  ${this.report.inactiveMembers || ''}
  
  **Recruitment status:**
  ${this.report.recruitmentStatus || ''}
  
  **Suggestions for Phoenix?**
  ${this.report.suggestions || ''}
        `;

            navigator.clipboard.writeText(text).then(() => {
                alert('Text copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
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