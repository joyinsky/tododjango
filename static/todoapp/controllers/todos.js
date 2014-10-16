Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            var title = this.get('newTitle');
            if (!title) {
                return false;
            }
            if (!title.trim()) {
                return undefined;
            }

            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle',  '');
            todo.save()
        }
    }
});