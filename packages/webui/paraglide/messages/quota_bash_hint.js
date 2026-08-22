/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Bash_HintInputs */

const zh_quota_bash_hint = /** @type {(inputs: Quota_Bash_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持通配符 (*)。示例：git *、npm test、curl *、python script.py（使用 * 匹配所有命令）`)
};

const en_quota_bash_hint = /** @type {(inputs: Quota_Bash_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supports wildcards (*). Examples: git *, npm test, curl *, python script.py (use * for all commands)`)
};

/**
* | output |
* | --- |
* | "Supports wildcards (*). Examples: git *, npm test, curl *, python script.py (use * for all commands)" |
*
* @param {Quota_Bash_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_bash_hint = /** @type {((inputs?: Quota_Bash_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Bash_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_bash_hint(inputs)
	return en_quota_bash_hint(inputs)
});