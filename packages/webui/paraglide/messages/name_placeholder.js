/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Name_PlaceholderInputs */

const zh_name_placeholder = /** @type {(inputs: Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`张三`)
};

const en_name_placeholder = /** @type {(inputs: Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`John Doe`)
};

/**
* | output |
* | --- |
* | "John Doe" |
*
* @param {Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_placeholder = /** @type {((inputs?: Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_name_placeholder(inputs)
	return en_name_placeholder(inputs)
});