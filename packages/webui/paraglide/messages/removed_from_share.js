/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Removed_From_ShareInputs */

const zh_removed_from_share = /** @type {(inputs: Removed_From_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已从分享中移除`)
};

const en_removed_from_share = /** @type {(inputs: Removed_From_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed from share`)
};

/**
* | output |
* | --- |
* | "Removed from share" |
*
* @param {Removed_From_ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const removed_from_share = /** @type {((inputs?: Removed_From_ShareInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Removed_From_ShareInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_removed_from_share(inputs)
	return en_removed_from_share(inputs)
});