export const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const passwordLengthIsValid = (text) => {
	if (text.length >= 6 && text.length <= 30)
		return true;
	return false;
}