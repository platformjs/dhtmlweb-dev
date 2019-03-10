import Event from "../core/Event";

export default class Component extends Event {
    constructor(props, events, functions, layoutData) {
        super();
        this.props = props || {};
        this.events = events || {};
        this.functions = functions || {};
        this.layoutData = layoutData || {};
    }

    toJSON() {
        return {
            props: this.props,
            events: this.events,
            functions: this.functions,
            layoutData: this.layoutData
        }
    }
}