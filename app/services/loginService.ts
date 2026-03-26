export async function getCurrentUser() {
  const res = await fetch('http://localhost:8000/users/me', {
    credentials: 'include',
  });

  if (!res.ok) return null;

  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch('http://localhost:8000/auth/jwt/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      username: email,
      password,
    }),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Erro ao logar');

  return res;
}

export async function logout() {
  await fetch('http://localhost:8000/auth/jwt/logout', {
    method: 'POST',
    credentials: 'include',
  });
}