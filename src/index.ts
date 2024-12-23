export * from './mimerenderer';
export * from './version';
export * from './widget';

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_kaitai extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_kaitai:plugin',
  description: 'Experiment with Kaitai Struct in jupyterlab',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_kaitai is activated!');
  }
};

export default plugin;
