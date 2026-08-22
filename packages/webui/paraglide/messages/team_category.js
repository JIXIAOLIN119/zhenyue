/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_CategoryInputs */

const zh_team_category = /** @type {(inputs: Team_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队`)
};

const en_team_category = /** @type {(inputs: Team_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

/**
* | output |
* | --- |
* | "Team" |
*
* @param {Team_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_category = /** @type {((inputs?: Team_CategoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_CategoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_category(inputs)
	return en_team_category(inputs)
});