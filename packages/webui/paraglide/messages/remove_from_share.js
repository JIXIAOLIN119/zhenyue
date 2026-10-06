/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Remove_From_ShareInputs */

const zh_remove_from_share = /** @type {(inputs: Remove_From_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从分享中移除`)
};

const en_remove_from_share = /** @type {(inputs: Remove_From_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove from Share`)
};

/**
* | output |
* | --- |
* | "Remove from Share" |
*
* @param {Remove_From_ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_from_share = /** @type {((inputs?: Remove_From_ShareInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_From_ShareInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_from_share(inputs)
	return en_remove_from_share(inputs)
});