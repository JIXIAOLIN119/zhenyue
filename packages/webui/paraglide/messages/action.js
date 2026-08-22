/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ActionInputs */

const zh_action = /** @type {(inputs: ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const en_action = /** @type {(inputs: ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

/**
* | output |
* | --- |
* | "Action" |
*
* @param {ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const action = /** @type {((inputs?: ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_action(inputs)
	return en_action(inputs)
});