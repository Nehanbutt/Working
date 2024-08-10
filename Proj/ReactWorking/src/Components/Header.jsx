import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current URL path

  const btns = [
    {
      title: 'Sign In',
      id: 'loginButton',
      link: '/signIn',
    },
    {
      title: 'Sign Up',
      id: 'signupButton',
      link: '/signUp',
    }
  ];

  return (
    <>
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link to={'/'} className="text-3xl font-bold text-green-400 header-animate">GRATA</Link>
          <div className="space-x-4">
            {btns.map((btn) => (
              <Link
                to={btn.link}
                key={btn.id}
                className={`text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 ${location.pathname === btn.link ? 'bg-black' : (btn.title === 'Sign In' ? 'bg-blue-500' : 'bg-green-500')
                  }`}
              >
                {btn.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;