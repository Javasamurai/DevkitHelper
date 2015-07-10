/* Internationalization module for Game Closure Devkit
 *
 * Authors: Jishnu Mohan <jishnu7@gmail.com>,
 *          Vinod CG <vnodecg@gmail.com>
 *
 * Copyright: 2014, Hashcube (http://hashcube.com)
 *
 */

/* global CACHE, GC */

exports = function (key, params, language) {
  'use strict';
  var path = 'resources/languages/',
    localize, pluralize, parser;

  language = language || GC.app.language || 'en';

  localize = function (key, params, language) {
    var store, string;

    params = params || [];

    // if language.json doesn't exists fallback to en_US
    try {
      store = JSON.parse(CACHE[path + language + '.json']);
    } catch (err) {
    }

    if (store) {
      string = store[key];
      if (string) {
        return parser(string, params);
      }
    } else if (language !== 'en_US') {
      return localize(key, params, 'en_US');
    }
    return key;
  };

  pluralize = function (message) {
    if (!message) {
      return;
    }

    return message.replace(/{{[^}}]*}}/g, function (match) {
      var matches = match.replace('{{', '').replace('}}', '').split('|'),
          val = parseInt(matches[0].trim(), 10),
          length = matches.length,
          result;

      if (length >= val + 1) {
        result = matches[val].trim();
      } else {
        result = matches[length - 1].trim();
      }

      return result;
    });
  };

  parser =  function (message, params) {
    return message.replace(/\$(\d+)/g, function (str, match) {
      var index = parseInt(match, 10) - 1;
      return params[index] !== undefined ? params[index] : '$' + match;
    });
  };

  return pluralize(localize(key, params, language));
};
