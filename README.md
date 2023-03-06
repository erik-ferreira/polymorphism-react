<p>
  <h1>Polimorfismo</h1>
</p>

Nesse projeto foi usado mais especificamente o [Slot](https://www.radix-ui.com/docs/primitives/utilities/slot) do Radix para exemplificar o polimorfismo no React. Basicamente podemos ter componentes que aparentam algo para o usuário, mas podemos tratar de forma diferente.

## :rocket: Tecnologias

Foram usadas as seguintes tecnologias:

- [React.js](https://pt-br.reactjs.org)
- [Radix](https://www.radix-ui.com)

## :pencil: Exemplo

1. Na imagem abaixo, o botão crie sua conta tem a mesma estilização do botão entrar, mas eles tão tem o mesmo tipo de funcionalidade.
   1.1 O primeiro realmente tem a funcionalidade de um botão, afinal vai dar submit no formulário e etc
   1.2 O segundo seria apenas um link, já que ele não vai criar a conta em si, vai apenas redirecionar para outra tela.

<div align="center">
  <img src=".github/login.png">
</div>

2. Entenda como fica o código

```jsx
// Componente de button no ReactJS utilizando o slot
import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, ...rest }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className="px-4 py-2 bg-orange-400 rounded font-bold"
      {...rest}
    />
  );
}
```

```jsx
import { Button } from "./components/Button";

export function App() {
  return (
    <>
      // Este primeiro será apenas um button normal
      <Button>Salvar</Button>
      // Já este segundo, ao passar o asChild, todas as propriedades passadas
      para ele serão passadas para o primeiro elemento dentro dele, neste caso o
      link(tag a) // Desta forma ele herda todas as estilizações do button, mas
      tem um comportamento diferente
      <Button asChild>
        <a href="https://www.google.com/maps">Criar Conta</a>
      </Button>
    </>
  );
}
```
