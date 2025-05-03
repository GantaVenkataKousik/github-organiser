import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, LinkIcon } from "lucide-react"

export function DeveloperProfile() {
  return (
    <Card className="overflow-hidden border border-border/50 card-hover-effect card-shadow">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
        <CardTitle className="font-semibold">Developer Profile</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-ahNZVbZXWHc2YigMpJYjthXDVlqKlc.jpeg"
                alt="Ganta Venkata Kousik"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">Ganta Venkata Kousik</h2>
            <p className="text-primary font-medium">Software Developer</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>venkatakousikcs01@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+91 7337066524</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://github.com/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://www.linkedin.com/in/gantavenkatakousik/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://linktr.ee/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="h-4 w-4" />
                  LinkTree
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
