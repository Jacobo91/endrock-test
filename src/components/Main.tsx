'use client'

import { motion } from 'framer-motion'

export default function Main({ children } : {children: React.ReactNode}){
    return(
        <motion.div 
            className="mx-5 sm:mx-10 mt-10"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:20 }}
        >
            {children}
        </motion.div>
    )
}