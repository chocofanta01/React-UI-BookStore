import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <h1 className="logo">
        BOOK STORE
      </h1>
      <div className="copyright">
        <p>copyright(c), 2026, book store.</p>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
  }
  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export default Footer;