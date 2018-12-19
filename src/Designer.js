export default class Designer extends dweb.component.Container{
    constructor(meta, editor) {
        super();
        this.editor = editor;
        this.meta = meta;
        this.set({
            width: 500,
            height: 500
        })
        //TODO how does it get here
        var user = window.user = new dweb.data.Data();
        user.set({
            name: "Jacky Wang"
        });
        this.setModel("user", user);
        user.bind("changed", (m) => {
            console.log(m.get("name"));
        });
        dweb.generator.ComponentCreator.create(this, this.meta)
        // this.bind("html.mousemove", (container, evt) => {
        //     clearTimeout(this.timeoutHandler);
        //     this.timeoutHandler = setTimeout(() => {
        //         let $target = $(evt.target);
        //         while($target.length) {
        //             const id = $target.attr("id");
        //             if (id) {
        //                 this.editor.hoverComponent(id);    
        //                 break;
        //             }
        //             $target = $target.parent();
        //         }
        //     }, 50);
        // });
        this.bind("html.mousedown", (container, evt) => {
            let $target = $(evt.target);
            while($target.length) {
                const id = $target.attr("id");
                if (id) {
                    this.editor.selectComponent(id);    
                    break;
                }
                $target = $target.parent();
            }
        });
    }

    getComponentById(id) {
        let components = [].concat(this.components);
        while(components.length) {
            const component = components.shift();
            if (id === component.get("id")) {
                return component;
            }
            if (component.components) {
                components = components.concat(component.components);
            }
        }
    }

    selectComponent(component) {

    }
}