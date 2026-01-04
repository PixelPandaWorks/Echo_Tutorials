import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600 mb-2 block">
              ECHO Tutorial
            </Link>
            <p className="text-muted-foreground text-sm">Personal Attention. Strong Concepts. Better Results.</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium mb-2">Vapi / Valsad, Gujarat</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ECHO Tutorial. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
