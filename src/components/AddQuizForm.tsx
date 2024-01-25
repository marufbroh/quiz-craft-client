import {
    Button,
    Card,
    Input,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import {
    addQuiz,
    setCorrectOption,
    setDescription,
    setOptions,
    setQuestion
} from "../redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function AddQuizForm() {
  const { moduleTitle, moduleId } = useAppSelector((state) => state.module);
  const dispatch = useAppDispatch();

  const { question, description, options, correctOption } = useAppSelector(
    (state) => state.quiz
  );

  const handleAddQuiz = (e) => {
    e.preventDefault();
    const myQuiz = {
      module: moduleId,
      question: question,
      description: description,
      options: options,
      correctOption: correctOption,
    };

    dispatch(addQuiz(myQuiz));

  };

  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        {moduleTitle}
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Please Add Your Quiz Below
      </Typography>
      <form className="mt-8 mb-2 w-full">
        <div className="mb-1 grid grid-cols-2 gap-4">
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Question
            </Typography>
            <Input
              onChange={(e) => dispatch(setQuestion(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              onChange={(e) => dispatch(setDescription(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Option 1
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Option 2
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Option 3
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Option 4
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Correct Option
            </Typography>
            {/* <Input
              onBlur={(e) => dispatch(setCorrectOptions(e.target.value))}
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
            <Select
              placeholder={""}
              onChange={(value) => dispatch(setCorrectOption(value))}
            >
              {options.map((option) => (
                <Option value={option}>{option}</Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleAddQuiz} placeholder={""} type="submit">
            Add Quiz
          </Button>
        </div>
      </form>
    </Card>
  );
}
