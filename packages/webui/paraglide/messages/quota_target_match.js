/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Quota_Target_MatchInputs */

const zh_quota_target_match = /** @type {(inputs: Quota_Target_MatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`匹配：${i?.value}`)
};

const en_quota_target_match = /** @type {(inputs: Quota_Target_MatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Match: ${i?.value}`)
};

/**
* | output |
* | --- |
* | "Match: {value}" |
*
* @param {Quota_Target_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_match = /** @type {((inputs: Quota_Target_MatchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Target_MatchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_target_match(inputs)
	return en_quota_target_match(inputs)
});