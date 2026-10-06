/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Delete_Mcp_Server_ConfirmationInputs */

const zh_delete_mcp_server_confirmation = /** @type {(inputs: Delete_Mcp_Server_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`此操作无法撤销。这将永久删除 MCP 服务 "${i?.name}"。`)
};

const en_delete_mcp_server_confirmation = /** @type {(inputs: Delete_Mcp_Server_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This action cannot be undone. This will permanently delete the MCP server "${i?.name}".`)
};

/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the MCP server \"{name}\"." |
*
* @param {Delete_Mcp_Server_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_mcp_server_confirmation = /** @type {((inputs: Delete_Mcp_Server_ConfirmationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Mcp_Server_ConfirmationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_mcp_server_confirmation(inputs)
	return en_delete_mcp_server_confirmation(inputs)
});