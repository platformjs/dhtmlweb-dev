export default {
    select: {
        events: {
            beforeSelectOpen: (select) => {
                select.setData([{value: "yes", text: "Yes"}, {value: "no", text: "No"}]);
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
    }
}