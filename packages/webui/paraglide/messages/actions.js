/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ActionsInputs */

const zh_actions = /** @type {(inputs: ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const en_actions = /** @type {(inputs: ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const actions = /** @type {((inputs?: ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_actions(inputs)
	return en_actions(inputs)
});