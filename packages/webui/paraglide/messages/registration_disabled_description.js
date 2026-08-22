/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Registration_Disabled_DescriptionInputs */

const zh_registration_disabled_description = /** @type {(inputs: Registration_Disabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开注册目前已关闭。您需要邀请码才能加入此团队。`)
};

const en_registration_disabled_description = /** @type {(inputs: Registration_Disabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public registration is currently disabled. You will need an invite code to join this team.`)
};

/**
* | output |
* | --- |
* | "Public registration is currently disabled. You will need an invite code to join this team." |
*
* @param {Registration_Disabled_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const registration_disabled_description = /** @type {((inputs?: Registration_Disabled_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Registration_Disabled_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_registration_disabled_description(inputs)
	return en_registration_disabled_description(inputs)
});