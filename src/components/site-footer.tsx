export function SiteFooter() {
  return (
    <footer className="py-10 flex justify-between items-center">
      <div className="text-[0.75rem] text-muted-foreground tracking-[2px]">
        SeiKai <span className="text-primary">Kyo</span> &middot; {new Date().getFullYear()}
      </div>
      <div className="flex gap-5">
        {[
          { label: 'GitHub', href: 'https://github.com/seikaikyo' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/seikaikyo' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground no-underline text-[0.75rem] tracking-[1px] transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
