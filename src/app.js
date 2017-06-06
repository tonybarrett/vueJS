
Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.description }}</task>
    </div>
  `,

  data() {
    return {
      tasks: [
        { description: 'Tidy flat', completed: true},
        { description: 'Sweep then mop hard floors', completed: false},
        { description: 'Hoover carpets', completed: false},
        { description: 'Clean fish tank', completed: false}
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});


new Vue({
  el: '#app',
})
