/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Feature_TeamsInputs */

const zh_auth_feature_teams = /** @type {(inputs: Auth_Feature_TeamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无缝团队工作区 & 安全分享`)
};

const en_auth_feature_teams = /** @type {(inputs: Auth_Feature_TeamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frictionless team workspaces & secure sharing`)
};

/**
* | output |
* | --- |
* | "Frictionless team workspaces & secure sharing" |
*
* @param {Auth_Feature_TeamsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_feature_teams = /** @type {((inputs?: Auth_Feature_TeamsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Feature_TeamsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_auth_feature_teams(inputs)
	return en_auth_feature_teams(inputs)
});