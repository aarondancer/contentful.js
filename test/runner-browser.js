// This file is required due to an issue with karma-tap
// https://github.com/tmcw-up-for-adoption/karma-tap/issues/10
require('./unit/contentful-test.js')
require('./unit/create-contentful-api-test.js')
require('./unit/paged-sync-test.js')
require('./unit/entities/asset-test.js')
require('./unit/entities/content-type-test.js')
require('./unit/entities/entry-test.js')
require('./unit/mixins/link-getters-test.js')
require('./unit/mocks.js')
require('./integration/tests.js')
