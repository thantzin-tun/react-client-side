import React from "react";
import { Icon, InputIconField } from "theme";

type InputFieldProps = {
    icon?: any,
    children?: JSX.Element
    iconPosition?: string
}

export const InputField = ({children,icon,iconPosition}: InputFieldProps) => {
  return(
      <>
        <InputIconField>
            {children}
            {
                icon 
                ?
                <Icon src={icon} alt="inputIcon"   position={iconPosition}  />
                :
                ""
            }
        </InputIconField>
      </>
  )
}