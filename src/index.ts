import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the galaxalabs_jupyterlab_titanium_dark_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'galaxalabs_jupyterlab_titanium_dark_theme:plugin',
  description:
    'IntelliJ Darcula Theme tweaked by Stellars, based on original Darcula theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension galaxalabs_jupyterlab_titanium_dark_theme is activated!'
    );
    const style = 'galaxalabs_jupyterlab_titanium_dark_theme/index.css';

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
