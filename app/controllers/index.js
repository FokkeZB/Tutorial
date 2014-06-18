$.index.open();

function openDetail(e) {

  var controller = Alloy.createController('detail');
  var view = controller.getView();

  $.index.openWindow(view);

}