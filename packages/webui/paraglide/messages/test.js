/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TestInputs */

const zh_test = /** @type {(inputs: TestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试`)
};

const en_test = /** @type {(inputs: TestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test`)
};

/**
* | output |
* | --- |
* | "Test" |
*
* @param {TestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const test = /** @type {((inputs?: TestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_test(inputs)
	return en_test(inputs)
});