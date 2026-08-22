/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Type_NamingInputs */

const zh_session_type_naming = /** @type {(inputs: Session_Type_NamingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`命名`)
};

const en_session_type_naming = /** @type {(inputs: Session_Type_NamingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naming`)
};

/**
* | output |
* | --- |
* | "Naming" |
*
* @param {Session_Type_NamingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_naming = /** @type {((inputs?: Session_Type_NamingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Type_NamingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_session_type_naming(inputs)
	return en_session_type_naming(inputs)
});