import moment = require("moment");

/**
 *
 * Reformat date if missing the zero padding or is undefined
 *
 * @param dateString the string that represents a date or null
 * @returns
 */
const reformatDate = (dateString: any) => {
  // if date has a month without zero padding
  if (dateString && dateString.length === 5) {
    return `${dateString.substring(0, 4)}0${dateString.substring(4)}`;
  }
  // define a regex for undefined values
  const regex = /undefined.{0,2}$/;
  if (dateString && regex.test(dateString)) {
    return moment();
  }
  return dateString;
};

/**
 *
 */
export const rangeDates = (
  dateStart: any,
  dateEnd: any,
  outputFormat = "YYYY-MM-DD"
) => {
  // Save in a temp variable the dateStart
  let returnDateStart = reformatDate(dateStart);
  // Save in a temp variable the dateEnd
  let returnDateEnd = reformatDate(dateEnd);
  // if dateStart is null, get current date
  if (!returnDateStart) {
    returnDateStart = moment();
  }
  // if dateEnd is null, get current date
  if (!returnDateEnd) {
    returnDateEnd = moment();
  }
  // Swap date if necessary
  if (moment(returnDateStart).isSameOrAfter(returnDateEnd)) {
    return {
      dateStart: moment(returnDateEnd).format(outputFormat),
      dateEnd: moment(returnDateStart).format(outputFormat)
    };
  }
  return {
    dateStart: moment(returnDateStart).format(outputFormat),
    dateEnd: moment(returnDateEnd).format(outputFormat)
  };
};
