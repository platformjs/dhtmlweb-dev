import Util from "../../dhtmlweb/src/util/Util";

export default class EventEditor {
    constructor() {
        
    }
    render() {
        this.panel = new dweb.component.Panel();
        this.panel.set({
            title: "Events",
            width: 400,
            height: 300
        });
        this.$el = $(`<div></div>`);
        this.$el.html(this.panel.render().$el);
        return this;
    }
}