/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Avatar_SourceInputs */

const zh_avatar_source = /** @type {(inputs: Avatar_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像来源`)
};

const en_avatar_source = /** @type {(inputs: Avatar_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar Source`)
};

/**
* | output |
* | --- |
* | "Avatar Source" |
*
* @param {Avatar_SourceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_source = /** @type {((inputs?: Avatar_SourceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Avatar_SourceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_avatar_source(inputs)
	return en_avatar_source(inputs)
});