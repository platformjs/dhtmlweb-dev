import Designer from "./Designer";
import Outline from "./Outline";
import PropertyEditor from "./PropertyEditor";
import EventEditor from "./EventEditor";
import LayoutEditor from "./LayoutEditor";
import LayoutDataEditor from "./LayoutDataEditor";
import ComponentPalette from "./ComponentPalette";
import ComponentProxy from "./ComponentProxy";
import componentsmeta from "./meta/componentsmeta";

export default class Editor extends dweb.component.Container{
    constructor(path, meta) {
        super();
        this.path = path;
        this.meta = meta;

        this.componentProxy = new ComponentProxy();
        this.designer = new Designer(this.meta, this);
        this.outline = new Outline(this.meta, this);
        this.propertyEditor = new PropertyEditor(this);
        this.layoutEditor = new LayoutEditor();
        this.layoutDataEditor = new LayoutDataEditor();
        this.componentPalette = new ComponentPalette(this, this.getAvailableComponents());

        this.container = new dweb.component.Container();
        this.container.addComponents([this.componentPalette, this.outline, this.propertyEditor, 
                                        this.layoutEditor, this.layoutDataEditor]);
   
        this.addComponents([this.designer, this.container]);
        this.setLayout(new dweb.layout.GridLayout({
            numberOfColumn: 2
        }));
    }

    selectComponent(id) {
        const component = this.designer.getComponentById(id);
        if (!component) {
            return;
        }
        this.highlightComponent(component);
        if (this.selectedComponent === component) {
            return;
        }
        this.selectedComponent = component;
        dweb.util.Log.debug(`select component on ${id}`, component);
        this.designer.selectComponent(component);
        this.outline.selectComponent(component);
        this.propertyEditor.selectComponent(component);
        if (this.isContainer(component)) {
            this.componentPalette.enableComponents();
        } else {
            this.componentPalette.disableComponents();
        }
    }

    save() {

    }

    undo() {

    }

    redo() {

    }

    highlightComponent(component) {
        this.componentProxy.highlight(component);
    }

    getEditProperties(component) {
        const meta = this.getComponentMeta(component.get("clazz"));
        if (!meta) {
            dweb.util.Log.warn(`No such component ${component.get("clazz")} is defined!`);
            return [];
        }
        const props = [];
        dweb.util.Util.each(meta.attr, (value, key) => {
            props.push({
                name: key,
                text: value.text,
                type: value.type,
                readonly: value.readonly
            });
        });
        return props.sort((a, b) => a.text.localeCompare(b.text));
    }

    getAvailableComponents() {
        const coms = [];
        dweb.util.Util.each(componentsmeta.components, (meta, clazz) => {
            coms.push({
                clazz,
                type: meta.type,
                icon: meta.icon
            });
        });
        return coms;
    }

    getComponentMeta(clazz) {
        return componentsmeta.components[clazz];
    }

    addComponent(clazz) {
        const Clazz = dweb.generator.ComponentCreator.getClassFromPath(clazz);
        const obj = new Clazz();
        obj.set({
            clazz
        });
        if (this.isContainer(this.selectedComponent)) {
            this.selectedComponent.addComponents(obj);
            this.outline.addComponent(this.selectedComponent.get("id"), obj);
        }
    }

    isContainer(component) {
        return component && component.getLayout;
    }
}