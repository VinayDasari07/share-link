import { TypographyVariant } from '@mui/material'

export interface Header {
  logoUrl: string
  title: string
  subtitle: string
}

export interface InputField {
  placeholder: string
  autoFocus?: boolean
  onChange?: () => void
  handleOnKeyPress?: () => void
}
export interface SearchInput {
  input: InputField
  invite: string
  store?: any
}
export interface About {
  logoUrl: string
  ctaText: string
  ctaUrl: string
}

export interface CopyLink {
  logoUrl: string
  ctaText: string
}
export interface Footer {
  about: About
  copyLink: CopyLink
}

export interface Modal1 {
  header: Header
  inputField: SearchInput
  footer: Footer
}
export type ProfileInfoVariant = 'small' | 'medium'
export interface ProfileInfo {
  variant?: ProfileInfoVariant
  logoUrl: string
  name: string
  description?: string
}

export interface Bookmarked {
  profileInfo?: ProfileInfo
  dropdown: {
    options: string[]
    textVariant: TypographyVariant
  }
}

export interface SearchWindowHeader {
  store?: any
  inputField: InputField
  dropdown: {
    options: string[]
    size: 'medium' | 'small'
  }
  button: string
}

export interface SearchWindow {
  header: SearchWindowHeader
  footer: {
    about: About
  }
}

export interface SearchProfile {
  name: string
  logoUrl: string
  email?: string
}

export interface Entities {
  person?: SearchProfile[]
  group?: SearchProfile[]
}
export interface SearchResults {
  entity: Entities
}
