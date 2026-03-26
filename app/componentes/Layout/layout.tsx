import { useComputedColorScheme, useMantineTheme } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light");

  const isDarkMode = colorScheme === "dark";

  const backgroundColor = isDarkMode
    ? theme.colors["dark-gray"][0]
    : theme.colors["ice-white"][0];

  const pathname = window.location.pathname;
  const isLoginPage = pathname.includes("/login");

  if (isLoginPage) {
    return <div className="h-screen">{children}</div>;
  }

  return (
    <div
      className="h-screen w-full flex justify-center"
      style={{ backgroundColor }}
    >
      {/* Container do app */}
      <div className="w-full max-w-[500px] flex flex-col h-full">

        {/* Header (componente depois) */}
        {/* <Header /> */}

        {/* Conteúdo */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Bottom navbar (componente depois) */}
        {/* <BottomNavbar /> */}

      </div>
    </div>
  );
}