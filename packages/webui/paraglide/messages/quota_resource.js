/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_ResourceInputs */

const zh_quota_resource = /** @type {(inputs: Quota_ResourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源类型`)
};

const en_quota_resource = /** @type {(inputs: Quota_ResourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resource`)
};

/**
* | output |
* | --- |
* | "Resource" |
*
* @param {Quota_ResourceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_resource = /** @type {((inputs?: Quota_ResourceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_ResourceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_resource(inputs)
	return en_quota_resource(inputs)
});