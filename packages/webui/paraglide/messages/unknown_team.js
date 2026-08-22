/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unknown_TeamInputs */

const zh_unknown_team = /** @type {(inputs: Unknown_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知团队`)
};

const en_unknown_team = /** @type {(inputs: Unknown_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`unknown team`)
};

/**
* | output |
* | --- |
* | "unknown team" |
*
* @param {Unknown_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_team = /** @type {((inputs?: Unknown_TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unknown_TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unknown_team(inputs)
	return en_unknown_team(inputs)
});