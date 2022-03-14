import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface DeleteButtonProps {
  actionOnClick: React.MouseEventHandler<SVGSVGElement>;
}

const DeleteButton = ({ actionOnClick }: DeleteButtonProps) => {
  return (
    <FontAwesomeIcon
      icon={faXmark}
      size="2x"
      color="red"
      onClick={actionOnClick}
      title="delete-button"
    />
  );
};

export default DeleteButton;
