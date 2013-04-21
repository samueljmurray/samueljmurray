window.utils= {

  //Async. loads templates located in separate HTML files
  loadTemplate: function(views, callback) {

    var deferreds = []; // Declares the array that will hold each $.get request

    $.each(views, function(index, view) {
      if (window[view]) { // If the view exists / ?
        deferreds.push($.get('view_pages/' + view + '.html', function(data) { //Pushes the $.get request into the deferreds array
          window[view].prototype.template = _.template(data); // ?
        }));
      } else {
        console.log(view + " not found"); // Alert if view doesn't exist
      }
    });

    $.when.apply(null, deferreds).done(callback); // Perform all of the $.get requests and then call the callback that has been passed into the function

  }

}