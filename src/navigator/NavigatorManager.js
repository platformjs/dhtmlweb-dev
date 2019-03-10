import NavigatorTree from "./NavigatorTree";

const template = `
<div class="panel panel-default" style="height:400px;margin-bottom:0px;">
  <div class="panel-heading">Navigator</div>
  <div class="panel-body"></div>
</div>
`;
export default class NavigatorManager {
    constructor(selector, metaDataManager) {
        this.metaDataManager = metaDataManager;
        this.selector = selector;
    }
    render() {
        this.$el = $(this.selector);
        this.$el.html(template);
        this.navigatorManager = new NavigatorTree(this.$el.find(".panel-body")).render();
        return this;
    }
}