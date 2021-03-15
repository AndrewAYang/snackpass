const NAME_KEY = "Item Name"; 
const RESTAURANT = "Restaurant"; 
const PRICE = "Product Price"; 
const MINUTES_AGO = "Minutes Ago"; 
const QUANTITY = "Quantity"; 

export const SortProductByItemName = (allProducts) => {
    var productDict = {}; 
    const _populateDict = (value) => {
        var itemName = value[NAME_KEY]
        if (itemName in productDict) {
            var currentValue = productDict[itemName]
            currentValue = {...currentValue};
            productDict[itemName] = {
                "Item Name": itemName,
                "Restaurant": value[RESTAURANT], 
                "Product Price": value[PRICE],
                "Minutes Ago": parseInt(value[MINUTES_AGO]) < currentValue[MINUTES_AGO] ? parseInt(value[MINUTES_AGO]) : currentValue[MINUTES_AGO],  
                "Quantity": currentValue[QUANTITY] + parseInt(value[QUANTITY])
            }
        } else {
            productDict[itemName] = {
                "Item Name": itemName,
                "Restaurant": value[RESTAURANT], 
                "Product Price": value[PRICE],
                "Minutes Ago": parseInt(value[MINUTES_AGO]),
                "Quantity": parseInt(value[QUANTITY])
            }
        }
    }
    allProducts.forEach(_populateDict);
    var productDictAsArray = Object.values(productDict); 
    productDictAsArray.sort(_sortByQuantityAndMostRecent);
    return productDictAsArray; 
};

const _sortByQuantityAndMostRecent = (p1, p2) => {
    if (p1[QUANTITY] > p2[QUANTITY]) {
        return -1; 
    } else if (p1[QUANTITY] < p2[QUANTITY]) {
        return 1; 
    } else {
        if (p1[MINUTES_AGO] > p2[MINUTES_AGO]) {
            return 1; 
        } else if (p1[MINUTES_AGO] < p2[MINUTES_AGO]) {
            return -1; 
        }
        return 0; 
    }
}