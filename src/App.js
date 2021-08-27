import classes from './App.module.css';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import Navbar from './Navbar';
import React,{Component} from 'react';
import ProductData from './ProductData';
class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos : 0,
    showHeartBeatSection : false,
  }

  onColorOptionClick = (pos)=>{
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos)=>{
    let updatedState =false;
    if(pos===1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection:updatedState});
  }

  render() {
    return (
      <div className="">
      <Navbar/>
        <div className={classes.MainContainer}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
        </div>
      </div>
    );
  }
}
// function App() {
  
// }

export default App;
