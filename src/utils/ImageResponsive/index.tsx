import { ImageResponse } from '@vercel/og'
import React, { Children } from 'react'
 
export const runtime = 'edge'
 
export async function ImageResponseGET(Children: React.ReactNode) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      {Children}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}