
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';
// import LoginForm from '../componentes/Login/login-form';
import { useAuthStore } from '../stores/authStore';

export default function LoginPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const checkAuth = useAuthStore((state) => state.checkAuth);

  // 🌙 dark mode (opcional)
  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchDark.addEventListener('change', handleChange);

    return () => matchDark.removeEventListener('change', handleChange);
  }, []);

  // 🔐 verifica sessão ao entrar
  useEffect(() => {
  const run = async () => {
    await checkAuth();

    const isAuth = useAuthStore.getState().isAuthenticated;

    if (isAuth) {
      const next =
        new URLSearchParams(window.location.search).get('next') || '/home';

      navigate(next, { replace: true });
    }
  };

  run();
}, [checkAuth, navigate]);

  return (
    <div className="h-screen flex">
      {/* esquerda */}
      <div
        className={`flex flex-col justify-center items-center p-8 w-full md:w-1/2 ${
          isDarkMode ? 'bg-[#2B2B2B]' : 'bg-gray-100'
        }`}
      >
        <div>teste</div>
      </div>

      {/* direita (imagem) */}
      <div className="hidden md:flex flex-1 justify-center items-center bg-black">
        <img
          src={isDarkMode ? '/images/racha-dark.png' : '/images/racha-light.png'}
          alt="Login"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
}