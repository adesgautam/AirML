'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FIRST_GROUP_PATTERN = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = format;
exports.format_national_number_using_format = format_national_number_using_format;
exports.format_national_number = format_national_number;
exports.choose_format_for_number = choose_format_for_number;
exports.local_to_international_style = local_to_international_style;

var _common = require('./common');

var _parse = require('./parse');

var _metadata = require('./metadata');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Formats a phone number
//
// Example use cases:
//
// ```js
// format('8005553535', 'RU', 'International')
// format('8005553535', 'RU', 'International', metadata)
// format({ phone: '8005553535', country: 'RU' }, 'International')
// format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
// format('+78005553535', 'National')
// format('+78005553535', 'National', metadata)
// ```
//
function format(first_argument, second_argument, third_argument, fourth_argument) {
	var _sort_out_arguments = sort_out_arguments(first_argument, second_argument, third_argument, fourth_argument),
	    input = _sort_out_arguments.input,
	    format_type = _sort_out_arguments.format_type,
	    metadata = _sort_out_arguments.metadata;

	var country_metadata = void 0;

	if (input.country) {
		country_metadata = metadata.countries[input.country];
	}

	var _parse_phone_number_a = (0, _parse.parse_phone_number_and_country_phone_code)(input.phone, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (country_phone_code) {
		// Check country restriction
		if (input.country && country_metadata && country_phone_code !== (0, _metadata.get_phone_code)(country_metadata)) {
			return input.phone;
		}

		country_metadata = (0, _metadata.get_metadata_by_country_phone_code)(country_phone_code, metadata);
	}

	if (!country_metadata) {
		return input.phone;
	}

	switch (format_type) {
		case 'International':
			if (!number) {
				return '+' + (0, _metadata.get_phone_code)(country_metadata);
			}
			var national_number = format_national_number(number, 'International', false, country_metadata);
			return '+' + (0, _metadata.get_phone_code)(country_metadata) + ' ' + national_number;

		case 'International_plaintext':
			return '+' + (0, _metadata.get_phone_code)(country_metadata) + input.phone;

		case 'National':
			if (!number) {
				return '';
			}
			return format_national_number(number, 'National', false, country_metadata);
	}
}

// This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.
// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js

var FIRST_GROUP_PATTERN = exports.FIRST_GROUP_PATTERN = /(\$\d)/;

function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
	var format_pattern_matcher = new RegExp((0, _metadata.get_format_pattern)(format));

	var national_prefix_formatting_rule = (0, _metadata.get_format_national_prefix_formatting_rule)(format, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && (0, _metadata.get_format_national_prefix_is_optional_when_formatting)(format, country_metadata) && !enforce_national_prefix;

	if (!international && !national_prefix_may_be_omitted) {
		return number.replace(format_pattern_matcher, (0, _metadata.get_format_format)(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
	}

	var formatted_number = number.replace(format_pattern_matcher, international ? (0, _metadata.get_format_international_format)(format) : (0, _metadata.get_format_format)(format));

	if (international) {
		return local_to_international_style(formatted_number);
	}

	return formatted_number;
}

function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
	var format = choose_format_for_number((0, _metadata.get_formats)(country_metadata), number);

	if (!format) {
		return number;
	}

	return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
}

function choose_format_for_number(available_formats, national_number) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _format = _step.value;

			// Validate leading digits
			if ((0, _metadata.get_format_leading_digits_patterns)(_format).length > 0) {
				// The last leading_digits_pattern is used here, as it is the most detailed
				var last_leading_digits_pattern = (0, _metadata.get_format_leading_digits_patterns)(_format)[(0, _metadata.get_format_leading_digits_patterns)(_format).length - 1];

				// If leading digits don't match then move on to the next phone number format
				if (national_number.search(last_leading_digits_pattern) !== 0) {
					continue;
				}
			}

			// Check that the national number matches the phone number format regular expression
			if ((0, _common.matches_entirely)(national_number, new RegExp((0, _metadata.get_format_pattern)(_format)))) {
				return _format;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

// Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
function local_to_international_style(local) {
	return local.replace(new RegExp('[' + _parse.VALID_PUNCTUATION + ']+', 'g'), ' ').trim();
}

// Sort out arguments
function sort_out_arguments() {
	var first_argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var second_argument = arguments[1];
	var third_argument = arguments[2];
	var fourth_argument = arguments[3];

	var input = void 0;
	var format_type = void 0;
	var metadata = void 0;

	// Sort out arguments
	if (typeof first_argument === 'string') {
		// If country code is supplied
		if (typeof third_argument === 'string') {
			// Will be `parse()`d later in code
			input = {
				phone: first_argument,
				country: second_argument
			};

			format_type = third_argument;
			metadata = fourth_argument;
		}
		// Just an international phone number is supplied
		else {
				// Will be `parse()`d later in code
				input = {
					phone: first_argument
				};

				if (typeof second_argument !== 'string') {
					throw new Error('Format type argument not passed for `format()`');
				}

				format_type = second_argument;
				metadata = third_argument;
			}
	} else {
		input = first_argument;
		format_type = second_argument;
		metadata = third_argument;
	}

	// Sanity check
	if (!metadata) {
		throw new Error('Metadata not passed');
	}

	switch (format_type) {
		case 'International':
		case 'International_plaintext':
		case 'National':
			break;
		default:
			throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
	}

	return { input: input, format_type: format_type, metadata: metadata };
}
//# sourceMappingURL=format.js.map