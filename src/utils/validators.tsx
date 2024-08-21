export const validateEmail = (value: string) => {
  const isValid = value
    ?.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

  if (!value || isValid) {
    return Promise.resolve()
  }
  return Promise.reject(new Error('E-mail inválido'))
}
