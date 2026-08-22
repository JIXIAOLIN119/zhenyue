/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Developer_DescriptionInputs */

const zh_developer_description = /** @type {(inputs: Developer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为开发者和自动化工作流生成和管理 API 密钥。`)
};

const en_developer_description = /** @type {(inputs: Developer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate and manage API keys for developers and automated workflows.`)
};

/**
* | output |
* | --- |
* | "Generate and manage API keys for developers and automated workflows." |
*
* @param {Developer_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const developer_description = /** @type {((inputs?: Developer_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Developer_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_developer_description(inputs)
	return en_developer_description(inputs)
});