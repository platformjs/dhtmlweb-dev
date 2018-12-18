import Util from "../../dhtmlweb/src/util/Util";

export default class LayoutDataEditor extends dweb.component.Panel{
    constructor() {
        super();
        this.set({
            title: "Layout Data",
            width: 400,
            height: 300
        });
    }
}