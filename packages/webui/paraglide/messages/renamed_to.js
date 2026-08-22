/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Renamed_ToInputs */

const zh_renamed_to = /** @type {(inputs: Renamed_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已重命名为`)
};

const en_renamed_to = /** @type {(inputs: Renamed_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renamed to`)
};

/**
* | output |
* | --- |
* | "Renamed to" |
*
* @param {Renamed_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const renamed_to = /** @type {((inputs?: Renamed_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Renamed_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_renamed_to(inputs)
	return en_renamed_to(inputs)
});