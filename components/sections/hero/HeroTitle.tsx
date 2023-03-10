import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useRecoilValue } from 'recoil'
import DataStateInterface, { DataState } from '../../../stores/data'

const HeroTitle = () => {
  const [ words, setWords ] = useState<string[]>([''])
  const data = useRecoilValue<DataStateInterface | null>(DataState)
  const [ text ] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000
  })

  useEffect(() => {
    if (!data?.pageInfo?.typeWritterValue) {
      return
    }

    setWords(data.pageInfo.typeWritterValue.split('-'))
  }, [ data?.pageInfo?.typeWritterValue ])

  return (
    <h1 className={'text-5xl lg:text-6xl font-semibold px-10'}>
      <div className={'hero-title text-[color:var(--text)] inline-block mr-1'}>
        <span>{`<`}</span>
        <span>{text}</span>
        <span>{` />`}</span>
      </div>
      <Cursor cursorColor={'var(--primary-80)'} />
    </h1>
  )
}

export default HeroTitle
