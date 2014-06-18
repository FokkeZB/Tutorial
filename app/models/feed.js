exports.definition = {
  config: {
    columns: {
      "id": "INTEGER PRIMARY KEY",
      "content": "TEXT",
      "excerpt": "TEXT",
      "permalink": "TEXT",
      "title": "TEXT"
    },
    adapter: {
      type: "restapi",
    },
    URL: 'http://www.tidev.io/feed/json'
  }
};