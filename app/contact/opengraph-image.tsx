import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Contact Veritas Speaking'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F1E8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', color: '#1E3A5F' }}>
          Contact Veritas Speaking
        </div>
        <div style={{ fontSize: 30, color: '#1E3A5F', marginTop: 20 }}>
          Get in Touch - Toronto Youth Public Speaking Coaching
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
