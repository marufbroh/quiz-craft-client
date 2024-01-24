import { Select, Option } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { useGetAllModulesQuery } from "../redux/api/baseApi";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery(undefined);
  console.log(modules);
  return (
    <div className="w-72 m-12">
      <Select
        onChange={() => {
          dispatch(setActiveStep(1));
        }}
        placeholder={""}
        label="Select Module"
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}
