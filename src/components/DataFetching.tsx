import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [val, setVal] = useState<number | null>(null)
    const [recordId, setRecordId] = useState<number | null>(null)

    const handleButtonClick = () => {
        setRecordId(Number(val))
    }

    useEffect(() => {
        setLoading(true)  // ✅ Set loading to true when starting fetch
        setError('')      // ✅ Clear any previous errors

        const url = recordId ? `https://jsonplaceholder.typicode.com/posts/${recordId}` : 'https://jsonplaceholder.typicode.com/posts'

        axios.get(url)
            .then(response => {
                console.log(response.data)
                // Convert single object to array if it's not already an array
                const data = Array.isArray(response.data) ? response.data : [response.data]
                setPosts(data)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setPosts([])
                setLoading(false)
                setError(`Something went wrong!: ${error.message}`)
            })
    }, [recordId])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }
  return (
    <div>

        <input type="number" value={val ?? ""} onChange={(e) => setVal(Number(e.target.value))} />
        <button onClick={handleButtonClick}>Fetch</button>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default DataFetching
