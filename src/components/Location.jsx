

const Location = ({ location }) => {
  return (
   <section className="hidden">
    <h2>{location?.name}</h2>
    <ul>
      <li>Type: {location?.type}</li>
      <li>Dimension {location?.dimension} </li>
      <li>Population {location?.residents.length} </li>
    </ul>
   </section>
  )
}

export default Location