const styles = {
  primary: 'bg-lime text-ink hover:bg-white',
  ghost: 'border border-line text-fg hover:border-lime hover:text-lime',
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-colors duration-200 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
