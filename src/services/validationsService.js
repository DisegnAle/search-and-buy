import { UtilsService } from "./utilsService.js";

export const ValidationsService = {
  onlyLettersAllowed: (_, value, callback) => {
    if (value == "") {
      callback();
    } else {
      if (!UtilsService.isOnlyAlphabeticCharacters(value)) {
        callback(new Error("Please input only letters"));
      } else {
        callback();
      }
    }
  },
};
