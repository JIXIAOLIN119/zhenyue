/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_DomainInputs */

const zh_add_domain = /** @type {(inputs: Add_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加域名`)
};

const en_add_domain = /** @type {(inputs: Add_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Domain`)
};

/**
* | output |
* | --- |
* | "Add Domain" |
*
* @param {Add_DomainInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_domain = /** @type {((inputs?: Add_DomainInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_DomainInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_domain(inputs)
	return en_add_domain(inputs)
});