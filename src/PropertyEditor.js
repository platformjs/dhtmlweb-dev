const Util = dweb.util.Util;
export default class PropertyEditor extends dweb.component.Panel {
    constructor(editor) {
        super();
        this.editor = editor;
        this.set({
            title: "Properties",
            width: 400,
            height: 300
        });
        const gridLayout = new dweb.layout.GridLayout({
            numberOfColumn: 2
        });
        this.setLayout(gridLayout);
        this.watchers = [];
    }

    getEditProperties() {
        return this.editor.getEditProperties(this.editComponent);
    }

    showProperties() {
        const props = this.getEditProperties();
        this.clearComponents();
        Util.each(props, prop => {
            const label = new dweb.component.Label();
            label.set({title: prop.text});
            const propEditor = this.getEditorComponent(prop);
            this.addComponents([label, propEditor]);
            this.watchers.push(new dweb.util.Watcher(this.editComponent, prop.name, propEditor, "value"));
        });
    }

    getEditorComponent(prop) {
        const textField = new dweb.component.TextField();
        textField.set({
            value: this.editComponent.get(prop.name),
            name: prop.name,
            readonly: prop.readonly,
            inputParser: prop.type
        });
        return textField;
    }

    cleanWatch() {
        Util.each(this.watchers, watcher => watcher.destroy());
        this.watchers.length = 0;
    }

    selectComponent(editComponent) {
        this.editComponent = editComponent;
        this.showProperties();
    }
}