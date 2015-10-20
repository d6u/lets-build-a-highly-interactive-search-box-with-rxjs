let lastAjax;

function keyupHandler(event) {
  if (lastAjax) {
    lastAjax.abort();
  }

  let lastAjax = $.ajax('http://suggest1.spanishdict.com/dictionary/translate_es_suggest', {
    data: {
      v: 0,
      q: event.target.value
    },
    dataType: 'jsonp'
  });

  lastAjax.then(({results}) => {
    $('#autosuggest').empty();
    if (results) {
      let children = results.map(r => $('<li>').text(r));
      $('#autosuggest').append(children);
    }
  });
}

$('#search-box').on('keyup', _.debounce(keyupHandler, 200));
