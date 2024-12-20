import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm.js';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.find(item => item.id === id);
    this.setState({ selectedItem: selectedItem });
  }

  handleChangingStock = (isRestock) => {
    const editedItem = { ...this.state.selectedItem, quantity: this.state.selectedItem.quantity + (isRestock ? 1 : - 1) }
    const editedMainItemList = this.state.mainItemList
      .map(item => item = item.id === this.state.selectedItem.id ? editedItem : item);
    this.setState({
      selectedItem: editedItem,
      mainItemList: editedMainItemList
    })
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .map(item => item = item.id === this.state.selectedItem.id ? itemToEdit : item);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    })
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
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm
        item={this.state.selectedItem}
        onEditItem={this.handleEditingItemInList} />
      buttonText = "Return to item list";
    }
    else if (this.state.selectedItem) {
      currentlyVisibleState = <ItemDetail
        item={this.state.selectedItem}
        onClickingDelete={this.handleDeletingItem}
        onClickingEdit={this.handleEditClick}
        onClickingChangeStock={this.handleChangingStock} />
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