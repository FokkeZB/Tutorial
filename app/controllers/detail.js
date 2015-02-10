var args = arguments[0] || {};

var model = args.model;

$.detail.title = model.get('title');

var style = '<style>body { font-family: sans-serif; }</style>';

var body = model.get('content');

$.webView.html = style + body;