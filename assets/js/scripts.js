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
        pokeApp.$set("sprite", data.sprites)
      })
    }
  }
});

$('.poke-button').on('click', function() {
  $('.poke-choice').removeClass("hide").addClass("show");

});

$('.poke-button').on('click', function () {
  $('.poke-search').fadeOut('slow');
});



}); //end
