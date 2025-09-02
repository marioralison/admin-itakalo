import { Button } from "../../components/ui/button.js"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.js"

import { toast } from 'sonner'
import { Toaster } from "sonner"
import { Input } from "../../components/ui/input.js"
import { Label } from "../../components/ui/label.js"

export default function Authentification() {
  return (
    <Card className="w-full max-w-sm py-10 shadow-xl">
      <Toaster />
      <CardHeader>
        <CardTitle className="w-full flex items-center justify-center text-4xl">I-Takalo</CardTitle>
        <CardDescription className="w-full flex items-center justify-center">
          Se connecter en tant qu'administrateur
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button 
          className="w-full text-black"
          onClick={(e) => {
            e.preventDefault()
            toast("Connexion réussi !", {
              description: "Vous êtes connecté avec succès",
              action: {
                label: "Fermer",
                onClick: () => console.log("Alert fermé !")
              }
            })
          }}
        >
          Se connecter
        </Button>
      </CardFooter>

    </Card>
  )
}
