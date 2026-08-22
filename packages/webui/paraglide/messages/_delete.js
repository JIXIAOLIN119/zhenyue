/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} _DeleteInputs */

const zh__delete = /** @type {(inputs: _DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const en__delete = /** @type {(inputs: _DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {_DeleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
const _delete = /** @type {((inputs?: _DeleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<_DeleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh__delete(inputs)
	return en__delete(inputs)
});
export { _delete as "delete" }