/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Avatar_RemovedInputs */

const zh_avatar_removed = /** @type {(inputs: Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像已移除`)
};

const en_avatar_removed = /** @type {(inputs: Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar removed successfully`)
};

/**
* | output |
* | --- |
* | "Avatar removed successfully" |
*
* @param {Avatar_RemovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_removed = /** @type {((inputs?: Avatar_RemovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Avatar_RemovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_avatar_removed(inputs)
	return en_avatar_removed(inputs)
});