import useCopyToClipboard from '../../hooks/use-copy-to-clipboard/use-copy-to-clipboard'

const CopyToClipboardComponent = () => {
  const [isCopied, handleCopy] = useCopyToClipboard()

  const code = `<pre>
        <code>
            // Your code goes here
            function example() {
            console.log("Hello, world!");
            }
        </code>
    </pre>`

  return (
    <>
      {code}

      <button onClick={() => handleCopy(code)}>
        {isCopied ? 'Text Copied' : 'Copy To Clipboard'}
      </button>
    </>
  )
}

export default CopyToClipboardComponent
