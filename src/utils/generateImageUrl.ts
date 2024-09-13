function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dzznz3aqo/image/upload/${option}/v1726213732/${filename}_${format}.${format}`
}

export default generateImageUrl
