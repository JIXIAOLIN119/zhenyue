/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Permission_Owner_And_EditorInputs */

const zh_permission_owner_and_editor = /** @type {(inputs: Permission_Owner_And_EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员与编辑`)
};

const en_permission_owner_and_editor = /** @type {(inputs: Permission_Owner_And_EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner & Editor`)
};

/**
* | output |
* | --- |
* | "Owner & Editor" |
*
* @param {Permission_Owner_And_EditorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permission_owner_and_editor = /** @type {((inputs?: Permission_Owner_And_EditorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Permission_Owner_And_EditorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_permission_owner_and_editor(inputs)
	return en_permission_owner_and_editor(inputs)
});