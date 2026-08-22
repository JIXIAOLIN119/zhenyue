/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Env_Var_Empty_NoteInputs */

const zh_env_var_empty_note = /** @type {(inputs: Env_Var_Empty_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果留空，将从主机的环境中读取值。`)
};

const en_env_var_empty_note = /** @type {(inputs: Env_Var_Empty_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If left empty, the value will be read from the host machine's environment.`)
};

/**
* | output |
* | --- |
* | "If left empty, the value will be read from the host machine's environment." |
*
* @param {Env_Var_Empty_NoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const env_var_empty_note = /** @type {((inputs?: Env_Var_Empty_NoteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Var_Empty_NoteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_env_var_empty_note(inputs)
	return en_env_var_empty_note(inputs)
});