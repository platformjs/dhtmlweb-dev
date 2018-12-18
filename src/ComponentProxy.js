export default class ComponentProxy {
    constructor() {
        this.$top = $(`<div></div>`);
        this.$right = $(`<div></div>`);
        this.$bottom = $(`<div></div>`);
        this.$left = $(`<div></div>`);

        this.$top.appendTo("body");
        this.$right.appendTo("body");
        this.$bottom.appendTo("body");
        this.$left.appendTo("body");
    }
    highlight(component) {
        this.component = component;
        const position = this.component.$el.offset();
        const width = this.component.$el.outerWidth();
        const height = this.component.$el.outerHeight();

        this.$top.css({
            width,
            height: "1px",
            top: position.top,
            left: position.left,
            background: "blue",
            position: "absolute"
        });
        this.$right.css({
            width: "1px",
            height,
            top: position.top,
            left: position.left + width,
            background: "blue",
            position: "absolute"
        });
        this.$bottom.css({
            width,
            height: "1px",
            top: position.top + height,
            left: position.left,
            background: "blue",
            position: "absolute"
        });
        this.$left.css({
            width: "1px",
            height,
            top: position.top,
            left: position.left,
            background: "blue",
            position: "absolute"
        });
    }
}