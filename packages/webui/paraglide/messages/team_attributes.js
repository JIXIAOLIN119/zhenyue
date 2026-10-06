/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_AttributesInputs */

const zh_team_attributes = /** @type {(inputs: Team_AttributesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队属性`)
};

const en_team_attributes = /** @type {(inputs: Team_AttributesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team Attributes`)
};

/**
* | output |
* | --- |
* | "Team Attributes" |
*
* @param {Team_AttributesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_attributes = /** @type {((inputs?: Team_AttributesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_AttributesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_attributes(inputs)
	return en_team_attributes(inputs)
});