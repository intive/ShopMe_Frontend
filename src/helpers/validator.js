const validator = {

  isRequired(required, value) {
    return (value.trim() === '' && required) ? 'helpers.validator.errorEmptyField' : undefined;
  },

  hasMinLength(minLength, value) {
    return value.length < minLength ? 'helpers.validator.errorMinLength' : undefined;
  },

  useOnlyAlpha(value) {
    const pattern = /^[A-ZĄĘĆŁŃÓŚŹŻ]*$/i;
    return !pattern.test(value) ? 'helpers.validator.errorOnlyAlpha' : undefined;
  },

  useOnlyLegalCharacters(pattern, value) {
    return !pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  mustUseAlpha(value) {
    const pattern = /^[^A-ZĄĘĆŁŃÓŚŹŻ]*$/i;
    return pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  useOnlyNumeric(value) {
    const pattern = /[0-9]+$/i;
    return !pattern.test(value) ? 'helpers.validator.errorOnlyNumeric' : undefined;
  },

  isValidEmail(value) {
    const pattern = /^\S+@\S+\.\S+$/;
    return !pattern.test(value) ? 'helpers.validator.errorEmailRegex' : undefined;
  },

  isChecked(checked) {
    return !checked ? 'helpers.validator.errorEmptyField' : undefined;
  },

  mustHave(pattern, value) {
    return !pattern.test(value) ? 'helpers.validator.errorPasswordRequirements' : undefined;
  },

  validateNameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(3, value) ||
      validator.useOnlyAlpha(value) ||
      undefined;
  },

  validateSurnameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(2, value) ||
      validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ-\s]*$/i, value) ||
      validator.mustUseAlpha(value) ||
      undefined;
  },

  validateEmailInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.isValidEmail(value) ||
      undefined;
  },

  validateTextInput(required, value) {
    return validator.isRequired(required, value) ||
      undefined;
  },

  validateCheckbox(checked) {
    return validator.isChecked(checked) ||
      undefined;
  },

  validateAddOfferTitle(required, value) {
    return validator.isRequired(required, value) ||
    validator.hasMinLength(2, value) ||
    validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ0-9\s]*$/i, value) ||
    undefined;
  },

  validatePhoneNumber(required, value) {
    return validator.isRequired(required, value) ||
    validator.useOnlyNumeric(value) ||
    validator.hasMinLength(9, value) ||
    undefined;
  },

  validateCity(required, value) {
    return validator.isRequired(required, value) ||
    validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ-\s]+$/i, value) ||
    undefined;
  },

  validatePassword(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(8, value) ||
      validator.mustHave(/[A-Z]+/, value) ||
      validator.mustHave(/[1-9]+/, value) ||
    undefined;
  },
};

export default validator;
