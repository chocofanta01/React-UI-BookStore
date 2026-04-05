import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  linelimit: number;
}

function EllipsisBox({ children, linelimit }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <EllipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
      <p>{children}</p>
      <div className="toggle">
        <Button size="small" schema="normal" onClick={() => setExpanded(!expanded)}>
          {expanded ? "접기" : "펼치기"}
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
}

interface EllipsisBoxStyleProps {
  linelimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ linelimit, $expanded }) => ($expanded ? "none" : linelimit)};
    -webkit-box-orient: vertical;
    padding: 20px 0 0;
    margin: 0;
    color: ${({ theme }) => theme.color.text};
    line-height: 1.6;
  }
  .toggle {
    display: flex;
    justify-content: end;
    button {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

export default EllipsisBox;
