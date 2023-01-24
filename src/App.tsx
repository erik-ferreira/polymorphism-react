import "./styles/global.css";

import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 text-white flex items-center justify-center gap-4">
      <Button>Salvar</Button>
      <Button asChild>
        <a href="https://www.google.com/maps">Criar Conta</a>
      </Button>
    </div>
  );
}
