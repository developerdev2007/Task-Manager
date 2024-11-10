import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Header>
        <Nav>
          <SearchBar>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M9.167 3.333a5.833 5.833 0 1 0 0 11.667 5.833 5.833 0 0 0 0-11.667m-7.5 5.834a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M13.286 13.286a.833.833 0 0 1 1.178 0l3.625 3.625a.833.833 0 0 1-1.178 1.178l-3.625-3.625a.833.833 0 0 1 0-1.178"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Search Project</span>
            </div>
          </SearchBar>
          <Filter>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="#797979"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.3"
                d="M3.6 1h8.8c.733 0 1.333.6 1.333 1.333V3.8c0 .533-.333 1.2-.666 1.533L10.2 7.867c-.4.333-.667 1-.667 1.533v2.867c0 .4-.266.933-.6 1.133L8 14c-.867.533-2.067-.067-2.067-1.133V9.333c0-.466-.266-1.066-.533-1.4L2.867 5.267c-.334-.334-.6-.934-.6-1.334V2.4c0-.8.6-1.4 1.333-1.4"
              ></path>
            </svg>
            Filters
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#797979"
                d="M8 11.2c-.467 0-.933-.18-1.287-.533L2.367 6.32a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L7.42 9.96c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-4.346 4.347c-.354.353-.82.533-1.287.533"
              ></path>
            </svg>
          </Filter>
        </Nav>
      </Header>
    </>
  );
};

const Header = styled.header`
  background-color: #ecedee;
  height: 76px;
  width: 98%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const Nav = styled.nav`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  width: 100%;

  justify-content: space-between;
`;

const SearchBar = styled.div`
  width: 308px;
  height: 40px;
  padding: 10px 12px 10px 12px;
  gap: 10px;
  border-radius: 30px;
  border: none;
  opacity: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff;
  .svg-icon {
    font-size: 16px;
    font-family: Poppins;
    padding: 5px 10px;
    text-transform: capitalize;
    color: #6a6a6a;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const Filter = styled.div`
  width: 107px;
  height: 39px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 4px 8px;
  gap: 8px;
  font-weight: 500; //
  font-family: Inter;
  font-size: 16px;
  line-height: 19.36px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
export default Navbar;
