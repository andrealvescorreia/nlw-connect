import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-semibold font-heading">Hello world!</h1>
      <Button type="submit">
        Oi
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
      <div>
        <InputRoot error>
          <InputField placeholder="Digite o e-mail" />
          <InputIcon>
            <Mail />
          </InputIcon>
        </InputRoot>
      </div>
    </main>
  );
}
