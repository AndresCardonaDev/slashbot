function ManagerRegistry(config){
    this.name = 'ManagerRegistry';
    this.config = config;
    this.bot = null;
    this.managers = {};
}

ManagerRegistry.prototype = {

    register (manager) {
        // validate manager
        console.log('manager', manager.name);
        if (!manager.name) {
            throw 'Manager does not have a name property.'
        }
        // register manager
        this.managers[manager.name] = manager;
    },

    processMessage() {

    }

}

module.exports = ManagerRegistry;
