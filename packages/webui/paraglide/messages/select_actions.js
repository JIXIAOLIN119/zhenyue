/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_ActionsInputs */

const zh_select_actions = /** @type {(inputs: Select_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择操作`)
};

const en_select_actions = /** @type {(inputs: Select_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Actions`)
};

/**
* | output |
* | --- |
* | "Select Actions" |
*
* @param {Select_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_actions = /** @type {((inputs?: Select_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_actions(inputs)
	return en_select_actions(inputs)
});