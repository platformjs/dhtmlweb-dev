import Util from "../../dhtmlweb/src/util/Util";

export default class LayoutEditor extends dweb.component.Panel {
    constructor() {
        super();
        this.set({
            title: "Layout",
            width: 400,
            height: 300
        });
    }
}