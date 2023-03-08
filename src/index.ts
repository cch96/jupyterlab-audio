import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-audio extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-audio:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-audio is activated!');
  }
};

export default plugin;
