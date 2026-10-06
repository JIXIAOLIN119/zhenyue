/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_UpdatedInputs */

const zh_profile_updated = /** @type {(inputs: Profile_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料更新成功`)
};

const en_profile_updated = /** @type {(inputs: Profile_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile updated successfully`)
};

/**
* | output |
* | --- |
* | "Profile updated successfully" |
*
* @param {Profile_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_updated = /** @type {((inputs?: Profile_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_profile_updated(inputs)
	return en_profile_updated(inputs)
});