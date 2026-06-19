"use client"
import { authClient } from '@/lib/auth-client';
const OwnComment = ({data}) => {
      const { data: session } = authClient.useSession()
      const user = session?.user || null;
    const id = user?.id
    const ownComment = data.filter(el=>el.userId === id)
  return (
    <div>
      {
        ownComment.map(el=><div key={el._id} >{el.message}</div>)
      }
    </div>
  )
}

export default OwnComment
