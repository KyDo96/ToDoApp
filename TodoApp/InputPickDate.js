import React, { useState } from "react";
import { Button, View,TouchableOpacity,TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {format} from "date-fns";
// import * as moment from "moment";
// let moment = require('moment');
const InputPickDate = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [valueInput,setValueInput]=useState('ky');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
      console.log(date)
    let dateString =format(date,'dd/MM/yyyy');
    setValueInput(dateString);
    console.log(dateString)
    hideDatePicker();
  };

  return (
      <>
    <TouchableOpacity onPress={showDatePicker}>
<TextInput style={{width:300,height:30}} editable={false} onTouchStart={showDatePicker} value={valueInput} />
</TouchableOpacity>
<DateTimePickerModal
textColor="white"
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </>
  );
};

export default InputPickDate;