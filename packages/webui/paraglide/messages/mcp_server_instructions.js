/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_InstructionsInputs */

const zh_mcp_server_instructions = /** @type {(inputs: Mcp_Server_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器说明`)
};

const en_mcp_server_instructions = /** @type {(inputs: Mcp_Server_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server Instructions`)
};

/**
* | output |
* | --- |
* | "Server Instructions" |
*
* @param {Mcp_Server_InstructionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_server_instructions = /** @type {((inputs?: Mcp_Server_InstructionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_InstructionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_server_instructions(inputs)
	return en_mcp_server_instructions(inputs)
});