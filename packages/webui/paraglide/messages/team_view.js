/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_ViewInputs */

const zh_team_view = /** @type {(inputs: Team_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队`)
};

const en_team_view = /** @type {(inputs: Team_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

/**
* | output |
* | --- |
* | "Team" |
*
* @param {Team_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_view = /** @type {((inputs?: Team_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_view(inputs)
	return en_team_view(inputs)
});