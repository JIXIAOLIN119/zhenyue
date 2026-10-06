/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CreateInputs */

const zh_create = /** @type {(inputs: CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建`)
};

const en_create = /** @type {(inputs: CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create`)
};

/**
* | output |
* | --- |
* | "Create" |
*
* @param {CreateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create = /** @type {((inputs?: CreateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CreateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create(inputs)
	return en_create(inputs)
});