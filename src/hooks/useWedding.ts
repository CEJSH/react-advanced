import { getWedding } from '@/api/wedding'
import { Wedding } from '@/models/wedding'
import { useEffect, useState } from 'react'

function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    getWedding()
      .then((res) => {
        // react의 Fetch는 에러를 잡지 않으므로 명시적으로 던져주어야 한다.
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])
  return { wedding, loading, error }
}

export default useWedding
