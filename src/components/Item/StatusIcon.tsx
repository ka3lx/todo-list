import MinusIcon from "../../Icons/MInus";
import CheckIcon from "../../Icons/Check";

type StatusIconProps = {
  isDone: boolean;
};

function StatusIcon({ isDone }: StatusIconProps) {
  return isDone ? <CheckIcon /> : <MinusIcon />;
}

export default StatusIcon;
