$(document).ready(function() {

//API call + toLowerCase function
var pokeApp = new Vue({
  el: '#pokeApp',
  data: {
    message: 'Gotta catch who?',
    query: '',
    errorMessage: "Oops! A wild Pokemon didn't appear."
  },
  methods: {
    getPokemon: function(query){
      var pokeQuery = query.toLowerCase();
      $(".loadingIcon").show();
      $.ajax({
        dataType: 'json',
        url: 'http://pokeapi.co/api/v2/pokemon/' + pokeQuery,
        method: 'GET',
        success: function(data, textStatus ){
          pokeApp.$set("name", data.name);
          pokeApp.$set("sprite", data.sprites.front_default);
        },
        error: function(data, textStatus){
          $(".errorMessage").show();
          $(".loadingIcon").hide();
        }
      }).done(function(data) {
        $(".loadingIcon").hide();
      })
    },
    clearQuery: function(){
      pokeApp.$set("name", "");
      pokeApp.$set("sprite", "");
      pokeApp.$set("query", "");
      $('.poke-choice').hide();
      $('.poke-search').show();
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
