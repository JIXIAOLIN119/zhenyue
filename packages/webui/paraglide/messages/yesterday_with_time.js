/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Yesterday_With_TimeInputs */

const zh_yesterday_with_time = /** @type {(inputs: Yesterday_With_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`昨天 ${i?.time}`)
};

const en_yesterday_with_time = /** @type {(inputs: Yesterday_With_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yesterday ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Yesterday {time}" |
*
* @param {Yesterday_With_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const yesterday_with_time = /** @type {((inputs: Yesterday_With_TimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Yesterday_With_TimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_yesterday_with_time(inputs)
	return en_yesterday_with_time(inputs)
});