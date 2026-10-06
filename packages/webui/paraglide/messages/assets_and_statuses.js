/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Assets_And_StatusesInputs */

const zh_assets_and_statuses = /** @type {(inputs: Assets_And_StatusesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`素材与状态`)
};

const en_assets_and_statuses = /** @type {(inputs: Assets_And_StatusesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assets & Statuses`)
};

/**
* | output |
* | --- |
* | "Assets & Statuses" |
*
* @param {Assets_And_StatusesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets_and_statuses = /** @type {((inputs?: Assets_And_StatusesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Assets_And_StatusesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_assets_and_statuses(inputs)
	return en_assets_and_statuses(inputs)
});