import {DateInput} from "@nextui-org/react";
import {CalendarDate, getLocalTimeZone, parseDate, today} from "@internationalized/date";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <DateInput 
          label={"Fecha de nacimiento"} 
          isRequired
          maxValue={today(getLocalTimeZone())}
          placeholderValue={new CalendarDate(1995, 11, 6)} 
        />
    </div>
  );
}