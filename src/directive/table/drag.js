export default {
    name:'drag',
    // el直接是绑定的dom, binding,一个绑定对象。
    bind(el, bind, vnode) {
        // 给绑定拖动事件。el就是当前这个tr元素。
        // console.log(bind.value);
        // console.log(el);
        el.setAttribute('draggable', true);  // 给每一个tr行都绑定可拖动的情况。
        // 接着绑定
        el.addEventListener('dragstart', (event) => {
            // 保存被拖动元素的引用。
            bind.def.start = event.target;
            // console.log(`bind----------`,bind);
        }, false);
        el.addEventListener('dragover', (event) => {
            // 阻止默认动作以启用drop
            event.preventDefault();  // 默认是不允许被放置的。
        });
        // 放置是目档元素。
        el.addEventListener('drop', (event) => {
            //  console.log(event.target);
            let start = bind.def.start.getAttribute('data-set');
            let end = event.target.parentNode.getAttribute("data-set");
            // console.log(start, end);
            bind.value.call(null, (start -0), (end-0));
        });
    },
    inserted() {

    },
    update() {

    },
    unbind() {

    }
}