/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_A_TeamInputs */

const zh_select_a_team = /** @type {(inputs: Select_A_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择团队`)
};

const en_select_a_team = /** @type {(inputs: Select_A_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a Team`)
};

/**
* | output |
* | --- |
* | "Select a Team" |
*
* @param {Select_A_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_a_team = /** @type {((inputs?: Select_A_TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_A_TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_a_team(inputs)
	return en_select_a_team(inputs)
});