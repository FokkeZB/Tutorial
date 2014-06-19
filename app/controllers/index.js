$.index.open();

var collection = Alloy.Collections.feed;
collection.fetch();

function openDetail(e) {

  var controller = Alloy.createController('detail', {


  });

  var view = controller.getView();

  $.index.openWindow(view);

}