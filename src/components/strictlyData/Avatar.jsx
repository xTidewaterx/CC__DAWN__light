import React from 'react'

export const Avatar = (param) => {
  console.log(param)
  return (
    <div className={'App__Avatar' + (param.param)} ><img className={'App__AvatarImage' + (param.cl) + " " + "App__AvatarImage"} src='https://i.pinimg.com/736x/db/96/8d/db968dd78740ec7111381b26204e336a.jpg' /></div>
  )
}
