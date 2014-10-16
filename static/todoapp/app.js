(function(window) {
window.Todos = Ember.Application.create({});

// Adapters are responsible for communicating with a source of data for your application.
// Typically this will be a web service API, but in this case we are using an adapter designed to load fixture data

    // Fixture Adapter
   // Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

    // Local Storage Adapter
//Todos.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'todos-emberjs'
//});

Todos.ApplicationAdapter = DS.DjangoRESTAdapter.extend({
  host: 'http://localhost:8000/api'
});
Todos.ApplicationSerializer = DS.DjangoRESTSerializer.extend({
});
}(window));