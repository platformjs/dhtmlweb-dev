import common from "./common";
export default {
    "components": {
        "dweb.component.Button": {
            type: "COMPONENT",
            icon: "",
            attr: $.extend(true, {}, common, {
                title: {
                    type: "string",
                    text: "Title"
                }
            })
        },
        "dweb.component.Panel": {
            type: "COMPONENT",
            icon: "",
            attr: $.extend(true, {}, common, {
                title: {
                    type: "string",
                    text: "Title"
                }
            })
        },
        "dweb.component.Select": {
            type: "COMPONENT",
            icon: "",
            attr: $.extend(true, {}, common,  {
                title: {
                    type: "string",
                    text: "Title"
                },
                text: {
                    type: "string",
                    text: "Text"
                },
                value: {
                    type: "string",
                    text: "Value"
                }
            })
        },
        "dweb.component.TextField": {
            type: "COMPONENT",
            icon: "",
            attr: $.extend(true, {}, common, {
                value: {
                    type: "string",
                    text: "Value"
                },
                formatter: {
                    type: "string",
                    text: "Formatter"
                },
                parser: {
                    type: "string",
                    text: "Parser"
                },
                pattern: {
                    type: "string",
                    text: "Pattern"
                }
            })
        },
        "dweb.component.Label": {
            type: "COMPONENT",
            icon: "",
            attr: $.extend(true, {}, common, {
                title: {
                    type: "string",
                    text: "Title"
                }
            })
        },
        "dweb.component.Container": {
            type: "CONTAINER",
            icon: "",
            attr: $.extend(true, {}, common)
        }
    },
    "layouts": {
        "dweb.layout.FlowLayout": {
            attr: {

            }
        },
        "dweb.layout.GridLayout": {
            attr: {
                numberOfColumn: {
                    type: "number",
                    text: "N. of C."
                }
            }
        }
    }
}