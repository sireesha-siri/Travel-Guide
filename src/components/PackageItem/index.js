import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails

  return (
    <li>
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PackageItem
