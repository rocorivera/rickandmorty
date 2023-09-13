
const Locationinfo = ({location}) => {
  return (
   <article className="info">
    <h2>{location?.name}</h2>
    <ul>
        <li><span>Type: </span><span>{ location?.type }</span></li>
        <li><span>Dimension: </span><span>{ location?.dimension ||"unknown" }</span></li>
        <li><span>population: </span><span>{ location?.residents.length }</span></li>
    </ul>

   </article>
  )
}

export default Locationinfo