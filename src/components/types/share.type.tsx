
export interface Header {
  logo: string
  title: string
  subtitle: string
}
export interface InputField {
  placeholder: string
  invite: string
}
export interface Footer {
  logo1: string
  text1: string
  ctaUrl: string
  logo2: string
  text2: string
}

export interface Modal1 {
  header: Header
  inputField: InputField
  footer: Footer
}
