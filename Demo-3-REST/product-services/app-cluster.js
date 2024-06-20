const cluster = require('cluster');
const os = require('os')

if(cluster.isMaster){

    const cpus = os.cpus().length;
    console.log(cpus)
    console.log(`Executing master: ${process.pid}`);

    for (let i = 0; i < cpus; i++) {
        const worker = cluster.fork();
        
    }
    cluster.on("exit", () => {
        console.log("A worker exit............");
        cluster.fork();
    })
}
else{
    
    console.log(`Executing worker: ${process.pid}`);
    require('./app');
}