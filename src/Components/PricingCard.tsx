import Button from "./Button";

const SvgIcon = ({ ...props }) => (
  <svg
    {...props}
    className={"flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 " + props?.className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
  </svg>
);

export default function PricingCard() {
  const availablePoints = ["Static website", " Integration help", "Complete documentation"];
  const unAvailablePoints = ["24x7 phone & email support", "20GB Cloud storage", "API Access", "Sketch Files"];

  return (
    <div className="w-full max-w-none sm:max-w-sm p-4 shadow sm:p-8 border border-[var(--border)]">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Basic plan</h5>
      <div className="flex items-baseline">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal opacity-55">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {availablePoints?.map((val) => {
          return (
            <li className="flex items-center">
              <SvgIcon />
              <span className="text-base font-normal leading-tight opacity-70 ms-3">{val}</span>
            </li>
          );
        })}

        {unAvailablePoints?.map((val) => {
          return (
            <li className="flex line-through decoration-gray-500 items-center">
              <SvgIcon className="text-gray-400 dark:text-gray-500" />
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val}</span>
            </li>
          );
        })}
      </ul>
      <Button type="button" className="w-full">
        Choose plan
      </Button>
    </div>
  );
}
