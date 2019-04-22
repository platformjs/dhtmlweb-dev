const template = `
    <div></div>
`;
export default class NavigatorTree {
    constructor(selector) {
        this.selector = selector;
    }
    render() {
        this.$el = $(this.selector);
        this.$el.html(template);
        return this;
    }
}