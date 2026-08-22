/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Session_ConfirmInputs */

const zh_delete_session_confirm = /** @type {(inputs: Delete_Session_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您确定要删除此会话记录吗？`)
};

const en_delete_session_confirm = /** @type {(inputs: Delete_Session_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to delete this chat session?`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to delete this chat session?" |
*
* @param {Delete_Session_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_session_confirm = /** @type {((inputs?: Delete_Session_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Session_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_session_confirm(inputs)
	return en_delete_session_confirm(inputs)
});