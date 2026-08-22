/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} EssentialsInputs */

const zh_essentials = /** @type {(inputs: EssentialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基本信息`)
};

const en_essentials = /** @type {(inputs: EssentialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essentials`)
};

/**
* | output |
* | --- |
* | "Essentials" |
*
* @param {EssentialsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const essentials = /** @type {((inputs?: EssentialsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EssentialsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_essentials(inputs)
	return en_essentials(inputs)
});