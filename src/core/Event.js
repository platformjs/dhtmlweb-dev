const uuid = () => {
    let d = new Date().getTime();
    const id = "aaaaaaaa-aaaa-aaaa-baaa-aaaaaaaaaaaa".replace(/[ab]/g, function(c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "a" ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return id;
};

export default class Event {
    constructor() {
        this.__eventStore = {};
        this.__bindMap = {};
    }
    bind(name, call, context) {
        const events = this.__getEvents(name);
        events.push({
            call,
            context
        });

        const guid = uuid();
        this.__bindMap[guid] = {
            name,
            call,
            context
        };
        return guid;
    }
    unbind(name, call) {
        if (this.__bindMap[name]) {
            const bindTag = this.__bindMap[name]
            delete this.__bindMap[name];
            name = bindTag.name;
            call = bindTag.call;
        }
        const events = this.__getEvents(name);
        if (call) {
            for (let i = events.length - 1; i >= 0; i--) {
                if (call === events[i].call) {
                    events.splice(i, 1);
                }
            }
        } else {
            throw new Error("must offer a call to unbind!");
        }
    }
    trigger(name) {
        const events = this.__getEvents(name);
        const args = [...arguments];
        args.shift();
        for (let i = 0, n = events.length; i < n; i++) {
            const event = events[i];
            event.call.apply(event.context || this, args);
        }
    }
    __getEvents(name) {
        let events = this.__eventStore[name];
        if (!events) {
            events = this.__eventStore[name] = [];
        }
        return events;
    }
}