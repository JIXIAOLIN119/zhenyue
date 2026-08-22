/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_TeamInputs */

const zh_create_team = /** @type {(inputs: Create_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建团队`)
};

const en_create_team = /** @type {(inputs: Create_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Team`)
};

/**
* | output |
* | --- |
* | "Create Team" |
*
* @param {Create_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_team = /** @type {((inputs?: Create_TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_team(inputs)
	return en_create_team(inputs)
});