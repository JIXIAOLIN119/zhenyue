/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ target: NonNullable<unknown> }} Quota_Reset_Usage_ConfirmInputs */

const zh_quota_reset_usage_confirm = /** @type {(inputs: Quota_Reset_Usage_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定要重置 ${i?.target} 的使用量吗？当前消耗将被清零，并立即开始新的配额周期。`)
};

const en_quota_reset_usage_confirm = /** @type {(inputs: Quota_Reset_Usage_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reset usage for ${i?.target}? Consumption will be cleared and a new quota window will start now.`)
};

/**
* | output |
* | --- |
* | "Reset usage for {target}? Consumption will be cleared and a new quota window will start now." |
*
* @param {Quota_Reset_Usage_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_usage_confirm = /** @type {((inputs: Quota_Reset_Usage_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Reset_Usage_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_reset_usage_confirm(inputs)
	return en_quota_reset_usage_confirm(inputs)
});