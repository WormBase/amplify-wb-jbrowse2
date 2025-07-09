(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@jbrowse/core/Plugin'), require('@jbrowse/core/util'), require('@jbrowse/core/pluggableElementTypes'), require('@jbrowse/core/configuration'), require('react/jsx-runtime'), require('@mui/material/utils'), require('mobx-react'), require('tss-react/mui'), require('@mui/material'), require('@jbrowse/core/util/types/mst'), require('mobx-state-tree')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@jbrowse/core/Plugin', '@jbrowse/core/util', '@jbrowse/core/pluggableElementTypes', '@jbrowse/core/configuration', 'react/jsx-runtime', '@mui/material/utils', 'mobx-react', 'tss-react/mui', '@mui/material', '@jbrowse/core/util/types/mst', 'mobx-state-tree'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JBrowsePluginJBrowseSiteSpecificHelp = {}, global.JBrowseExports.react, global.JBrowseExports["@jbrowse/core/Plugin"], global.JBrowseExports["@jbrowse/core/util"], global.JBrowseExports["@jbrowse/core/pluggableElementTypes"], global.JBrowseExports["@jbrowse/core/configuration"], global.JBrowseExports["react/jsx-runtime"], global.JBrowseExports["@mui/material/utils"], global.JBrowseExports["mobx-react"], global.JBrowseExports["tss-react/mui"], global.JBrowseExports["@mui/material"], global.JBrowseExports["@jbrowse/core/util/types/mst"], global.JBrowseExports["mobx-state-tree"]));
})(this, (function (exports, React, Plugin, util, pluggableElementTypes, configuration, jsxRuntime, utils, mobxReact, mui, material, mst, mobxStateTree) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var Plugin__default = /*#__PURE__*/_interopDefaultLegacy(Plugin);

  var HelpIcon = utils.createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
  }), 'Help');

  var version = "1.0.0";

  const configSchema = configuration.ConfigurationSchema('WBHelpWidget', {});
  const useStyles = mui.makeStyles()(theme => ({
      root: {
          margin: theme.spacing(2),
      },
      subtitle: {
          margin: theme.spacing(1),
      },
  }));
  function WBHelp({ model }) {
      const { classes } = useStyles();
      model ? util.getSession(model) : { version: '' };
      return (React__default["default"].createElement("div", { className: classes.root },
          React__default["default"].createElement(material.Typography, { variant: "h4", align: "center" }, "JBrowse 2 @ WormBase"),
          React__default["default"].createElement("ul", null,
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/06/22/jbrowse-2-comparative-data/", target: "_blank", rel: "noopener noreferrer" }, "Working with comparative/synteny data")),
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/06/21/jbrowse-2-getting-sequence/", target: "_blank", rel: "noopener noreferrer" }, "Getting DNA sequence")),
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/06/21/jbrowse-2-searching-for-features-and-sequences/", target: "_blank", rel: "noopener noreferrer" }, "Searching for features and sequences")),
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/06/21/jbrowse-2-working-lists-bookmarks-and-sessions/", target: "_blank", rel: "noopener noreferrer" }, "Working with lists, bookmarks and sessions")),
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/06/23/jbrowse-2-adding-your-own-data/", target: "_blank", rel: "noopener noreferrer" }, "Adding your own data")),
              React__default["default"].createElement("li", null,
                  React__default["default"].createElement(material.Link, { href: "https://blog.wormbase.org/2023/07/14/jbrowse-2-sharing-views/", target: "_blank", rel: "noopener noreferrer" }, "Sharing views"))),
          React__default["default"].createElement("p", null,
              "The source code for this help widget plugin is on ",
              React__default["default"].createElement("a", { target: "_blank", href: "https://github.com/scottcain/jbrowse-site-specific-help" }, "GitHub"))));
  }
  var WBHelpWidget = mobxReact.observer(WBHelp);

  var WBHelpWidget$1 = {
    __proto__: null,
    configSchema: configSchema,
    'default': WBHelpWidget
  };

  var WBHelpWidgetStateModel = mobxStateTree.types.model('WBHelpWidget', {
      id: mst.ElementId,
      type: mobxStateTree.types.literal('WBHelpWidget'),
  });

  class JBrowseSiteSpecificHelp extends Plugin__default["default"] {
      name = 'JBrowseSiteSpecificHelp';
      version = version;
      install(pluginManager) {
          pluginManager.addWidgetType(() => {
              return new pluggableElementTypes.WidgetType({
                  name: 'WBHelpWidget',
                  heading: 'WormBase Help',
                  configSchema: configuration.ConfigurationSchema('WBHelpWidget', {}),
                  stateModel: WBHelpWidgetStateModel,
                  ReactComponent: React.lazy(() => Promise.resolve().then(function () { return WBHelpWidget$1; })),
              });
          });
      }
      configure(pluginManager) {
          if (util.isAbstractMenuManager(pluginManager.rootModel)) {
              pluginManager.rootModel.appendToMenu('Help', {
                  label: 'WormBase Help',
                  icon: HelpIcon,
                  onClick: (session) => {
                      const widget = session.addWidget('WBHelpWidget', 'wbhelpWidget');
                      session.showWidget(widget);
                  },
              });
          }
      }
  }

  exports["default"] = JBrowseSiteSpecificHelp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jbrowse-site-specific-help.umd.development.js.map
