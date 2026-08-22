/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Two_WeeksInputs */

const zh_two_weeks = /** @type {(inputs: Two_WeeksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 周`)
};

const en_two_weeks = /** @type {(inputs: Two_WeeksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 Weeks`)
};

/**
* | output |
* | --- |
* | "2 Weeks" |
*
* @param {Two_WeeksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const two_weeks = /** @type {((inputs?: Two_WeeksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Two_WeeksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_two_weeks(inputs)
	return en_two_weeks(inputs)
});