/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Team_MemberInputs */

const zh_team_member = /** @type {(inputs: Team_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队成员`)
};

const en_team_member = /** @type {(inputs: Team_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team Member`)
};

/**
* | output |
* | --- |
* | "Team Member" |
*
* @param {Team_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_member = /** @type {((inputs?: Team_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_team_member(inputs)
	return en_team_member(inputs)
});