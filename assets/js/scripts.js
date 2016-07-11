$(document).ready(function() {

//API call + toLowerCase function
var pokeApp = new Vue({
  el: '#pokeApp',
  data: {
    message: 'Gotta catch who?',
    query: ''
  },
  methods: {
    getPokemon: function(query){
      var pokeQuery = query.toLowerCase();
      $.ajax({
        dataType: 'json',
        url: 'http://pokeapi.co/api/v2/pokemon/' + pokeQuery,
        method: 'GET',
      }).done(function(data) {
        console.log(data.weight);
        pokeApp.$set("name", data.name);
        pokeApp.$set("sprite", data.sprites.front_default);
        pokeApp.$set("weight", data.weight);
        $(".loadingIcon").toggle();
      })
    }
  }
});

$('.poke-button').on('click', function() {
  $('.poke-choice').removeClass("hide").addClass("show").fadeIn('fast');

});

$('.poke-button').on('click', function () {
  $('.poke-search').fadeOut('fast');
});



}); //end
