import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface DeleteButtonProps {
  actionOnClick: MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton = ({ actionOnClick }: DeleteButtonProps) => {
  return (
    <button onClick={actionOnClick}>
      <FontAwesomeIcon
        icon={faXmark}
        size="2x"
        color="red"
        title="delete-button"
      />
    </button>
  );
};

export default DeleteButton;
