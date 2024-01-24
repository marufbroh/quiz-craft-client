import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { useGetAllModulesQuery } from "../redux/api/baseApi";
import { setSelectedModule } from "../redux/features/module/moduleSlice";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

//   console.log(modules);
  return (
    <div className="w-72 m-20">
      <Select
        onChange={(value) => {
          const moduleTitle = modules.data.find(
            (module) => module._id === value
          ).title;
          dispatch(
            setSelectedModule({
              moduleTitle,
              moduleId: value,
            })
          );
          dispatch(setActiveStep(1));
        }}
        placeholder={""}
        label="Select Module"
      >
        {/* <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option> */}
        {modules?.data.map((module) => (
          <Option key={module._id} value={module._id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}
