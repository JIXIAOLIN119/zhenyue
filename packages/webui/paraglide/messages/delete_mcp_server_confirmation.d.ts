/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the MCP server \"{name}\"." |
*
* @param {Delete_Mcp_Server_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_mcp_server_confirmation: ((inputs: Delete_Mcp_Server_ConfirmationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Mcp_Server_ConfirmationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Mcp_Server_ConfirmationInputs = {
    name: NonNullable<unknown>;
};
