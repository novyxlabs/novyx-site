export default function About() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Built by Blake Heron</h1>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I manage 800+ real estate leads. Every one of them needs follow-up.
            Context. History. What they said three months ago.
          </p>
          <p>
            AI was supposed to help. But every conversation started from zero.
            Claude doesn&apos;t remember. GPT doesn&apos;t remember. They&apos;re brilliant
            amnesiacs.
          </p>
          <p>
            So I built Novyx. Memory that persists. Security that protects.
            Rollback when things go wrong. Now I&apos;m making it available to
            everyone building AI agents.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <a
            href="https://x.com/NovyxLabs"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com/novyxlabs"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
