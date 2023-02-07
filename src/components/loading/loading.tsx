import React from 'react'
import { LoadingStyle } from 'theme'

import { Comment } from 'react-loader-spinner'

type LoadingComProps = {
    backColor?: string
    color?: string,
    loadbackColor?: string 
}

export const LoadingCom:React.FC<LoadingComProps> = ({color,backColor,loadbackColor}) => {
  return (
    <>
      <LoadingStyle>
        <Comment
          height="100"
          width="100"
          color={color}
          backgroundColor={backColor}
          ariaLabel="loading"
        />
      </LoadingStyle>
    </>
  )
}
