const nodeCron = require('node-cron')

exports.greet = async (payload) => {
    const goodMorning = nodeCron.schedule("0 8 * * 1-6", () => {
        console.log(`GOOD MORNING Dr.${payload.first_name} ${payload.last_name}!`);
    }, { scheduled: false })

    const goodAfternoon = nodeCron.schedule("0 13 * * 1-6", () => {
        console.log(`GOOD AFTERNOON Dr.${payload.first_name} ${payload.last_name}!`);
    }, { scheduled: false })

    const goodEvening = nodeCron.schedule("0 18 * * 1-6", () => {
        console.log(`GOOD EVENING Dr.${payload.first_name} ${payload.last_name}!`);
    }, { scheduled: false })

    goodMorning.start();
    goodAfternoon.start();
    goodEvening.start();
}

