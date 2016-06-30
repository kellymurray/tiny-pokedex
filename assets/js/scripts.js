$(document).ready(function() {

var pokeApp = new Vue({
  el: '#pokeApp',
  data: {
    message: 'Who you gonna catch?',
    query: '',
  },
  methods: {
    getPokemon: function(query){
      var pokeQuery = query.toLowerCase();
      console.log(this.query);
      $.ajax({
        dataType: 'json',
        url: 'http://pokeapi.co/api/v2/pokemon/' + pokeQuery,
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
