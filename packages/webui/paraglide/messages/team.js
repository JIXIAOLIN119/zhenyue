/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TeamInputs */

const zh_team = /** @type {(inputs: TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队`)
};

const en_team = /** @type {(inputs: TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`team`)
};

/**
* | output |
* | --- |
* | "team" |
*
* @param {TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team = /** @type {((inputs?: TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team(inputs)
	return en_team(inputs)
});