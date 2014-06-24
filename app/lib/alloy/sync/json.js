function Sync(method, model, opts) {

  if (method !== 'read') {
    throw 'This sync adapter only reads.';

  } else {

    if (!Ti.Network.online) {
      opts.success(require('feed').data);
      return;
    }

    var xhr = Ti.Network.createHTTPClient({

      onload: function() {

        try {
          var values = JSON.parse(this.responseText);

          model.length = values.length;

          opts.success((model.length === 1) ? values[0] : values, this.responseText);

        } catch (e) {
          opts.error(model, this.responseText);
        }

      },

      onerror: function(e) {
        opts.error(model, this.responseText);
      }

    });

    xhr.open('GET', model.config.adapter.url);
    xhr.send();
  }
}

exports.sync = Sync;