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
    },
    remaining: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),
    inflection: function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item': 'items';
    }.property('remaining')
});

Todos.TodoController = Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return model.get('isCompleted');
        } else {
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
});