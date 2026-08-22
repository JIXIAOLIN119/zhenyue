/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Custom_IdInputs */

const zh_custom_id = /** @type {(inputs: Custom_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义 ID`)
};

const en_custom_id = /** @type {(inputs: Custom_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom ID`)
};

/**
* | output |
* | --- |
* | "Custom ID" |
*
* @param {Custom_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const custom_id = /** @type {((inputs?: Custom_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Custom_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_custom_id(inputs)
	return en_custom_id(inputs)
});