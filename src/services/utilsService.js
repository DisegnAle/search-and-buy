import { Notification } from "element-ui";
export const UtilsService = {
  composeString(...strings) {
    let finalString = "";
    let i = 0;
    for (i; i < strings.length; i++) {
      let currentString = strings[i];
      finalString = `${finalString}${currentString}`;
    }
    return finalString;
  },

  isInputFilled(inputName) {
    return !!inputName;
  },
  isItemInList({ list, item, currentItemProp, targetItemProp }) {
    return list.find((_item) => {
      return _item[targetItemProp] === item[currentItemProp];
    });
  },
  showNotification(options) {
    Notification(options);
  },
  isOnlyAlphabeticCharacters(value) {
    return /^[a-zA-Z ]+$/.test(value);
  },
  parseFirebaseFetchedData(snapshot) {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },
};
