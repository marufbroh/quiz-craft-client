import { Step, Stepper } from "@material-tailwind/react";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function DefaultStepper() {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStep(0))}
          className="px-8 w-fit"
        >
          Quiz List
        </Step>
        <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStep(1))}
          className="px-8 w-fit"
        >
          Add Quiz
        </Step>
      </Stepper>
    </div>
  );
}
