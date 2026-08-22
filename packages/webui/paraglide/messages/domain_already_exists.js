/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Domain_Already_ExistsInputs */

const zh_domain_already_exists = /** @type {(inputs: Domain_Already_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`域名已存在`)
};

const en_domain_already_exists = /** @type {(inputs: Domain_Already_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domain already exists`)
};

/**
* | output |
* | --- |
* | "Domain already exists" |
*
* @param {Domain_Already_ExistsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const domain_already_exists = /** @type {((inputs?: Domain_Already_ExistsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Domain_Already_ExistsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_domain_already_exists(inputs)
	return en_domain_already_exists(inputs)
});