/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AscendingInputs */

const zh_ascending = /** @type {(inputs: AscendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`升序`)
};

const en_ascending = /** @type {(inputs: AscendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ascending`)
};

/**
* | output |
* | --- |
* | "Ascending" |
*
* @param {AscendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ascending = /** @type {((inputs?: AscendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AscendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ascending(inputs)
	return en_ascending(inputs)
});