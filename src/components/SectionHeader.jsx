const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-church-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-church-gold mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionHeader
