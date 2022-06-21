import moment from "moment";

const dateCalc = () => {
  // zustand state
  let todayDate = moment();
  let endDate = moment(moment(), "DD-MM-YYYY").add(7, "days");

  // days and dates to display
  let daysAndDatesToShow = () => {
    let dates = [];

    let currDate = moment(todayDate).startOf("day");
    let lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) < 0) {
      dates.push(currDate.clone().toDate());
    }
    return [moment().toDate(), ...dates];
  };

  return {
    daysAndDatesToShow,
  };
};
export default dateCalc;
