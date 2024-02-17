import {init, h} from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';

const patch = init([classModule, eventlistenersModule]);

let vnode = document.getElementById('app');

const updateState = (newCount) => {
  state.count = newCount;
  render();
};

const view = () => h('div', [
  h('h1', state.count.toString()),
  h('button', {on: {click: [updateState, state.count + 1]}}, 'Increment')
]);

let state = { count: 0 };

function render() {
  vnode = patch(vnode, view());
}

document.addEventListener('DOMContentLoaded', () => render());
