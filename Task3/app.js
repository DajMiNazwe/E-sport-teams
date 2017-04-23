var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map((x) => {
        return q.val();
    })
    .switchMap((x) => {
        return searchWikipedia(x)
    })
    .do((x) => {
        console.log(x);
    })
    .subscribe((x) => {
      $('li').remove();
      if (x[1]) {
        x[1].forEach((element) => {
          $('#results > ul').append('<li>'+ element +'</li>');
        });
      } else {
          $('#results').append('<h4>YOU NEED TO TYPE SOMETHING!</h4>');
      }
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}
