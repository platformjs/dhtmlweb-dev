import Component from "./Component";

export default class Container extends Component {
    constructor(props, events, functions, layoutData, layout) {
        super(props, events, functions, layoutData);
        this.components = [];
        this.layout = layout || {};
    }

    toJSON() {
        const json = super.toJSON();
        json.layout = this.layout;
        json.components = [];
        for (let i = 0, n = this.components.length; i < n; i++) {
            json.components.push(this.components[i].toJSON());
        }
        return json;
    }

    addComponent(component) {
        this.components.push(component);
    }
}