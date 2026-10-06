/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_TimeInputs */

const zh_create_time = /** @type {(inputs: Create_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建时间`)
};

const en_create_time = /** @type {(inputs: Create_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Time`)
};

/**
* | output |
* | --- |
* | "Create Time" |
*
* @param {Create_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_time = /** @type {((inputs?: Create_TimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_TimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_time(inputs)
	return en_create_time(inputs)
});