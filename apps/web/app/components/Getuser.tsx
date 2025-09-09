

import { client } from '@repo/db/client'
import React from 'react'

async function GetUser() {
    const user = await client.user.findFirst();

    if(!user) {
        return
    }

  return (
    <div>{user.username}</div>
  )
}

export default GetUser