export default {
    select: {
        events: {
            beforeSelectOpen: (select) => {
                select.setData([{value: "usd", text: "US Dollor"}, {value: "rmb", text: "Chinese Yuan"}]);
            }
        }
    },
    button: {
        events: {
            "html.click": (btn) => {
                btn.doClick();
            }
        },
        functions: {
            doClick: function() {
                console.log("btn clicked", this);
            }
        }
    },
    textField: {
        events: {
            beforeComponentRender: (tf) => {
                tf.setAttributes({
                    value: "user.name"
                });
            }
        }
    }
}