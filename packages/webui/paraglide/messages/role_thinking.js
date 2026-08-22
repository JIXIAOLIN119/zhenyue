/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_ThinkingInputs */

const zh_role_thinking = /** @type {(inputs: Role_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`思考中`)
};

const en_role_thinking = /** @type {(inputs: Role_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking`)
};

/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Role_ThinkingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const role_thinking = /** @type {((inputs?: Role_ThinkingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_ThinkingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_role_thinking(inputs)
	return en_role_thinking(inputs)
});