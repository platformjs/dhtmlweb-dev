import ComponentPalette from "./src/ComponentPalette.js";
import ComponentProxy from "./src/ComponentProxy.js";
import Event from "./src/core/Event.js";
import Designer from "./src/Designer.js";
import Editor from "./src/Editor.js";
import EventEditor from "./src/EventEditor.js";
import Ext from "./src/ext/Ext.js";
import LayoutEditor from "./src/LayoutEditor.js";
import common from "./src/meta/common.js";
import componentsmeta from "./src/meta/componentsmeta.js";
import Component from "./src/metadata/Component.js";
import Container from "./src/metadata/Container.js";
import MetaDataManager from "./src/metadata/MetaDataManager.js";
import NavigatorManager from "./src/navigator/NavigatorManager.js";
import NavigatorTree from "./src/navigator/NavigatorTree.js";
import NavigatorTreeItem from "./src/navigator/NavigatorTreeItem.js";
import Outline from "./src/Outline.js";
import PropertyEditor from "./src/PropertyEditor.js";
export default
 {
  ComponentPalette,
  ComponentProxy,
  core: {
      Event,
    },
  Designer,
  Editor,
  EventEditor,
  ext: {
      Ext,
    },
  LayoutEditor,
  meta: {
      common,
      componentsmeta,
    },
  metadata: {
      Component,
      Container,
      MetaDataManager,
    },
  navigator: {
      NavigatorManager,
      NavigatorTree,
      NavigatorTreeItem,
    },
  Outline,
  PropertyEditor,
}