import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";
import { FaUserAlt, FaSignOutAlt, FaPlusCircle, FaSignInAlt, FaShoppingCart, FaList } from "react-icons/fa";

function Header() {
  const { category } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <Link to="/">
          BOOK STORE
        </Link>
      </h1>
      <nav className="category">
        <ul>
          {category.map((item) => (
            <li key={item.category_id}>
              <Link to={item.category_id === null ? "/books" : `/books?category_id=${item.category_id}`}>
                {item.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        {isLoggedIn && (
          <ul>
            <li>
              <Link to="/cart"><FaShoppingCart />장바구니</Link>
            </li>
            <li>
              <Link to="/orderlist"><FaList />주문내역</Link>
            </li>
            <li>
              <button onClick={storeLogout}><FaSignOutAlt />로그아웃</button>
            </li>
          </ul>
        )}
        {!isLoggedIn && (
          <ul>
            <li>
              <Link to="/login"><FaSignInAlt />로그인</Link>
            </li>
            <li>
              <Link to="/signup"><FaPlusCircle />회원가입</Link>
            </li>
          </ul>
        )}
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  .logo {
    a {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      color: ${({ theme }) => theme.color.primary};
    }
  }
  .category {
    ul {
      display: flex;
      gap: 32px;
      list-style: none;
      li {
        a {
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};
          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
  .auth {
    ul {
      display: flex;
      gap: 16px;
      list-style: none;
      li {
        a, button {
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;
          color: ${({ theme }) => theme.color.text};
          svg {
            color: ${({ theme }) => theme.color.secondary};
          }
        }
      }
    }
  }
`;

export default Header;