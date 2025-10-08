import {useEffect} from 'react'

function useDocumentTitle(title: number) {
  useEffect(() => {
    document.title = `Count: ${title}`
  }, [title])
}

export default useDocumentTitle
