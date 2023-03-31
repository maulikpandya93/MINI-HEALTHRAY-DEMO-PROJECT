const redis = require('redis');
const client = redis.createClient({
    host : 'localhsot',
    port : 6379
})

module.exports = client;