/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_MembersInputs */

const zh_team_members = /** @type {(inputs: Team_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队成员`)
};

const en_team_members = /** @type {(inputs: Team_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team Members`)
};

/**
* | output |
* | --- |
* | "Team Members" |
*
* @param {Team_MembersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_members = /** @type {((inputs?: Team_MembersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_MembersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_members(inputs)
	return en_team_members(inputs)
});