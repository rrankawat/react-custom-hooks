import useFetch from '../../hooks/use-fetch/use-fetch'

const FetchComponent = () => {
  const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos`)

  return <>{data && data.map(item => <p key={item.id}>{item.title}</p>)}</>
}

export default FetchComponent
