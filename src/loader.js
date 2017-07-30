'use strict';

import * as pillow from 'pillowjs';

const {
  SourceLoader
} = pillow;

const loader = new SourceLoader();

exports.ready = handle => {
  var list = [{
    id: 'logo',
    src: 'https://avatars2.githubusercontent.com/u/9263023?v=4&s=200'
  }];

  loader.on('loaded', function(e) {
    var process = e.number / list.length;
    console.log(`${parseInt(process * 100, 10)}%`);
  });

  loader.on('success', function(resource) {
    handle(resource);
  });

  loader.load(list);
};
