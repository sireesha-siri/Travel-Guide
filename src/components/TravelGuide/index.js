import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, packagesList: []}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)

    const data = await response.json()

    const formattedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))

    this.setState({isLoading: false, packagesList: formattedData})
  }

  successView = () => {
    const {packagesList} = this.state

    return (
      <ul>
        {packagesList.map(each => (
          <PackageItem key={each.id} packageDetails={each} />
        ))}
      </ul>
    )
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="travel-guide-container">
        <h1 className="travel-guide-heading">Travel Guide</h1>
        <hr />

        <div className="view-container">
          {isLoading ? this.loadingView() : this.successView()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
