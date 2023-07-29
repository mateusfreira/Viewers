export default {
  id: 'jose',

  /**
   * @param {object} params
   * @param {object} params.configuration
   * @param {ServicesManager} params.servicesManager
   * @param {CommandsManager} params.commandsManager
   * @returns void
   */
  async preRegistration({ servicesManager, commandsManager, configuration }) {
    console.log('Wiring up important stuff.');

    window.importantStuff = () => {
      console.log(configuration);
    };

    console.log('Important stuff has been wired.');
    window.importantStuff();

    // Registering new services
    //servicesManager.registerService(MyNewService(servicesManager));
  },
};
