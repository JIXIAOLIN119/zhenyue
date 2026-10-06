/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} NameInputs */

const zh_name = /** @type {(inputs: NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const en_name = /** @type {(inputs: NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name = /** @type {((inputs?: NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_name(inputs)
	return en_name(inputs)
});