export default class ComponentPalette extends dweb.component.Container {
    constructor(editor, componentMetas) {
        super();
        this.set({
            width: 80
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
                disabled: true,
                width: 40
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