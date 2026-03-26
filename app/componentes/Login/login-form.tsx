import { useState } from 'react';
import { TextInput, PasswordInput, Button, Paper } from '@mantine/core';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/jwt/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
        credentials: 'include', // 🔥 MUITO IMPORTANTE
      });

      if (!response.ok) {
        throw new Error('Erro ao logar');
      }

      console.log('Logado com sucesso');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Paper p="md" w={300}>
      <TextInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />

      <PasswordInput
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Button fullWidth mt="md" onClick={handleLogin}>
        Entrar
      </Button>
    </Paper>
  );
}