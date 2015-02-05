/* jshint ignore:start */
/* @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Mozilla Public License v. 2.0 for more details.

 * You should have received a copy of the Mozilla Public License v. 2.0
 * along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
 */
 /* jshint ignore:end */

global.assert = require('assert');

global.CONFIG = {
	shortName: 'tests'
};

global.GC = {};
process.env.NODE_ENV = 'test';

process.env.NODE_ENV = 'test';

require('./mock/mockDevice').setup();
require('./mock/mockDOM').setup();
require('./mock/mockJSIO').setup();
require('./mock/mockEngine').setup();
require('./mock/mockDevice').setup();
