/* global require */
/* @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License v. 2.0 as
 * published by Mozilla.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Mozilla Public License v. 2.0 for more details.

 * You should have received a copy of the Mozilla Public License v. 2.0
 * along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
 */

var mockContext = require('./mockContext');

exports.Canvas = function () {
  'use strict';

  this.getContext = function () {
    return new mockContext.Context(this);
  };

  this.save = function () {
    return {};
  };

  this.restore = function () {
    return {};
  };

  this.attachEvent = function () {};
  this.dispatchEvent = function () {};
  this.detachEvent = function () {};
  this.style = {};
  /*This is value for NODE_TYPE.DOCUMENT_TYPE_NODE for jsdom core.js:299*/
  this.nodeType = 10;
};
