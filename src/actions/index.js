export function selectBook(book){
    //this is an ACTION CREATOR, it needs to return an action, an object MUST contain a TYPE and PAYLOAD(optional) property. 
    return {
        type: 'BOOK_SELECTED', //always uppercase
        payload: book
    };
}