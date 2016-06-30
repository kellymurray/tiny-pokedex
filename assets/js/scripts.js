$(document).ready(function() {


// $('.input-query').keyup(function() {
//   $('input').val(function(i, val) {
//     return val.toLowerCase();
//     console.log(val);
//   });
// });

// $('.input-query').keyup(function(){
//   $(this).val($(this).val().toLowerCase());
//
// });

var app = new Vue({
  el: '#app',
  data: {
    message: 'Type in the name of a Pokemon',
    query: '',
  },
  methods: {
    getPokemon: function(query){
      console.log(this.message);
      $.ajax({
        dataType: 'json',
        url: 'http://pokeapi.co/api/v2/pokemon/' + query,
        method: 'GET',
      }).done(function(data) {
        console.log(data);
      })
    }
  }
});

});

// TESTING WITH AJAX BELOW
//
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://pokeapi.co/api/v2/pokedex/",
//   "method": "GET",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "cf30349e-20af-9239-3830-c910aee70506"
//   }
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
