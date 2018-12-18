export default class ComponentPalette extends dweb.component.Panel {
    constructor(editor, componentMetas) {
        super();
        this.set({
            title: "Component Palette",
            width: 400,
            height: 300
        });
        this.editor = editor;
        this.componentMetas = componentMetas;

        const layout = new dweb.layout.GridLayout({
            numberOfColumn: 1
        });
        this.setLayout(layout);

        const btns = [];
        dweb.util.Util.each(componentMetas, meta => {
            const btn = new dweb.component.Button();
            btn.set({
                title: meta.clazz,
                clazz: meta.clazz,
                disabled: true
            });
            btn.bind("html.click", (b) => {
                this.editor.addComponent(b.get("clazz"));
            });
            btns.push(btn);
        });
        this.addComponents(btns);
    }

    enableComponents() {
        dweb.util.Util.each(this.components, comp => comp.set({disabled: false}));
    }
    disableComponents() {
        dweb.util.Util.each(this.components, comp => comp.set({disabled: true}));
    }
}