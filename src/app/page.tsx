'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flower2, Handshake, Smile, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [accepted, setAccepted] = useState(false)

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Фон из кустовых роз */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/roses-bg.png')" }}
        aria-hidden
      />
      {/* Затемнение для читаемости текста */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-rose-950/40 via-rose-900/30 to-rose-950/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-rose-50/10 backdrop-blur-[2px]"
        aria-hidden
      />

      {/* Падающие лепестки роз */}
      <FallingPetals />

      {/* Контент */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/15 p-6 shadow-2xl backdrop-blur-md sm:p-10">
            {/* Мягкое свечение внутри карточки */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              {/* Иконка-цветок */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 12 }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/30 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Flower2 className="h-7 w-7 text-rose-200" />
                </motion.div>
              </motion.div>

              {/* Изображение барашка */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl" />
                <motion.img
                  src="/lamb.png"
                  alt="Милый барашек среди роз"
                  className="relative h-40 w-40 rounded-full border-4 border-white/60 object-cover shadow-xl sm:h-52 sm:w-52"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Бейдж */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm sm:text-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                <span>дружба важнее любой ссоры</span>
              </motion.div>

              {/* Главный текст */}
              <AnimatePresence mode="wait">
                {!accepted ? (
                  <motion.div
                    key="apology"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center"
                  >
                    <h1 className="font-serif text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
                      Извини
                    </h1>
                    <h2 className="mt-2 font-serif text-4xl font-semibold italic text-rose-100 drop-shadow-md sm:text-5xl md:text-6xl">
                      барашка
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-rose-50/90 sm:text-lg">
                      Мне правда жаль, что так вышло. Я совсем не хотел тебя
                      обидеть. Ты классная подруга, и ссориться с тобой совсем не
                      хочется.
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-8"
                    >
                      <Button
                        onClick={() => setAccepted(true)}
                        size="lg"
                        className="rounded-full border border-white/40 bg-rose-500/90 px-8 py-6 text-base font-semibold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-rose-500 sm:text-lg"
                      >
                        <Handshake className="mr-2 h-5 w-5" />
                        Принять извинения
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 shadow-lg"
                    >
                      <Smile className="h-8 w-8 text-rose-500" />
                    </motion.div>
                    <h2 className="font-serif text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
                      Спасибо! 🤗
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-rose-50/90 sm:text-lg">
                      Ты лучшая подруга! Давай больше не ссориться 🤝
                    </p>
                    <button
                      onClick={() => setAccepted(false)}
                      className="mt-6 text-sm font-medium text-rose-100/80 underline-offset-4 hover:underline"
                    >
                      написать ещё раз
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Подпись снизу */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-center text-xs tracking-widest text-rose-50/70 uppercase"
          >
            🌹 среди кустовых роз 🌹
          </motion.p>
        </motion.div>
      </section>
    </main>
  )
}

/* Анимация падающих лепестков роз */
function FallingPetals() {
  const petals = Array.from({ length: 14 })
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden>
      {petals.map((_, i) => {
        const left = (i * 7 + 5) % 100
        const delay = (i * 1.3) % 10
        const duration = 9 + (i % 5)
        const size = 12 + (i % 4) * 6
        return (
          <motion.div
            key={i}
            initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: '110vh',
              x: [0, 30, -20, 25, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0, 0.9, 0.9, 0.7, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ left: `${left}%`, width: size, height: size }}
            className="absolute top-0"
          >
            <div
              className="h-full w-full rounded-[50%_0_50%_50%] bg-gradient-to-br from-rose-200 to-rose-400 shadow-md"
              style={{ opacity: 0.8 }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
