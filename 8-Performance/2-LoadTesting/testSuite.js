const autocannon = require('autocannon');

const instance = autocannon({
    url: 'http://localhost:3000',
    connections: 1000,
    pipelining: 100,
    duration: 10
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });