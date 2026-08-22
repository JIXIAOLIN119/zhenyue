/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OwnerInputs */

const zh_owner = /** @type {(inputs: OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员`)
};

const en_owner = /** @type {(inputs: OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner`)
};

/**
* | output |
* | --- |
* | "Owner" |
*
* @param {OwnerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const owner = /** @type {((inputs?: OwnerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OwnerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_owner(inputs)
	return en_owner(inputs)
});