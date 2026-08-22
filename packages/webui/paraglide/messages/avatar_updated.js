/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Avatar_UpdatedInputs */

const zh_avatar_updated = /** @type {(inputs: Avatar_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像更新成功`)
};

const en_avatar_updated = /** @type {(inputs: Avatar_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar updated successfully`)
};

/**
* | output |
* | --- |
* | "Avatar updated successfully" |
*
* @param {Avatar_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_updated = /** @type {((inputs?: Avatar_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Avatar_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_avatar_updated(inputs)
	return en_avatar_updated(inputs)
});