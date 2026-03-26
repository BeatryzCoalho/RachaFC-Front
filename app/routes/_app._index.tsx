// import LoginForm from '~/components/login/login-form';
// import { useEffect, useState } from 'react';
// import { useAuthStore } from '~/stores/authStore';
// import { useNavigate } from 'react-router';

export default function LoginPage() {}
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   // const { checkAuth } = useAuthStore();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
//     setIsDarkMode(matchDark.matches);

//     const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

//     matchDark.addEventListener('change', handleChange);

//     const handleSessionCheck = async () => {
//       await checkAuth();

//       if (useAuthStore.getState().isAuthenticated) {
//         const nextParam = new URLSearchParams(window.location.search).get('next') || '/home';

//         navigate(nextParam, { replace: true });
//       }
//     };

//     handleSessionCheck();

//     return () => matchDark.removeEventListener('change', handleChange);
//   }, [checkAuth, navigate]);

//   return (
//     <div className="relative h-screen flex ">
//       <div
//         className={`absolute left-0 top-0 bottom-0 z-10 flex flex-col justify-center p-10 shadow-lg items-center gap-5 ${
//           isDarkMode ? 'bg-[#2B2B2B]' : 'bg-gray-100'
//         }`}
//         style={{
//           width: '52%',
//           borderTopRightRadius: '30px',
//           borderBottomRightRadius: '30px',
//         }}
//       >
//         <LoginForm />
//       </div>
//       <div className="flex-1 relative flex justify-end items-end object-contain">
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src={isDarkMode ? '/public/images/floki-dark.png' : '/public/images/Login-floki.jpeg'}
//           alt="Imagem de dragão"
//           className="w-[50%] h-[100%] "
//         />
//       </div>
//     </div>
//   );
// }