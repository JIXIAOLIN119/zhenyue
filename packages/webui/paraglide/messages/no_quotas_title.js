/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Quotas_TitleInputs */

const zh_no_quotas_title = /** @type {(inputs: No_Quotas_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂未配置资源配额`)
};

const en_no_quotas_title = /** @type {(inputs: No_Quotas_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No resource quotas configured`)
};

/**
* | output |
* | --- |
* | "No resource quotas configured" |
*
* @param {No_Quotas_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_quotas_title = /** @type {((inputs?: No_Quotas_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Quotas_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_quotas_title(inputs)
	return en_no_quotas_title(inputs)
});