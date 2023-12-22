const errorDefault = {
  status: false,
  message: '',
}

export const inpuntValidation = stateInput => {
  let errorValidation = { ...errorDefault }
  var regexNumber = /\d/

  if (regexNumber.test(stateInput)) {
    return (errorValidation = {
      ...errorValidation,
      status: true,
      message: 'Character invalid',
    })
  } else if (stateInput.length === 0) {
    return (errorValidation = {
      ...errorValidation,
      status: true,
      message: 'Null value',
    })
  } else {
    return (errorValidation = {
      ...errorDefault,
    })
  }
}
