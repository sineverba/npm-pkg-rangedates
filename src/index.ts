import moment = require("moment");

/**
 *
 */
export const rangeDates = (
  dateStart: any,
  dateEnd: any,
  outputFormat = "YYYY-MM-DD"
) => {
  // Save in a temp variable the dateStart
  let returnDateStart = dateStart;
  // Save in a temp variable the dateEnd
  let returnDateEnd = dateEnd;
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
