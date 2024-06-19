// Reference: https://park-ui.com/docs/panda/components/avatar

import { type AvatarProps, Avatar as _Avatar } from '@/components/ui/avatar'

export const Avatar = (props: AvatarProps) => {
  return <_Avatar src='https://i.pravatar.cc/300' name='John Doe' {...props} />
}
