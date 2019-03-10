import Component from "./Component";
import Container from "./Container";
export default class MetaDataManager {
    constructor(meta) {
        this.root = this.createMeta(meta);
    }
    toJSON() {
        return this.root.toJSON();
    }
    createMeta(meta) {
        if (meta.components) {
            const container = new Container(meta.props, meta.events, meta.functions, meta.layoutData, meta.layout);
            for (let i = 0, n = meta.components.length; i < n; i++) {
                const compMeta = meta.components[i];
                container.addComponent(this.createMeta(compMeta));
            }
            return container;
        } else {
            return new Component(meta.props, meta.events, meta.functions, meta.layoutData);
        }
    }

    addComponent(container, meta) {
        container.addComponent(this.createMeta(meta));
    }
}