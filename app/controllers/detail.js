var args = arguments[0] || {};
var model = args.model;

$.detail.title = model.get('title');

var style = '<style>body { font-family: sans-serif; }</style>';
var body = model.get('content');

var htmlTemplate = _.template('<!DOCTYPE HTML><html lang="en-US"><head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><meta charset="UTF-8"><title></title><%= style %></head><body><%= content %></body></html>');

$.webView.html = htmlTemplate({style:style, content:body});