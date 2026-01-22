import { motion } from 'motion/react'

const contacts = [
  { label: 'General', email: 'hello@skypeople.co' },
  { label: 'Press', email: 'press@skypeople.co' },
  { label: 'Wholesale', email: 'wholesale@skypeople.co' },
]

export function ContactSection() {
  return (
    <section
      data-section="contact"
      className="relative"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Left vertical rule continues from hero */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-foreground" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-muted font-mono block lg:origin-top-left"
              style={{
                transform: 'rotate(-90deg) translateX(-100%)',
                transformOrigin: 'top left',
                position: 'relative',
                left: '10%',
                top: '0',
              }}
            >
              Contact
            </span>
          </motion.div>

          {/* Right - Contact details */}
          <div className="lg:col-span-4 pl-[12%] lg:pl-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="py-6 border-b border-border group"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-muted font-mono">
                      {contact.label}
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-mono text-foreground relative overflow-hidden"
                    >
                      <span className="relative z-10">{contact.email}</span>
                      {/* Underline slide-in from left */}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-150 ease-out" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
