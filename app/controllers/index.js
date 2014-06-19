$.index.open();

var collection = Alloy.Collections.feed;
collection.fetch();

function openDetail(e) {

  var controller = Alloy.createController('detail', {

    model: collection.get(e.itemId)

  });

  var view = controller.getView();

  $.index.openWindow(view);

}