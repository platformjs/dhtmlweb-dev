import Util from "../../dhtmlweb/src/util/Util";

export default class Outline extends dweb.component.Panel{
    constructor(meta, editor) {
        super();
        this.editor = editor;
        this.meta = meta;
        this.set({
            title: "Outline",
            width: 400,
            height: 300
        });
        const tree = this.tree = new dweb.component.Tree();
        tree.bind("beforeComponentRender", () => {
            tree.setData(this.getTreeData());
        });
        this.addComponents(tree);
        tree.bind("afterSelected", (tree, id) => {
            this.editor.selectComponent(id);
        });
    }
    getTreeData() {
        const data = {
            items: []
        };
        const dataItems = [this.meta];
        this.extract(data.items, dataItems)
        return data;
    }

    extract(items, dataItems) {
        Util.each(dataItems, dataItem => {
            const item = {
                id: dataItem.attr.id,
                name: dataItem.attr.clazz
            };
            if (dataItem.components) {
                item.expanded = true;
                item.items = [];
                this.extract(item.items, dataItem.components);
            }
            items.push(item);
        });
    }

    selectComponent(component) {
        this.components[0].select(component.get("id"));
    }

    addComponent(parentId, component) {
        this.tree.addItem(parentId, {
            id: component.get("id"),
            name: component.get("clazz"),
            items: this.editor.isContainer(component) ? [] : null
        });
    }
}