Rx.Observable.fromEvent(document.getElementById('search-box'), 'keyup')
  .debounce(200)
  .flatMapLatest(event => $.ajax('http://suggest1.spanishdict.com/dictionary/translate_es_suggest', {
    data: {
      v: 0,
      q: event.target.value
    },
    dataType: 'jsonp'
  }))
  .subscribeOnNext(({results}) => {
    $('#autosuggest').empty();
    if (results) {
      let children = results.map(r => $('<li>').text(r));
      $('#autosuggest').append(children);
    }
  });
