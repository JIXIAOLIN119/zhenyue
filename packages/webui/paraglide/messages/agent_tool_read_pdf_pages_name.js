/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Read_Pdf_Pages_NameInputs */

const zh_agent_tool_read_pdf_pages_name = /** @type {(inputs: Agent_Tool_Read_Pdf_Pages_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取 PDF 页面`)
};

const en_agent_tool_read_pdf_pages_name = /** @type {(inputs: Agent_Tool_Read_Pdf_Pages_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read PDF Pages`)
};

/**
* | output |
* | --- |
* | "Read PDF Pages" |
*
* @param {Agent_Tool_Read_Pdf_Pages_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_read_pdf_pages_name = /** @type {((inputs?: Agent_Tool_Read_Pdf_Pages_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Read_Pdf_Pages_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_read_pdf_pages_name(inputs)
	return en_agent_tool_read_pdf_pages_name(inputs)
});