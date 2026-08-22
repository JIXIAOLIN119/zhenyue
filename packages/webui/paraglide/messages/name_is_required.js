/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Name_Is_RequiredInputs */

const zh_name_is_required = /** @type {(inputs: Name_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称为必填项`)
};

const en_name_is_required = /** @type {(inputs: Name_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name is required`)
};

/**
* | output |
* | --- |
* | "Name is required" |
*
* @param {Name_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_is_required = /** @type {((inputs?: Name_Is_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Name_Is_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_name_is_required(inputs)
	return en_name_is_required(inputs)
});