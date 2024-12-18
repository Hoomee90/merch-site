import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null
    };
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.find(item => item.id === id);
    this.setState({ selectedItem: selectedItem });
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedItem) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} />
      buttonText = "Return to Merchandise List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Merchandise List";
    }
    else {
      currentlyVisibleState = <ItemList
        itemList={this.state.mainItemList}
        onItemSelection={this.handleChangingSelectedItem} />
      buttonText = "Add Merch Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;