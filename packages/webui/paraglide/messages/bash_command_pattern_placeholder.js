/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bash_Command_Pattern_PlaceholderInputs */

const zh_bash_command_pattern_placeholder = /** @type {(inputs: Bash_Command_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 * 或 npm*`)
};

const en_bash_command_pattern_placeholder = /** @type {(inputs: Bash_Command_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. * or npm*`)
};

/**
* | output |
* | --- |
* | "e.g. * or npm*" |
*
* @param {Bash_Command_Pattern_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const bash_command_pattern_placeholder = /** @type {((inputs?: Bash_Command_Pattern_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bash_Command_Pattern_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_bash_command_pattern_placeholder(inputs)
	return en_bash_command_pattern_placeholder(inputs)
});