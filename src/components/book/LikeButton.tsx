import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Props) {
  return (
    <LikeButtonStyle size="medium" schema={book.liked ? "like" : "normal"} onClick={onClick}>
      <FaHeart />
      <span>{book.likes}</span>
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    color: ${({ theme, schema }) => schema === "like" ? "white" : "grey"};
  }
`;

export default LikeButton;
