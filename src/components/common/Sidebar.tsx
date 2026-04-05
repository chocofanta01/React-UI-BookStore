import styled from "styled-components";

function Sidebar() {
  return <SidebarStyle>사이드바</SidebarStyle>;
}

const SidebarStyle = styled.aside`
  padding: 1rem;
  color: ${({ theme }) => theme.color.text};
`;

export default Sidebar;