'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FF5926] px-4 py-5 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className='transition-opacity duration-300 hover:opacity-90'>
            <Image 
              src="casa-do-microondas.svg"
              alt="Logo da empresa" 
              width={150}  
              height={50}
            />
          </Link>

          <div className='hidden items-center gap-6 md:flex'>
            <Link
              href="/"
              className={`relative px-1 py-2 font-bold transition-all duration-500 ${
                isActive('/') ? 'text-[#FF0]' : 'hover:text-[#FF0]'
              }`}
            >
              Início
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-[#FF0]"
                initial={{ width: 0 }}
                animate={{ 
                  width: isActive('/') ? '100%' : 0,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                whileHover={{ 
                  width: isActive('/') ? '100%' : '50%',
                  transition: { duration: 0.3 }
                }}
              />
            </Link>

            <Link
              href="/localizacao"
              className={`relative px-1 py-2 font-bold transition-all duration-500 ${
                isActive('/localizacao') ? 'text-[#FF0]' : 'hover:text-[#FF0]'
              }`}
            >
              Localização
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-[#FF0]"
                initial={{ width: 0 }}
                animate={{ 
                  width: isActive('/localizacao') ? '100%' : 0,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                whileHover={{ 
                  width: isActive('/localizacao') ? '100%' : '50%',
                  transition: { duration: 0.3 }
                }}
              />
            </Link>

            <Link
              href="/conserto"
              className={`relative px-1 py-2 font-bold transition-all duration-500 ${
                isActive('/conserto') ? 'text-[#FF0]' : 'hover:text-[#FF0]'
              }`}
            >
              Conserto em 30 minutos
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-[#FF0]"
                initial={{ width: 0 }}
                animate={{ 
                  width: isActive('/conserto') ? '100%' : 0,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                whileHover={{ 
                  width: isActive('/conserto') ? '100%' : '50%',
                  transition: { duration: 0.3 }
                }}
              />
            </Link>

            <Link
              href="/contato"
              className={`relative px-1 py-2 font-bold transition-all duration-500 ${
                isActive('/contato') ? 'text-[#FF0]' : 'hover:text-[#FF0]'
              }`}
            >
              Contato
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-[#FF0]"
                initial={{ width: 0 }}
                animate={{ 
                  width: isActive('/contato') ? '100%' : 0,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                whileHover={{ 
                  width: isActive('/contato') ? '100%' : '50%',
                  transition: { duration: 0.3 }
                }}
              />
            </Link>
          </div>

          <motion.button 
            className='text-white focus:outline-none md:hidden'
            onClick={toggleMenu}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            {isMenuOpen ? (
              <motion.svg
                className='h-6 w-6'
                fill="none"
                role="img"
                aria-label={"Fechar menu"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                className='h-6 w-6'
                fill="none"
                role="img"
                aria-label={"Abrir menu"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className='overflow-hidden md:hidden'
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div className="mt-4 space-y-3 pb-2">
                <motion.div variants={itemVariants}>
                  <Link
                    href="/"
                    className={`block rounded-md px-3 py-2 font-bold transition-colors duration-300 ${
                      isActive('/') ? 'bg-[#FF0]/20 text-[#FF0]' : 'hover:bg-[#FF0]/10 hover:text-[#FF0]'
                    }`}
                  >
                    Início
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/localizacao"
                    className={`block rounded-md px-3 py-2 font-bold transition-colors duration-300 ${
                      isActive('/localizacao') ? 'bg-[#FF0]/20 text-[#FF0]' : 'hover:bg-[#FF0]/10 hover:text-[#FF0]'
                    }`}
                  >
                    Localização
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/conserto"
                    className={`block rounded-md px-3 py-2 font-bold transition-colors duration-300 ${
                      isActive('/conserto') ? 'bg-[#FF0]/20 text-[#FF0]' : 'hover:bg-[#FF0]/10 hover:text-[#FF0]'
                    }`}
                  >
                    Conserto em 30 minutos
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/contato"
                    className={`block rounded-md px-3 py-2 font-bold transition-colors duration-300 ${
                      isActive('/contato') ? 'bg-[#FF0]/20 text-[#FF0]' : 'hover:bg-[#FF0]/10 hover:text-[#FF0]'
                    }`}
                  >
                    Contato
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
