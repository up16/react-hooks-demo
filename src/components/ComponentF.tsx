import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            (user) => {
                return <div>Hello {user ?? "Guest"}
                <ChannelContext.Consumer>
                    {
                        (channel) => {
                            return <div>Welcome to {channel}</div>
                        }
                    }
                </ChannelContext.Consumer>
                </div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
