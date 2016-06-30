$(document).ready(function() {

//API call + toLowerCase function
var pokeApp = new Vue({
  el: '#pokeApp',
  data: {
    message: 'Gotta catch who?',
    query: '',
  },
  methods: {
    getPokemon: function(query){
      var pokeQuery = query.toLowerCase();
      $.ajax({
        dataType: 'json',
        url: 'http://pokeapi.co/api/v2/pokemon/' + pokeQuery,
        method: 'GET',
      }).done(function(data) {
        pokeApp.$set("name", data.name);
        pokeApp.$set("location", data.location_area);
      })
    }
  }
});









}); //end
