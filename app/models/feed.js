exports.definition = {
  config: {
    columns: {
      id: 'INTEGER PRIMARY KEY',
      content: 'TEXT',
      excerpt: 'TEXT',
      permalink: 'TEXT',
      title: 'TEXT'
    },
    adapter: {
      type: 'json',
      url: 'http://www.tidev.io/?feed=json'
    }
  }
};