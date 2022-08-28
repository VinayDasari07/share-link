import { Typography as TypographyMUI, TypographyProps as MuiTypographyType, TypographyVariant } from '@mui/material'

export interface TypographyProps extends MuiTypographyType {
  variant?: TypographyVariant
  children?: React.ReactNode
  value?: string
  weight?: 'regular' | 'bold'
  sx?: any
  OnClick?: () => void
}

export const Typography = ({
  variant,
  children,
  value = '',
  weight = 'regular',
  sx = {},
  onClick,
  ...rest
}: TypographyProps): React.ReactElement => {
  return (
        <TypographyMUI
            sx={{ ...sx }}
            variant={variant}
            fontWeight={weight}
            {...rest}
        >
            {children ?? value}
        </TypographyMUI>
  )
}
