/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Pending_Domains_DescriptionInputs */

const zh_pending_domains_description = /** @type {(inputs: Pending_Domains_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这些域名在智能体执行期间被阻止。您可以批准它们以允许将来的网络请求，或从此列表中删除它们。`)
};

const en_pending_domains_description = /** @type {(inputs: Pending_Domains_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`These domains were blocked during agent execution. You can approve them to allow future network requests, or delete them from this list.`)
};

/**
* | output |
* | --- |
* | "These domains were blocked during agent execution. You can approve them to allow future network requests, or delete them from this list." |
*
* @param {Pending_Domains_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const pending_domains_description = /** @type {((inputs?: Pending_Domains_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Pending_Domains_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_pending_domains_description(inputs)
	return en_pending_domains_description(inputs)
});