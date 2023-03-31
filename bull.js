const Queue = require('bull')
const myQueue = new Queue('myQueue')
const moment = require('moment')
exports.showMessage = async (payload) => {
  
    const createTime = moment(payload.createdAt).valueOf()
    const addedTime = moment(createTime).add(10, 's').valueOf()
    const delayTime = moment(addedTime).subtract(createTime).valueOf()
    const options = {
        attempts : 2,
        delay : delayTime
    }
    myQueue.add(payload, options)
    myQueue.process(job => {
        const {data} = job
        console.log(`emailed to ${data.email}`);
    })
}


