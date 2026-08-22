/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AvatarInputs */

const zh_avatar = /** @type {(inputs: AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像`)
};

const en_avatar = /** @type {(inputs: AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

/**
* | output |
* | --- |
* | "Avatar" |
*
* @param {AvatarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar = /** @type {((inputs?: AvatarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AvatarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_avatar(inputs)
	return en_avatar(inputs)
});