const os = require('os')

specs = {
     host : os.hostname(),
     platform : os.platform(),
     totalMem : os.totalmem()/1000000,
     freeMem : os.freemem()/1000000,
     type : os.type(),
     uptime : os.uptime()/3600,
     architecture : os.arch(),
     cpus:os.cpus()
}


module.exports = specs