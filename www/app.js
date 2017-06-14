// var Vue = require('vue');

new Vue({
  // We want to target the div with an id of 'things'
  el: '#things',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    thing: { name: '', description: '', date: '' },
    things: []
  },


  // Anything within the ready function will run when the application loads
  ready: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchThings();
    console.log("ready");
  },

  // Methods we want to use in our application are registered here
  methods: {

    // We dedicate a method to retrieving and setting some data
    fetchThings: function() {
      var things = [
        {
          id: 1,
          name: 'Thing 1',
          description: 'Description 1.',
          date: '2011-11-11'
        },
        {
          id: 2,
          name: 'Thing 2',
          description: 'Description 2.',
          date: '2012-12-12'
        }
      ];
      console.log(things);
      // $set is a convenience method provided by Vue that is similar to pushing
      // data onto an array
      this.$set('things', things);
    },

    // Adds a thing to the existing things array
    addThing: function() {
      if(this.thing.name) {
        this.things.push(this.thing);
        this.thing = { name: '', description: '', date: '' };
      }
    },
    deleteThing: function(index) {
      if(confirm("Are you sure you want to delete this thing?")) {
        // $remove is a Vue convenience method similar to splice
        this.things.$remove(index);
      }
    }

  }
});
