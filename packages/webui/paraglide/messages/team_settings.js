/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_SettingsInputs */

const zh_team_settings = /** @type {(inputs: Team_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队设置`)
};

const en_team_settings = /** @type {(inputs: Team_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team Settings`)
};

/**
* | output |
* | --- |
* | "Team Settings" |
*
* @param {Team_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_settings = /** @type {((inputs?: Team_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_settings(inputs)
	return en_team_settings(inputs)
});