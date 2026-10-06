/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Bearer_TokenInputs */

const zh_mcp_bearer_token = /** @type {(inputs: Mcp_Bearer_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 令牌`)
};

const en_mcp_bearer_token = /** @type {(inputs: Mcp_Bearer_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer Token`)
};

/**
* | output |
* | --- |
* | "Bearer Token" |
*
* @param {Mcp_Bearer_TokenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bearer_token = /** @type {((inputs?: Mcp_Bearer_TokenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Bearer_TokenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_bearer_token(inputs)
	return en_mcp_bearer_token(inputs)
});