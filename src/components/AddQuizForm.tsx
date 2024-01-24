import { Button, Card, Input, Typography } from "@material-tailwind/react";

export function AddQuizForm() {
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Add Quiz
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
            <Input
              size="lg"
              crossOrigin=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button placeholder={""} type="submit">
            Add Quiz
          </Button>
        </div>
      </form>
    </Card>
  );
}
