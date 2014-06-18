Alloy.Collections.feed.fetch();

$.index.open();

function openDetail(e) {

  console.debug(e);

  var controller = Alloy.createController('detail');
  var view = controller.getView();

  $.index.openWindow(view);

}