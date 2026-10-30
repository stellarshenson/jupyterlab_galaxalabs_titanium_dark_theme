import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @stellarshenson/galaxalabs-jupyterlab-titanium-dark-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@stellarshenson/galaxalabs-jupyterlab-titanium-dark-theme:plugin',
  description:
    'IntelliJ Darcula Theme tweaked by Stellars, based on original Darcula theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension @stellarshenson/galaxalabs-jupyterlab-titanium-dark-theme is activated!'
    );
    const style =
      '@stellarshenson/galaxalabs-jupyterlab-titanium-dark-theme/index.css';

    manager.register({
      name: 'Galaxa Dark Theme - Titanium',
      themeScrollbars: true,
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
