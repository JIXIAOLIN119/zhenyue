/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OptionsInputs */

const zh_options = /** @type {(inputs: OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选项`)
};

const en_options = /** @type {(inputs: OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Options`)
};

/**
* | output |
* | --- |
* | "Options" |
*
* @param {OptionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const options = /** @type {((inputs?: OptionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OptionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_options(inputs)
	return en_options(inputs)
});