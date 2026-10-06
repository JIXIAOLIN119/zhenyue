/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Github_Repository_UrlInputs */

const zh_github_repository_url = /** @type {(inputs: Github_Repository_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub 仓库 URL`)
};

const en_github_repository_url = /** @type {(inputs: Github_Repository_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Repository URL`)
};

/**
* | output |
* | --- |
* | "GitHub Repository URL" |
*
* @param {Github_Repository_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const github_repository_url = /** @type {((inputs?: Github_Repository_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Github_Repository_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_github_repository_url(inputs)
	return en_github_repository_url(inputs)
});