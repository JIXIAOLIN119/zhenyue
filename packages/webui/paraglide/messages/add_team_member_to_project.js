/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_Team_Member_To_ProjectInputs */

const zh_add_team_member_to_project = /** @type {(inputs: Add_Team_Member_To_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义团队成员在项目的角色`)
};

const en_add_team_member_to_project = /** @type {(inputs: Add_Team_Member_To_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customize Team Member Role`)
};

/**
* | output |
* | --- |
* | "Customize Team Member Role" |
*
* @param {Add_Team_Member_To_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_team_member_to_project = /** @type {((inputs?: Add_Team_Member_To_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_Team_Member_To_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_team_member_to_project(inputs)
	return en_add_team_member_to_project(inputs)
});