import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  id: string;
  label: string;
}

const FilterCheckbox = ({ id, label }: Props) => {
  return (
    <label htmlFor={id} className="flex w-fit items-center space-x-2">
      <Checkbox id={id} />
      <span className="text-sm font-bold leading-none">{label}</span>
    </label>
  );
};

export default FilterCheckbox;
