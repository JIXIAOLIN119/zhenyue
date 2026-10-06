/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sessions_DescriptionInputs */

const zh_sessions_description = /** @type {(inputs: Sessions_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看并检查团队内创建的所有 Agent 会话。`)
};

const en_sessions_description = /** @type {(inputs: Sessions_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View and inspect all agent sessions created within the team.`)
};

/**
* | output |
* | --- |
* | "View and inspect all agent sessions created within the team." |
*
* @param {Sessions_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sessions_description = /** @type {((inputs?: Sessions_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sessions_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sessions_description(inputs)
	return en_sessions_description(inputs)
});