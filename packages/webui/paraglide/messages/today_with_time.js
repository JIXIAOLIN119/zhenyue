/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Today_With_TimeInputs */

const zh_today_with_time = /** @type {(inputs: Today_With_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今天 ${i?.time}`)
};

const en_today_with_time = /** @type {(inputs: Today_With_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Today ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Today {time}" |
*
* @param {Today_With_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const today_with_time = /** @type {((inputs: Today_With_TimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Today_With_TimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_today_with_time(inputs)
	return en_today_with_time(inputs)
});