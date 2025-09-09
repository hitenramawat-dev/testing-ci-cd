

import { client } from '@repo/db/client'
import React from 'react'

async function GetUser() {
    const user = await client.user.findFirst();

    if(!user) {
        return
    }

  return (
    <div>
        username:
        {user.username}
        password
        {user.password}
    </div>
  )
}

export default GetUser
