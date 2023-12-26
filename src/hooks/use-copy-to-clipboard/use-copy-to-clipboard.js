import copy from 'copy-to-clipboard'
import { useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = text => {
    if (typeof text === 'string' || typeof text === 'number') {
      copy(text.toString())
      setIsCopied(true)
    } else {
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      )
      setIsCopied(false)
    }
  }

  return [isCopied, handleCopy]
}

export default useCopyToClipboard
