<script>
export default {
    data() {
        return {
            rounds: this.loadRounds() // Load rounds from local storage
        };
    },
    methods: {
        loadRounds() {
            const savedRounds = localStorage.getItem('tournamentRounds');
            if (savedRounds) {
                return JSON.parse(savedRounds);
            }
            return [
                [
                    ["Team 1", "Team 2"],
                    ["Team 3", "Team 4"],
                    ["Team 5", "Team 6"],
                    ["Team 7", "Team 8"]
                ],
                [
                    ["Winner 1", "Winner 2"],
                    ["Winner 3", "Winner 4"]
                ],
                [
                    ["Winner 5", "Winner 6"]
                ]
            ];
        },
        saveRounds() {
            localStorage.setItem('tournamentRounds', JSON.stringify(this.rounds));
        }
    },
    watch: {
        rounds: {
            handler: 'saveRounds',
            deep: true
        }
    }
};
</script>

<template>

    <section class="bg-white dark:bg-gray-900 height-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl max-h-screen-xl text-center">
            <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                8 Team Tournament Bracket</h1>

            <div class="contests mx-5 my-5">
                <div class="h-auto rounded-lg bg-gray-200">
                    <div class="p-4">
                        <div class="flex flex-col items-center">
                            <div v-for="(round, roundIndex) in rounds" :key="roundIndex"
                                class="flex flex-col items-center mb-8">
                                <div class="text-2xl font-bold mb-4">Round {{ roundIndex + 1 }}</div>
                                <div class="flex flex-wrap justify-center">
                                    <div v-for="(match, matchIndex) in round" :key="matchIndex"
                                        class="m-2 p-4 border rounded">
                                        <div v-for="(team, teamIndex) in match" :key="teamIndex" class="mb-2">
                                            <input type="text" v-model="rounds[roundIndex][matchIndex][teamIndex]"
                                                class="border p-2 rounded" placeholder="Enter team name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>
