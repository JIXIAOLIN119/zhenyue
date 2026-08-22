/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_To_ProjectInputs */

const zh_add_to_project = /** @type {(inputs: Add_To_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加到项目`)
};

const en_add_to_project = /** @type {(inputs: Add_To_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to Project`)
};

/**
* | output |
* | --- |
* | "Add to Project" |
*
* @param {Add_To_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_to_project = /** @type {((inputs?: Add_To_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_To_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_to_project(inputs)
	return en_add_to_project(inputs)
});